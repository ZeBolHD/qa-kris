import { gql } from "@/__generated__/gql";
import apolloClient from "./apollo-client";

const GET_HOME_PAGE = gql(/* GraphQL */ `
  query GET_HOME_PAGE {
    homePage {
      data {
        attributes {
          hero {
            title
            offers
          }
        }
      }
    }
  }
`);

export const getTestData = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE
  });

  console.log(data.homePage?.data?.attributes?.hero?.offers);

  return data;
};
