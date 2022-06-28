import React, {FC} from 'react';
import {Center, HStack, Text} from "native-base";
import {StyledWRIndexTag} from "./WRIndex.styled";

type WRIndexMainCardType = {
    tag: {
        first: string;
        second?: string;
    };
    title: string;
    timeArrange: string;
    oneLineComment: string;
};

type WRIndexMainCardProps = {
    data: WRIndexMainCardType;
};

const WRIndexMainCard: FC<WRIndexMainCardProps> = ({data}) => {
    return (
        <Center bg='#1C1C1E' borderRadius={24} py='40px' px="24px">
            <HStack space={2}>
                <StyledWRIndexTag tag={data.tag.first}/>
                {data.tag.second && (
                    <StyledWRIndexTag tag={data.tag.second}/>
                )}
            </HStack>
            <Center>
                <Text
                    color='white'
                    fontSize="28px"
                    fontWeight={700}
                    lineHeight='33px'
                    marginTop="26px"
                    textAlign="center"
                >
                    {data.title}
                </Text>
            </Center>
            <Center>
                <Text
                    color='#8D8D92'
                    fontSize="13px"
                    fontWeight={400}
                    lineHeight='18px'
                >
                    {data.timeArrange}
                </Text>
            </Center>
            <Center>
                <Text
                    color='#8D8D92'
                    fontSize="17px"
                    fontWeight={400}
                    lineHeight='22px'
                    mt='80px'
                    textAlign='center'
                >
                    {data.oneLineComment}
                </Text>
            </Center>
        </Center>
    );
};

export {WRIndexMainCard};
