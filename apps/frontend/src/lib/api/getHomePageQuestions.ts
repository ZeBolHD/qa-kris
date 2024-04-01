import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const GET_HOME_PAGE_QUESTIONS = gql(/* GraphQL */ `
  query GET_HOME_PAGE_QUESTIONS {
    homePage {
      data {
        attributes {
          questions {
            data {
              attributes {
                name

                answer
              }
            }
          }
        }
      }
    }
  }
`);

export const getHomePageQuestions = async () => {
  const { data } = await apolloClient.query({
    query: GET_HOME_PAGE_QUESTIONS,
    fetchPolicy: "no-cache",
  });

  return data;
};
