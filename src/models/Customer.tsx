export interface Customer {
  id: number;
  emailAddress: string;
  name: string;
  firstName?: string;
}

export interface QueuedCustomer {
  id: number;
  currentPosition: number;
  expectedTime: string;
  originalExpectedTime: string;
  customer: Customer;
}

export interface CustomerProps {
  name: string;
  expectedTime: string;
  originalExpectedTime: string;
  imageSource: string;
}

export interface CustomerListProps {
  name: string;
  expectedTime: string;
  originalExpectedTime: string;
  imageSource: string;
}
