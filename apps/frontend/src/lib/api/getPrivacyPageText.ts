import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_PRIVACY_PAGE_TEXT = gql(/* GraphQL */ `
  query GET_PRIVACY_PAGE_TEXT {
    privacyPage {
      data {
        attributes {
          text
        }
      }
    }
  }
`);

export const getPrivacyPageText = async () => {
  const { data } = await apolloClient.query({
    query: GET_PRIVACY_PAGE_TEXT,
    fetchPolicy: "no-cache",
  });

  return data;
};
