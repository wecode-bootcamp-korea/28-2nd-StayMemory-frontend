import React from 'react';
import Calendar from 'react-date-range-calendar';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedDatesState, validDatesState } from '../GlobalState';

function SelectDate() {
  const [selectedDates, setSelectedDates] = useRecoilState(selectedDatesState);
  const [validDates, setValidDates] = useRecoilState(validDatesState);
  const disabledDatesArr = ['2022-01-21', '2022-01-20'];

  function validDate(dates) {
    disabledDatesArr.some(disabledDate => !dates.includes(disabledDate))
      ? setValidDates(true)
      : setValidDates(false);
  }

  const selectedDatesIsNotValid =
    selectedDates.check_out !== null && validDates === false;

  return (
    <Wrapper>
      <Notice>
        {selectedDatesIsNotValid ? '예약 불가능한 날짜가 포함되었습니다.' : ''}
      </Notice>
      <Calendar
        onSelect={(startDate, endDate, validDateRange) => {
          validDate(validDateRange);
          setSelectedDates({
            ...selectedDates,
            check_in: startDate,
            check_out: endDate,
          });
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
`;

const Notice = styled.p`
  height: 1rem;
  color: red;
`;

export default SelectDate;
