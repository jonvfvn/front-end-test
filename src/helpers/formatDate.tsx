import moment from "moment";

export const formatDate = (dateString: string): string => moment(dateString).format("MMMM Do YYYY [at] hh:mm:ss")

export const dateFrom = (dateString: string): string => moment(dateString, "YYYYMMDD").fromNow();