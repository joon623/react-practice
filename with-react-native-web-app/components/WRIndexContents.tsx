import React, {FC} from 'react';
import WRIndexDateSection from "./WRIndexDateSection";
import {WRIndexMainCard} from "./WRIndexMainCard";
import {ScrollView} from "native-base";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import {WRIndexTodayAdvice} from "./WRIndexTodayAdvice";
import {WRIndexOneLineSummary} from "./WRIndexOneLineSummary";
import WRIndexComparation from "./WRIndexComparation";
import {
    INITIAL_SLEEP_STAGE_RATIO,
    INITIAL_SLEEP_STAGE_TIME,
    renderDeepComparationData,
    renderLatencyComparationData,
    renderRemComparationData,
    renderSleepStageData
} from "./index.helper";
import {WRIndexSleepRatioStackedBar} from "./WRIndexSleepRatioStackedBar";
import {WRIndexLoadingIndicator} from "./WRIndexLoadingIndicator";
import {WebviewIndexInnerPaddingPX} from "../variables";


type WRIndexContentsProps = {
    // $style?: StyleObject;
    // dir?: 'ltr' | 'rtl';
    // originDate: Date;
    // stageValue: WRIndexSleepRatioStackedBarProps;
    // sleepReport: WRIndexOneLineSummaryType;
    // deepComparation: WRIndexComparationType;
    // remComparation: WRIndexComparationType;
    // latencyComparation: WRIndexComparationType;
    todayAdvice?: string;
    // mainCard: WRIndexMainCardType;
    isLoading: boolean;
    // idx: number;
};


dayjs.extend(utc);
dayjs.locale('ko');
const WRIndexContents: FC<WRIndexContentsProps> = ({isLoading}) => {
    return (
        <ScrollView
            bg="#0D0D0D"
            _contentContainerStyle={{
                height: `${isLoading ? '100vh' : "auto"}`,
                pb: "85px",
                px: WebviewIndexInnerPaddingPX,
            }}
        >
            <WRIndexDateSection/>
            {isLoading ? <WRIndexLoadingIndicator/> :
                <>
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
                    <WRIndexTodayAdvice
                        advice={"당신은 오늘 깊은 수면은 15%인 게 적당하고 신체를 회복시켜요. 깊은 수면은 15%인 게 적당하고 신체를 회복시켜요."}/>
                    <WRIndexOneLineSummary data={{
                        actualSleepTime: 500,
                        sleepLatency: 100
                    }}/>
                    <WRIndexComparation data={renderDeepComparationData(99).deepComparation}/>
                    <WRIndexComparation data={renderRemComparationData(78).remComparation}/>
                    <WRIndexComparation data={renderLatencyComparationData(99).latencyComparation}/>
                    <WRIndexSleepRatioStackedBar {...renderSleepStageData(INITIAL_SLEEP_STAGE_RATIO,
                        INITIAL_SLEEP_STAGE_TIME).stageValue}/>
                </>
            }
        </ScrollView>
    );
};

export {WRIndexContents};
