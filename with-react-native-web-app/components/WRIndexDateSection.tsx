import React, {useRef} from 'react';
import {Center, Text, useTheme} from "native-base";
import CalendarWebviewReportIcon from '../public/images/calendar_webview_report.svg';
import {useToggle} from "react-use";

type WRIndexDateSectionProps = {
    originDate: Date;
};

const WRIndexDateSection = () => {
    const [calendarOn, setCalendarOn] = useToggle(false);
    const {colors, sizes} = useTheme();
    const calendarRef = useRef(null);

    return (
        <Center flexDirection="row" p="5">
            <CalendarWebviewReportIcon color={colors.white}/>
            <Text color='white' fontWeigh={400} fontSize={sizes[4]} ml={"10px"}>2022. 05. 11</Text>
        </Center>
    );
};

export default WRIndexDateSection;
