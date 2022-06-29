import React, {FC} from 'react';
import {renderMinuteToHourTime} from "./index.helper";
import {Box, HStack, Text, VStack} from "native-base";


type RenderEvaluationType = '좋아요' | '많아요' | '적어요';

type WRIndexComparationType = {
    subTitle: string;
    user: {
        category: string;
        value: number;
    };
    criteria: {
        value: number;
        rem?: {
            min: number;
            max: number;
        };
    };
    unit: string;
    renderTitle: () => string;
    renderEvaluation: () => RenderEvaluationType;
    renderComment?: () => string;
};

type WRIndexComparationProps = {
    data: WRIndexComparationType;
};

const SLEEP_EVALUATION = {
    great: '좋아요',
    lack: '적어요',
    plenty: '많아요',
};

const COMPONENT_COLORS = {
    greatBarColor: '#82DE9F',
    greatFontBackground: '#324037',
    greatFontColor: '#82DE9F',
    lackBarColor: '#F3CC68',
    lackFontBackground: '#454136',
    lackFontColor: '#CCB26E',
    plentyBarColor: '#DB704E',
    plentyFontBackground: '#453732',
    plentyFontColor: '#DB704E',
};

const BAR_DEFAULT_HEIGHT = 100;
const BAR_DEFAULT_HEIGHT_PX = `${BAR_DEFAULT_HEIGHT}px`;
type CriteriaType = 'user' | 'criteria';

const WRIndexComparation: FC<WRIndexComparationProps> = ({data}) => {
    const barStyle = {
        width: '52px',
        borderTopRadius: "11px"
    };

    const ratioStyle = {
        fontSize: '21px',
        fontWeight: 600,
        lineHeight: '29px',
        marginBottom: '8px',
    };

    const labelStyle = {
        fontSize: '11px',
        fontWeight: 500,
        lineHeight: '20px',
    };

    const setUserUnitValue = () => {
        return data.unit === '분'
            ? renderMinuteToHourTime(data.user.value)
            : `${data.user.value}${data.unit}`;
    };

    const setCriteriaUnitValue = () => {
        if (data.criteria.value >= 60) {
            throw new Error('data.criteria.value가 넘어가면 설계를 다시 고려하세요.');
        }
        return data.criteria.rem
            ? `${data.criteria.rem.min}~${data.criteria.rem.max}${data.unit}`
            : `${data.criteria.value}${data.unit}`;
    };

    const setBarHeight = (criteria: CriteriaType): string => {
        if (data.criteria.value > data.user.value) {
            return criteria === 'user'
                ? calculateHeight(data.criteria.value, data.user.value)
                : BAR_DEFAULT_HEIGHT_PX;
        } else if (data.criteria.value < data.user.value) {
            return criteria === 'criteria'
                ? calculateHeight(data.user.value, data.criteria.value)
                : BAR_DEFAULT_HEIGHT_PX;
        } else {
            return BAR_DEFAULT_HEIGHT_PX;
        }
    };

    const setBarHeightWhenRem = (criteria: CriteriaType): string => {
        if (!data.criteria.rem) {
            throw new Error('rem 상태가 아닙니다.');
        } else {
            if (data.user.value > data.criteria.rem.max) {
                return criteria === 'user'
                    ? BAR_DEFAULT_HEIGHT_PX
                    : calculateHeight(data.user.value, data.criteria.value);
            } else if (data.user.value < data.criteria.rem.min) {
                return criteria === 'criteria'
                    ? BAR_DEFAULT_HEIGHT_PX
                    : calculateHeight(data.criteria.value, data.user.value);
            } else {
                return BAR_DEFAULT_HEIGHT_PX;
            }
        }
    };

    const calculateHeight = (
        largerValue: number,
        smallerValue: number,
    ): string => {
        if (smallerValue === largerValue) {
            throw new Error('smallerValue === largerValue check');
        } else if (smallerValue > largerValue) {
            throw new Error('smallerValue > largerValue check');
        }
        // (100 * smallerValue) / largerValue
        /*
                   Rem 일 떄 처리
                   criteria value를 22.5로 처리
                */
        return `${(BAR_DEFAULT_HEIGHT * smallerValue) / largerValue}px`;
    };

    const setUserValueColor = (): string => {
        if (data.renderEvaluation() === SLEEP_EVALUATION.great) {
            return COMPONENT_COLORS.greatBarColor;
        } else if (data.renderEvaluation() === SLEEP_EVALUATION.plenty) {
            return COMPONENT_COLORS.plentyBarColor;
        } else {
            return COMPONENT_COLORS.lackBarColor;
        }
    };

    const setFontBackgroundColor = (): string => {
        if (data.renderEvaluation() === SLEEP_EVALUATION.great) {
            return COMPONENT_COLORS.greatFontBackground;
        } else if (data.renderEvaluation() === SLEEP_EVALUATION.plenty) {
            return COMPONENT_COLORS.plentyFontBackground;
        } else {
            return COMPONENT_COLORS.lackFontBackground;
        }
    };


    return (
        <Box background="#1C1C1E"
             mt='20px'
             borderRadius='24px'
             px="24px"
             pt='32px'
             pb='24px'
        >
            <Text
                color='#E2E2E2'
                fontSize='20px'
                fontWeight={600}
                lineHeight="28px"
            >

                {data.renderTitle()}
            </Text>
            <Text
                color='#ebebf599'
                fontSize='17px'
                fontWeight={400}
                lineHeight="22px"
                mb='45px'
            >
                {data.subTitle}
            </Text>
            <HStack justifyContent="center" space='59px' alignItems='flex-end'>
                <VStack
                    alignItems='center'
                >
                    <Box
                        background={`${setFontBackgroundColor()}`}
                        mb='13px'
                        py='2px'
                        px='8px'
                        borderRadius='9px'
                    >
                        <Text
                            color={`${setUserValueColor()}`}
                            fontSize='13px'
                            fontWeight={600}
                            lineHeight='20px'
                        >
                            {data.renderEvaluation()}
                        </Text>
                    </Box>
                    <Box
                        background={`${setUserValueColor()}`}
                        height={`${
                            data.criteria.rem
                                ? setBarHeightWhenRem('user')
                                : setBarHeight('user')
                        }`}
                        mb='13px'
                        {...barStyle}
                    />
                    <Text
                        color={`${setUserValueColor()}`}
                        {...ratioStyle}
                    >
                        {setUserUnitValue()}
                    </Text>
                    <Text
                        color={'#DFDFDF'}
                        {...labelStyle}
                        textAlign='center'
                    >
                        {data.user.category}
                    </Text>
                </VStack>
                {/*// divider*/}
                <VStack
                    alignItems='center'
                >
                    <Box
                        background='#303030'
                        height={`${
                            data.criteria.rem
                                ? setBarHeightWhenRem('criteria')
                                : setBarHeight('criteria')
                        }`}
                        mb='13px'
                        textAlign='center'
                        {...barStyle}
                    />
                    <Text
                        color='#8D8D8D'
                        {...ratioStyle}
                        textAlign='center'
                    >
                        {setCriteriaUnitValue()}
                    </Text>
                    <Text
                        color='#8D8D8D'
                        textAlign='center'
                        {...labelStyle}
                    >
                        의학적 적정
                    </Text>
                </VStack>
            </HStack>
        </Box>
    );
};

export default WRIndexComparation;
