import React, { useState } from 'react';
import Calendar from 'react-date-range-calendar';
import styled from 'styled-components';

function SelectDate() {
  const disabledDatesArr = ['2022-01-21', '2022-01-20'];
  const [isAllAbleDate, setIsAllAbleDate] = useState(true);
  function validDate(dates) {
    disabledDatesArr.some(disabledDate => !dates.includes(disabledDate))
      ? setIsAllAbleDate(true)
      : setIsAllAbleDate(false);
  }

  return (
    <Wrapper>
      <p>{isAllAbleDate || '예약 불가능한 날짜가 포함되었습니다.'}</p>
      <Calendar
        onSelect={(startDate, endDate, validDateRange) => {
          validDate(validDateRange);
        }}
        selectedRange={[null, null]}
        disablePrevDates={true}
        disabledDates={() => {
          return ['2022-01-21'];
        }}
        startDateTdCssObj={{
          backgroundColor: 'black',
          borderRadius: '1rem 0 0 0',
        }}
        endDateTdCssObj={{
          backgroundColor: 'black',
          borderRadius: '0 0 1rem 0',
        }}
        inRangedTdCssObj={{ backgroundColor: 'black' }}
      />
      <button>SEARCH</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  //
`;

export default SelectDate;
