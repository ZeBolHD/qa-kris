import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_REVIEWS = gql(/* GraphQL */ `
  query GET_HOME_PAGE_REVIEWS {
    homePage {
      data {
        attributes {
          reviews {
            data {
              attributes {
                author
                text
              }
            }
          }
        }
      }
    }
  }
`);

export const getHomePageReviews = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_REVIEWS,
    fetchPolicy: "no-cache",
  });

  return data;
};
