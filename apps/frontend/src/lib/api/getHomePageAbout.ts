import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_HERO_ABOUT = gql(/* GraphQL */ `
  query GET_HOME_PAGE_ABOUT {
    homePage {
      data {
        attributes {
          about_me
        }
      }
    }
  }
`);

export const getHomePageAbout = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_HERO_ABOUT,
    fetchPolicy: "no-cache"
  });

  return data;
};
