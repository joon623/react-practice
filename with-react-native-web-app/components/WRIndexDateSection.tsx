import React, {FC, useRef} from 'react';
import {Center, Text, useTheme} from "native-base";
import CalendarWebviewReportIcon from '../public/images/calendar_webview_report.svg';
import {useToggle} from "react-use";
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from "dayjs";
import {DATE_FORMAT_INDEX_TOP_DATE} from "./index.helper";
import TextField from '@mui/material/TextField';


type WRIndexDateSectionProps = {
    originDate: Date;
};


const WRIndexDateSection: FC<WRIndexDateSectionProps> = ({originDate}) => {
    const [calendarOn, setCalendarOn] = useToggle(false);
    const {colors, sizes} = useTheme();
    const calendarRef = useRef(null);


    console.log(DateTimePicker)
    const [value, setValue] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };


    return (
        <Center flexDirection="row" p="5">
            <CalendarWebviewReportIcon color={colors.white}/>
            <Text color='white' fontWeigh={400} fontSize={sizes[4]} ml={"10px"}
                  onClick={setCalendarOn}
            >{dayjs(originDate).utc(true).format(DATE_FORMAT_INDEX_TOP_DATE)}</Text>
            {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
            <DateTimePicker
                label="Date&Time picker"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
            {/*</LocalizationProvider>*/}
            {/*<Text>asldkjad</Text>*/}
            {/*{calendarOn && <RNDateTimePicker/>}*/}
        </Center>
    );
};

export default WRIndexDateSection;
