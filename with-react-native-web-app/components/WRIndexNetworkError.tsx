import React from 'react';
import {Box, Text} from "native-base";
import WarningNetworkError from "../public/images/warning_error.svg"

const WRIndexNetworkError = () => {
    return (
        <Box
            justifyContent='center'
            alignItems='center'
            bg='#1C1C1E'
            flex={1}
            borderRadius='24px'
        >
            <WarningNetworkError/>
            <Text
                mt='28px'
                textAlign='center'
                wordBreak='keep-all'
                color='white'
            >
                {"네트워크가 원활하지 않아요!\n다음에 다시 시도해 주세요"}
            </Text>
        </Box>
    );
};

export {WRIndexNetworkError};
