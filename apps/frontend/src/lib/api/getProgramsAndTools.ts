import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_PROGRAMS_AND_TOOLS = gql(/* GraphQL */ `
  query GET_HOME_PAGE_PROGRAMS_AND_TOOLS {
    homePage {
      data {
        attributes {
          programs_and_tools {
            programs {
              data {
                attributes {
                  name
                }
              }
            }

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

export const getHomePageProgramsAndTools = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_PROGRAMS_AND_TOOLS,
    fetchPolicy: "no-cache"
  });

  return data;
};
