import React, {FC} from 'react';
import {Flex, Text} from "native-base";

type WRIndexTodayAdviceProps = {
    advice: string;
};


const WRIndexTodayAdvice: FC<WRIndexTodayAdviceProps> = ({advice}) => {
    return (
        <Flex wordBreak='keep-all' mt='20px'
              background='#1C1C1E'
              borderRadius='24px'
              p='24px'
              direction="row"
        >
            <Text mr='10px'>
                💡
            </Text>
            <Text mr='10px'
                  color='white'
                  fontWeight={400}
                  lineHeight={'22px'}
            >
                {advice}
            </Text>
        </Flex>
    );
};

export {WRIndexTodayAdvice};
