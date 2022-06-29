import React from 'react';
import {Box, Spinner, Text} from "native-base";

const WRIndexLoadingIndicator = () => {
    return (
        <Box
            bg='#1C1C1E'
            borderRadius='24px'
            justifyContent='center'
            flex={1}
        >
            <Spinner color='#7693C2'/>
            <Text
                textAlign='center'
                mt='30px'
                whiteSpace='pre-line'
                color='white'
            >
                {'AI가 수면 데이터를 분석해서\n리포트를 만들고 있어요.'}
            </Text>
        </Box>
    );
};

export {WRIndexLoadingIndicator};
