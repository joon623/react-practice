import {Center, Text} from 'native-base';
import {FC} from "react";

type StyledWRIndexTagProps = {
    tag: string;
}

const StyledWRIndexTag: FC<StyledWRIndexTagProps> = ({tag}) => {
    return (
        <Center px="1.5" py="3" backgroundColor='#30373F' borderRadius="16px">
            <Text fontWeight={600} fontSize='13px' color='#8097BE' lineHeight="18px">
                {tag}
            </Text>
        </Center>
    )
}

export {StyledWRIndexTag};
