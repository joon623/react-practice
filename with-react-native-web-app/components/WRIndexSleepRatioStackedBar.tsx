import React, {FC, useCallback, useEffect, useState} from 'react';
import {Box, HStack, Text, VStack, ZStack} from "native-base";
import {useMount} from "react-use";
import map from 'lodash/map';
import {renderMinuteToHourTime, setAlphaValue} from "./index.helper";
import {WRIndexSleepRatioBar} from "./WRIndexSleepRatioBar";


/*
 * ratio 순서
 * 1.일반잠
 * 2.깊은잠
 * 3.REM
 * 4.자다깸
 * */
type WRIndexSleepRatioStackedBarProps = {
    stageTime: {
        wake: number;
        rem: number;
        light: number;
        deep: number;
    };
    stageRatio: {
        light: number;
        deep: number;
        rem: number;
        wake: number;
    };
};

type SleepRatioDataType = {
    background: string;
    category: string;
    color: string;
    id: number;
    sleepRatio: number;
    subTitleColor: string;
    time: number;
};

const WRIndexSleepRatioStackedBar: FC<WRIndexSleepRatioStackedBarProps> = ({
                                                                               stageRatio,
                                                                               stageTime,
                                                                           }) => {
    const [currentRatio, setCurrentRatio] = useState(-1);
    const [sleepRatioDataState, setSleepRatioData] = useState<SleepRatioDataType[]>([
        {
            background: `rgba(242, 162, 64, 1)`,
            category: '일반잠',
            color: `rgba(226, 226, 226, 1)`,
            id: 0,
            sleepRatio: stageRatio.light,
            subTitleColor: `rgba(165, 165, 165, 1)`,
            time: stageTime.light,
        },

        {
            background: `rgba(51, 120, 186, 1)`,
            category: '깊은잠',
            color: `rgba(226, 226, 226, 1)`,
            id: 1,
            sleepRatio: stageRatio.deep,
            subTitleColor: `rgba(165, 165, 165, 1)`,
            time: stageTime.deep,
        },
        {
            background: `rgba(238, 214, 71, 1)`,
            category: '자다 깸',
            color: `rgba(226, 226, 226, 1)`,
            id: 3,
            sleepRatio: stageRatio.wake,
            subTitleColor: `rgba(165, 165, 165, 1)`,
            time: stageTime.wake,
        },
        {
            background: `rgba(184, 124, 218, 1)`,
            category: 'REM',
            color: `rgba(226, 226, 226, 1)`,
            id: 2,
            sleepRatio: stageRatio.rem,
            subTitleColor: `rgba(165, 165, 165, 1)`,
            time: stageTime.rem,
        },
    ]);

    const bubble = React.createRef<HTMLDivElement>();
    const r1 = React.createRef<HTMLDivElement>();
    const r2 = React.createRef<HTMLDivElement>();
    const r3 = React.createRef<HTMLDivElement>();
    const r4 = React.createRef<HTMLDivElement>();
    const ratioSection = React.createRef<HTMLDivElement>();


    const calculateLeftValue = useCallback(
        (index: number | undefined): string => {
            if (
                bubble.current &&
                r1.current &&
                r2.current &&
                r3.current &&
                r4.current
            ) {
                if (index === undefined) {
                    return '0';
                }
                const bubbleHalfWidth =
                    bubble?.current?.getBoundingClientRect()?.width / 2;
                switch (index) {
                    case 0: {
                        const diff =
                            (r1.current.getBoundingClientRect().right -
                                r1.current.getBoundingClientRect().left) /
                            2;
                        return String(diff - bubbleHalfWidth);
                    }
                    case 1: {
                        const diff2 =
                            (r2.current.getBoundingClientRect().right -
                                r2.current.getBoundingClientRect().left) /
                            2;
                        return String(
                            r2.current.getBoundingClientRect().left +
                            diff2 -
                            bubbleHalfWidth -
                            r1.current.getBoundingClientRect().left,
                        );
                    }
                    case 2: {
                        const diff3 =
                            (r3.current.getBoundingClientRect().right -
                                r3.current.getBoundingClientRect().left) /
                            2;
                        return String(
                            r3.current.getBoundingClientRect().left +
                            diff3 -
                            bubbleHalfWidth -
                            r1.current.getBoundingClientRect().left,
                        );
                    }
                    case 3: {
                        const diff4 =
                            (r4.current.getBoundingClientRect().right -
                                r4.current.getBoundingClientRect().left) /
                            2;
                        return String(
                            r4.current.getBoundingClientRect().left +
                            diff4 -
                            bubbleHalfWidth -
                            r1.current.getBoundingClientRect().left,
                        );
                    }
                    default: {
                        return '';
                    }
                }
            } else {
                return '';
            }
        },
        [r1, r2, r3, r4, bubble],
    );

    useMount(() => {
        sleepRatioDataState.sort((a: SleepRatioDataType, b: SleepRatioDataType) => {
            return b.sleepRatio - a.sleepRatio;
        });
        setSleepRatioData(sleepRatioDataState);
    });

    useEffect(() => {
        if (currentRatio === -1) {
            if (bubble.current) {
                bubble.current.style.transform = `translateX(0px)`;
            }
        } else {
            if (bubble.current) {
                bubble.current.style.transform = `translateX(${calculateLeftValue(
                    currentRatio,
                )}px)`;
            }
        }
    }, [currentRatio, bubble, calculateLeftValue]);

    const setBorderRadius = (idx: number) => {
        switch (idx) {
            case 0: {
                return {borderLeftRadius: '5px'};
            }
            case 3: {
                return {borderRightRadius: '5px'};
            }
            default: {
                return;
            }
        }
    };

    const setRefToRatioBar = (idx: number) => {
        switch (idx) {
            case 0: {
                return r1;
            }
            case 1: {
                return r2;
            }
            case 2: {
                return r3;
            }
            case 3: {
                return r4;
            }
            default: {
                return r1;
            }
        }
    };

    const resetCurrentRatio = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        if (
            e.target !== bubble.current &&
            e.target !== r1.current &&
            e.target !== r2.current &&
            e.target !== r3.current &&
            e.target !== r4.current &&
            !ratioSection.current?.contains(e.target as Node)
        ) {
            setCurrentRatio(-1);
        }
    };

    return (
        <Box
            mt='51px'
        >
            <Text
                fontSize="24px"
                fontWeight={700}
                lineHeight="28px"
                mb='24px'
                color="white"
            >
                알기 쉬운 나의 잠
            </Text>
            <Box
                background="#1C1C1E"
                borderRadius='24px'
                p='27px'
            >
                <Box
                    ref={bubble}
                    borderRadius='5px'
                    lineHeight='21px'
                    p='10px'
                    display={currentRatio === -1 ? 'none' : 'flex'}
                >
                    <ZStack
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Box
                            background='#494949'
                            borderRadius="5px"
                            w='57px'
                            h='41px'
                            position='absolute'
                            clipPath='polygon(0% 0%, 100% 100%, 100% 0%)'
                        />
                        <Text
                            color='white'
                            fontSize='15px'

                        >
                            {sleepRatioDataState[currentRatio]?.sleepRatio ?? 0}%
                        </Text>
                    </ZStack>
                </Box>
                <HStack>
                    {map(sleepRatioDataState, (el, idx) => {
                        return (
                            <WRIndexSleepRatioBar
                                key={'WRIndexSleepRatioBar' + idx}
                                ref={setRefToRatioBar(idx)}
                                ratio={el.sleepRatio}
                                background={el.background}
                                index={idx}
                                $styles={setBorderRadius(idx)}
                                currentRatio={currentRatio}
                                alphaHandler={setCurrentRatio}
                            />
                        );
                    })}
                </HStack>
                <Box ref={ratioSection}
                     mt={9}
                >
                    {
                        map(
                            sleepRatioDataState,
                            (
                                {
                                    id,
                                    category,
                                    sleepRatio,
                                    time,
                                    background,
                                    color,
                                    subTitleColor,
                                }: SleepRatioDataType,
                                idx
                            ) => (
                                <HStack
                                    h='83px'
                                    opacity={`${setAlphaValue(currentRatio, idx)}`}
                                    onClick={() => {
                                        setCurrentRatio(idx);
                                    }}
                                    justifyContent='space-between'
                                >
                                    <HStack>
                                        <Box
                                            background={background}
                                            w='8px'
                                            h='8px'
                                            mt='2px'
                                            mr='2px'
                                            borderRadius='2px'
                                        />
                                        <VStack>
                                            <Text
                                                color={subTitleColor}
                                            >{category}</Text>
                                            <Text
                                                color={subTitleColor}
                                            >{renderMinuteToHourTime(time)}</Text>

                                        </VStack>
                                    </HStack>
                                    <Text
                                        color={subTitleColor}
                                    >
                                        {sleepRatio}%
                                    </Text>
                                </HStack>
                            ),
                        )
                    }
                </Box>
            </Box>
        </Box>
    );
};

export {WRIndexSleepRatioStackedBar};
export type {WRIndexSleepRatioStackedBarProps};
