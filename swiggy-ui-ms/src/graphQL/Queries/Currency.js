import { gql } from '@apollo/client';

export const getCurrency = gql`
  query GetCurrency {
    rates(currency: "INR") {
      currency
      rate
    }
  }
`;

export default getCurrency;
