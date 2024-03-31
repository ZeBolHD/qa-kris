import { gql } from "@/__generated__/gql";
import apolloClient from "./apollo-client";

const GET_HOME_PAGE_HERO = gql(/* GraphQL */ `
  query GET_HOME_PAGE {
    homePage {
      data {
        attributes {
          hero {
            title
            offers
            avatar {
              data {
                attributes {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const getHomePageHero = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_HERO,
    fetchPolicy: "no-cache"
  });

  return data;
};
