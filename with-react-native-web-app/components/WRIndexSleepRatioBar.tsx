import React, {Dispatch, forwardRef, SetStateAction} from 'react';
import {Box} from "native-base";
import {setAlphaValue} from "./index.helper";

type WRIndexSleepRatioBarProps = {
    ratio: number;
    background: string;
    index: number;
    $styles?: {
        borderLeftRadius?: string;
        borderRightRadius?: string;
    };
    currentRatio: number;
    alphaHandler: Dispatch<SetStateAction<number>>;
};

const WRIndexSleepRatioBar = forwardRef<HTMLDivElement,
    WRIndexSleepRatioBarProps>(({ratio, background, $styles, index, currentRatio, alphaHandler}, ref) => {

    console.log(ratio)
    console.log($styles)

    return (
        <Box
            ref={ref}
            background={background}
            width={`${ratio}%`}
            h={9}
            opacity={setAlphaValue(currentRatio, index)}
            onClick={() => {
                alphaHandler(index);
            }}
            {...$styles}
        />
    );
});


export {WRIndexSleepRatioBar};
