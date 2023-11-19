import { QueuedCustomer } from "./Customer"; 

export interface CustomerListProps {
  customers: QueuedCustomer[];
  filterField?: string;
}
