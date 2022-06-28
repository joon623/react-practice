import React, {FC} from 'react';
import {Box, Flex, Text} from "native-base";
import {renderMinuteToHourTime} from "./index.helper";

type WRIndexOneLineSummaryType = {
    actualSleepTime: number;
    sleepLatency: number;
};
type WRIndexOneLineSummaryProps = {
    data: WRIndexOneLineSummaryType;
};

const WRIndexOneLineSummary: FC<WRIndexOneLineSummaryProps> = ({data}) => {

    const smallHeadText = {
        alignItems: 'center',
        color: '#E2E2E2',
        display: 'flex',
        fontSize: '15px',
        fontWeight: 400,
        justifyContent: 'space-between',
        lineHeight: '155%',
    };

    return (
        <Box>
            <Text
                color='#E2E2E2'
                fontSize="17px"
                fontWeight={600}
                mt="64px"
                mb='11px'
            >
                수면 리포트
            </Text>
            <Box
                background='#151515'
                color='#E2E2E2'
                fontSize="17px"
                fontWeight={600}
                py='32px'
                px='24px'
                borderRadius='24px'
            >
                <Flex direction='row' justifyContent="space-between">
                    <Text
                        {...smallHeadText}
                    >
                        실제 잔 시간
                    </Text>
                    <Text
                        {...smallHeadText}
                    >
                        {renderMinuteToHourTime(data.actualSleepTime)}
                    </Text>
                </Flex>
                <Flex direction='row' justifyContent="space-between"
                      mt='32px'
                >
                    <Text
                        {...smallHeadText}
                    >
                        잠들기까지 걸린 시간
                    </Text>
                    <Text
                        {...smallHeadText}
                    >
                        {renderMinuteToHourTime(data.sleepLatency)}
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
};

export {WRIndexOneLineSummary};
