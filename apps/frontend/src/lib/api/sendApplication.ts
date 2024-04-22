"use server";

import { gql } from "@/__generated__/gql";
import apolloClient from "../apollo-client";

const SEND_APPLICATION = gql(/* GraphQL */ `
  mutation SEND_APPLICATION(
    $name: String!
    $telegram: String!
    $service: String!
    $age: Int!
    $study_start: String!
    $work: String!
    $experience: String!
    $from: String!
    $comment: String!
  ) {
    createApplication(
      data: {
        name: $name
        telegram: $telegram
        service: $service
        age: $age
        study_start: $study_start
        work: $work
        experience: $experience
        from: $from
        comment: $comment
      }
    ) {
      data {
        id
      }
    }
  }
`);

type Application = {
  name: string;
  telegram: string;
  service: string;
  age: number;
  studyStart: string;
  work: string;
  experience: string;
  from: string;
  comment: string;
};

export const sendApplication = async (application: Application) => {
  const data = await apolloClient.mutate({
    mutation: SEND_APPLICATION,
    variables: { ...application, study_start: application.studyStart },
  });

  return data.errors;
};
