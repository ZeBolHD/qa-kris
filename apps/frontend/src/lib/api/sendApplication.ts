"use server";

import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const SEND_APPLICATION = gql(/* GraphQL */ `
  mutation SEND_APPLICATION($name: String!, $telegram: String!, $service: String!) {
    createApplication(data: { name: $name, telegram: $telegram, service: $service }) {
      data {
        id
      }
    }
  }
`);

export const sendApplication = async (name: string, telegram: string, service: string) => {
  console.log(name, telegram, service);

  const data = await apolloClient.mutate({
    mutation: SEND_APPLICATION,
    variables: { name, telegram, service },
  });

  return data.errors;
};
