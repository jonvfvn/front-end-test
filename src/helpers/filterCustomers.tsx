import { QueuedCustomer } from "../models/Customer";

export const filterCustomers = (customers: QueuedCustomer[], name: string): QueuedCustomer[] => {
  
  const filterQuery = name.toLocaleLowerCase();
  
  return customers.filter(customer => customer.customer.name.toLocaleLowerCase().includes(filterQuery));

};
