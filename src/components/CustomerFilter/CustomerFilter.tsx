import React, { FC } from "react";
import { SearchWrapper, StyledInput } from "./CustomerFilterStyles";
import SearchIcon from '@mui/icons-material/Search';

import { FilterProps } from "../../models/Filter"

export const CustomerFilter: FC<FilterProps> = ({ filterField, setFilterField }) => {

  const onFilterChange = (event: { target: { value: string; }; }) => setFilterField(event.target.value);

  return (
    <SearchWrapper>
      <SearchIcon/>
      <StyledInput
        type="text"
        placeholder="Filter queue members"
        value={filterField}
        onChange={onFilterChange}
        id="filterCustomer"
      />
    </SearchWrapper>
  );
};
