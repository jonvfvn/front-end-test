import React from "react";
import { QueuedCustomer } from "../models/Customer";
import { fetchQueueData } from "../mockApi";

export const fetchData = (saveToState: (customers: React.SetStateAction<QueuedCustomer[]>) => void) => {
  
  fetchQueueData()
    .then( res => res.json())
    .then((json: any) => {
      saveToState(json.queueData.queue.customersToday);
    })
    .catch( err => console.error(err));
};
