/*
 * contents data section end
 *  */

const INITIAL_DEEP_RATIO = 14;
const INITIAL_DEEP_CRITERIA = 15;

const REM_CRITERIA_MIN = 20;
const REM_CRITERIA_MAX = 25;
const REM_CRITERIA = 22.5;
const INITIAL_REM_RATIO = 28;

const LATENCY_CRITERIA = 30;
const INITIAL_LATENCY_RATIO = 31;

const INITIAL_ACTUAL_SLEEP_TIME = 500;
const INITIAL_LATENCY_TIME = 100;

type SleepStageType = {
    deep: number;
    light: number;
    rem: number;
    wake: number;
};

const INITIAL_SLEEP_STAGE_RATIO: SleepStageType = {
    deep: 18,
    light: 64,
    rem: 17,
    wake: 3,
};

const INITIAL_SLEEP_STAGE_TIME: SleepStageType = {
    deep: 130,
    light: 200,
    rem: 95,
    wake: 6,
};

const renderMinuteToHourTime = (time: number) => {
    if (time < 60) {
        return (
            <>
                {time}
                <span>분</span>{' '}
            </>
        );
    } else if (time % 60 === 0) {
        const hour = Math.floor(time / 60);
        return (
            <>
                {hour}
                <span>시간</span>
            </>
        );
    } else {
        const hour = Math.floor(time / 60);
        const minute = time % 60;
        return (
            <>
                {hour}
                <span>시간</span> {minute}
                <span>분</span>
            </>
        );
    }
};


const renderDeepComparationData = (deepValue: number) => {
    return {
        deepComparation: {
            criteria: {
                value: INITIAL_DEEP_CRITERIA,
            },
            renderEvaluation: () => {
                return deepValue >= INITIAL_DEEP_CRITERIA ? '좋아요' : '적어요';
            },
            renderTitle: () => {
                // 깊은 잠 비율 15% 초과 일때
                return deepValue > INITIAL_DEEP_CRITERIA
                    ? `깊은 잠의 비율이 ${deepValue - INITIAL_DEEP_CRITERIA}% 높아요.`
                    : `깊은 잠의 비율이 적당해요.`;
            },
            subTitle: '* 15% 이상이면 정상입니다.',
            unit: '%',
            user: {category: '나의 깊은 잠', value: deepValue},
        },
    };
};

const renderRemComparationData = (remValue: number) => {
    return {
        remComparation: {
            criteria: {
                rem: {
                    max: REM_CRITERIA_MAX,
                    min: REM_CRITERIA_MIN,
                },
                value: REM_CRITERIA,
            },
            renderEvaluation: () => {
                if (remValue > REM_CRITERIA_MAX) {
                    return '많아요';
                } else if (remValue < REM_CRITERIA_MIN) {
                    return '적어요';
                } else {
                    return '좋아요';
                }
            },
            renderTitle: () => {
                if (remValue > REM_CRITERIA_MAX) {
                    return `REM의 비율이 ${remValue - REM_CRITERIA_MAX}% 높아요.`;
                } else if (remValue < REM_CRITERIA_MIN) {
                    return `REM의 비율이 ${REM_CRITERIA_MIN - remValue}% 낮아요.`;
                } else {
                    return 'REM의 비율이 적당해요.';
                }
            },
            subTitle: '* 20~25%면 정상입니다.',
            unit: '%',
            user: {category: '나의 REM', value: remValue},
        },
    };
};

const renderLatencyComparationData = (latencyValue: number) => {
    return {
        latencyComparation: {
            criteria: {
                value: LATENCY_CRITERIA,
            },
            renderEvaluation: () => {
                return latencyValue > LATENCY_CRITERIA ? '많아요' : '좋아요';
            },
            renderTitle: () => {
                return latencyValue > LATENCY_CRITERIA
                    ? `잠드는데 평균보다 ${latencyValue - LATENCY_CRITERIA}분 더 걸려요.`
                    : `잠드는 데 걸린 시간이 적당해요.`;
            },
            subTitle: '* 눈을 감고 30분 안에 잠들면 정상입니다.',
            unit: '분',
            user: {
                category: '나의 잠드는 데 걸린 시간',
                value: latencyValue,
            },
        },
    };
};


const renderSleepStageData = (
    stageRatio: SleepStageType,
    stageTime: SleepStageType,
) => {
    return {
        stageValue: {
            stageRatio,
            stageTime,
        },
    };
};

const COLOR_ALPHA = 0.2;
const setAlphaValue = (currentRatio: number, currentIndex: number): number => {
    if (currentRatio === -1) {
        return 1;
    }

    if (currentIndex !== currentRatio) {
        return COLOR_ALPHA;
    } else {
        return 1;
    }
};

export {
    renderMinuteToHourTime,
    renderDeepComparationData,
    renderLatencyComparationData,
    renderRemComparationData,
    renderSleepStageData,
    INITIAL_SLEEP_STAGE_RATIO,
    INITIAL_SLEEP_STAGE_TIME, setAlphaValue


}

