import React, { FC } from "react";
import { CustomerCard, ProfilePicture, Name, ExpectedTime, Content, DateFrom } from "./CustomerStyles";
import { CustomerProps } from "../../models/Customer"
import { formatDate, dateFrom } from "../../helpers/formatDate";
import { getImageSource } from "../../helpers/getImageSource";

export const Customer: FC<CustomerProps> = ({ name, expectedTime, originalExpectedTime, imageSource }) => (
  <CustomerCard>
    <ProfilePicture src={getImageSource(imageSource)} alt={name} aria-label={name}/>
    <Content>
      <Name>{name}</Name>
      <ExpectedTime>
        Expected {formatDate(expectedTime)}
      </ExpectedTime>
      <ExpectedTime>
        Originally expected {formatDate(originalExpectedTime)} <DateFrom>({dateFrom(originalExpectedTime)})</DateFrom>
      </ExpectedTime>
    </Content>
  </CustomerCard>
);
