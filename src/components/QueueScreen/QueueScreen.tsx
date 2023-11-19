import React, { useEffect, useState, FC } from "react";
import { fetchData } from "../../helpers/fetchData";
import { QueuedCustomer } from "../../models/Customer";
import { CustomerList } from "../CustomerList/CustomerList";
import { CustomerFilter } from "../CustomerFilter/CustomerFilter";
import { QueueScreenStyle, QueueLength } from "./QueueScreenStyles";

export const QueueScreen: FC = () => {
  const [customers, setCustomers] = useState<QueuedCustomer[]>([]);
  const [filterField, setFilterField] = useState("");

  useEffect(() => fetchData(setCustomers), []);

  useEffect(() => {
    const refreshData = setInterval(() => fetchData(setCustomers), 30000);
    return () => clearInterval(refreshData);
  }, []);

  return !customers.length 
    ? <h1>Loading...</h1> 
    : (
    <QueueScreenStyle>
      <QueueLength>There are currently {customers.length} customers in the queue</QueueLength>
      <CustomerFilter setFilterField={setFilterField} filterField={filterField} />
      {customers.length > 0 && (
        <CustomerList customers={customers} filterField={filterField} />
      )}
    </QueueScreenStyle>
  );
};
