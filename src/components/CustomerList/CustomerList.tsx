import React, { FC } from "react";
import { QueuedCustomer } from "../../models/Customer";
import { filterCustomers } from "../../helpers/filterCustomers";
import { Customer } from "../Customer/Customer";
import { CustomerListStyle } from "./CustomerListStyles";
import { CustomerListProps } from "../../models/CustomerList";

export const CustomerList: FC<CustomerListProps> = ({ customers, filterField }) => {
  
  const customersToDisplay = filterField ? filterCustomers(customers, filterField) : customers;
  
  const noResults = (customersToDisplay.length === 0) && <span><i>{filterField}</i> doesn't exist in the queue</span>;

  return (
    <CustomerListStyle>
      {noResults}
      {customersToDisplay.map(({ customer, expectedTime, originalExpectedTime }: QueuedCustomer) => (
        <Customer
          key={customer.id}
          name={customer.name}
          imageSource={customer.emailAddress}
          expectedTime={expectedTime}
          originalExpectedTime={originalExpectedTime}
        />
      ))}
    </CustomerListStyle>
  );
};
