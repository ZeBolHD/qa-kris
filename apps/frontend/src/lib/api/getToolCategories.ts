import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_TOOL_CATEGORIES = gql(/* GraphQL */ `
  query GET_HOME_PAGE_TOOL_CATEGORIES {
    homePage {
      data {
        attributes {
          tool_categories {
            name
            tools {
              data {
                attributes {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const getHomePageToolCategories = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_TOOL_CATEGORIES,
    fetchPolicy: "no-cache",
  });

  return data;
};
