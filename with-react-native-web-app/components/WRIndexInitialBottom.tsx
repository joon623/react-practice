import React from 'react';
import {Box, Text} from "native-base";

const WRIndexInitialBottom = () => {
    return (
        <Box
            position='fixed'
            right={0}
            left={0}
            bottom={0}
            px='40px'
            pt='109px'
            pb='55px'
            textAlign='center'
            background={'linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(29, 33, 39, 0.76) 27.6%, rgba(34, 40, 48, 0.95) 44.79%, #454F60 100%)'}
            bg={{
                linearGradient: {
                    colors: ["rgba(13, 13, 13, 0)", "rgba(29, 33, 39, 0.76)", "rgba(34, 40, 48, 0.95)", "#454F60"],
                    locations: [0, 0.27, 0.44, 1]
                }
            }}
        >
            <Text
                lineHeight='24px'
                color='white'
                bg={'linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, rgba(29, 33, 39, 0.76) 27.6%, rgba(34, 40, 48, 0.95) 44.79%, #454F60 100%)'}
                whiteSpace='pre-line'
                fontWeight={600}
            >
                {'아직 수면 리포트가 없습니다.\n잠을 측정해서 결과를 확인해 보세요.'}
            </Text>
        </Box>
    );
};

export {WRIndexInitialBottom};
