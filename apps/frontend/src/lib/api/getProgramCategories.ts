import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_PROGRAM_CATEGORIES = gql(/* GraphQL */ `
  query GET_HOME_PAGE_TOOL_CATEGORIES {
    homePage {
      data {
        attributes {
          program_categories {
            name
            programs {
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

export const getHomePageProgramCategories = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_PROGRAM_CATEGORIES,
    fetchPolicy: "no-cache",
  });

  return data;
};
