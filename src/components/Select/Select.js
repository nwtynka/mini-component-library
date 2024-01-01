import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const SelectHidden = styled.select`
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
  `

  const SelectVisible = styled.div`
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    border: none;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 1rem;
    display: flex;
    position: relative;
    width: fit-content;

    &:has(> ${SelectHidden}:focus) {
      outline: 5px auto -webkit-focus-ring-color;
    }

    &:has(> ${SelectHidden}:hover) {
      color: black;
    }
  `

  const Value = styled.span`
    margin-right: 24px;
  `

  return (
    <>
      <SelectVisible>
        <Value>{displayedValue}</Value>
        <Icon id="chevron-down" size="16" strokeWidth={2}></Icon>
        <SelectHidden value={value} onChange={onChange}>
          {children}
        </SelectHidden>
      </SelectVisible>
    </>
  )
};

export default Select;
