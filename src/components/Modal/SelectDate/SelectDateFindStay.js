// import DatePicker from "./date-picker";
import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { useRecoilState } from 'recoil';
import { selectedDatesState } from '../GlobalState';

function DatePicker() {
  const [selectedDates, setSelectedDates] = useRecoilState(selectedDatesState);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setSelectedDates({
      checkin: startDate,
      checkout: endDate,
    });
  };

  return (
    <div className="App">
      <DateRangePicker
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      />
    </div>
  );
}

export default DatePicker;
