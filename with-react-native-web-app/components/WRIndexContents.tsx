import React from 'react';
import WRIndexDateSection from "./WRIndexDateSection";
import {WRIndexMainCard} from "./WRIndexMainCard";
import {Box} from "native-base";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import {WRIndexTodayAdvice} from "./WRIndexTodayAdvice";


// type WRIndexContentsProps = {
//     $style?: StyleObject;
//     dir?: 'ltr' | 'rtl';
//     originDate: Date;
//     stageValue: WRIndexSleepRatioStackedBarProps;
//     sleepReport: WRIndexOneLineSummaryType;
//     deepComparation: WRIndexComparationType;
//     remComparation: WRIndexComparationType;
//     latencyComparation: WRIndexComparationType;
//     todayAdvice?: string;
//     mainCard: WRIndexMainCardType;
//     isLoading: boolean;
//     idx: number;
// };

dayjs.extend(utc);
dayjs.locale('ko');
const WRIndexContents = () => {
    return (
        <Box bg={"#0D0D0D"} px="4" py="4" flex={1}>
            <WRIndexDateSection/>
            <WRIndexMainCard data={{
                tag: {first: "잠 못 이루는 밤", second: "안녕하세여"},
                title: "스트레스 회복의 잠",
                timeArrange: `${dayjs()
                    .utc(true)
                    .format('D일 a h:mm')} ~ ${dayjs()
                    .utc(true)
                    .format('D일 a h:mm')}`,
                oneLineComment: "낮에 있었던 스트레스를 완화하고, 학습한" +
                    "내용을 저장하는 REM 수면 비율이 높았어요."
            }}/>
            <WRIndexTodayAdvice advice={"당신은 오늘 깊은 수면은 15%인 게 적당하고 신체를 회복시켜요. 깊은 수면은 15%인 게 적당하고 신체를 회복시켜요."}/>
        </Box>
    );
};

export {WRIndexContents};
