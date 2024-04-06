/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GET_HOME_PAGE_ABOUT {\n    homePage {\n      data {\n        attributes {\n          about_me\n        }\n      }\n    }\n  }\n": types.Get_Home_Page_AboutDocument,
    "\n  query GET_HOME_PAGE_HERO {\n    homePage {\n      data {\n        attributes {\n          hero {\n            title\n            offers\n            avatar {\n              data {\n                attributes {\n                  url\n                  width\n                  height\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.Get_Home_Page_HeroDocument,
    "\n  query GET_HOME_PAGE_QUESTIONS {\n    homePage {\n      data {\n        attributes {\n          questions {\n            data {\n              attributes {\n                name\n\n                answer\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.Get_Home_Page_QuestionsDocument,
    "\n  query GET_HOME_PAGE_HERO_REQUISITES_NUMBER {\n    homePage {\n      data {\n        attributes {\n          requisites_number\n        }\n      }\n    }\n  }\n": types.Get_Home_Page_Hero_Requisites_NumberDocument,
    "\n  query GET_HOME_PAGE_REVIEWS {\n    homePage {\n      data {\n        attributes {\n          reviews {\n            data {\n              attributes {\n                author\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.Get_Home_Page_ReviewsDocument,
    "\n  query GET_HOME_PAGE_SERVICES {\n    homePage {\n      data {\n        attributes {\n          services {\n            data {\n              attributes {\n                name\n                price\n                time\n\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.Get_Home_Page_ServicesDocument,
    "\n  query GET_PRIVACY_PAGE_TEXT {\n    privacyPage {\n      data {\n        attributes {\n          text\n        }\n      }\n    }\n  }\n": types.Get_Privacy_Page_TextDocument,
    "\n  query GET_HOME_PAGE_PROGRAMS_AND_TOOLS {\n    homePage {\n      data {\n        attributes {\n          programs_and_tools {\n            programs {\n              data {\n                attributes {\n                  name\n                }\n              }\n            }\n\n            tools {\n              data {\n                attributes {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.Get_Home_Page_Programs_And_ToolsDocument,
    "\n  mutation SEND_APPLICATION($name: String!, $telegram: String!, $service: String!) {\n    createApplication(data: { name: $name, telegram: $telegram, service: $service }) {\n      data {\n        id\n      }\n    }\n  }\n": types.Send_ApplicationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_HOME_PAGE_ABOUT {\n    homePage {\n      data {\n        attributes {\n          about_me\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_HOME_PAGE_ABOUT {\n    homePage {\n      data {\n        attributes {\n          about_me\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_HOME_PAGE_HERO {\n    homePage {\n      data {\n        attributes {\n          hero {\n            title\n            offers\n            avatar {\n              data {\n                attributes {\n                  url\n                  width\n                  height\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_HOME_PAGE_HERO {\n    homePage {\n      data {\n        attributes {\n          hero {\n            title\n            offers\n            avatar {\n              data {\n                attributes {\n                  url\n                  width\n                  height\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_HOME_PAGE_QUESTIONS {\n    homePage {\n      data {\n        attributes {\n          questions {\n            data {\n              attributes {\n                name\n\n                answer\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_HOME_PAGE_QUESTIONS {\n    homePage {\n      data {\n        attributes {\n          questions {\n            data {\n              attributes {\n                name\n\n                answer\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_HOME_PAGE_HERO_REQUISITES_NUMBER {\n    homePage {\n      data {\n        attributes {\n          requisites_number\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_HOME_PAGE_HERO_REQUISITES_NUMBER {\n    homePage {\n      data {\n        attributes {\n          requisites_number\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_HOME_PAGE_REVIEWS {\n    homePage {\n      data {\n        attributes {\n          reviews {\n            data {\n              attributes {\n                author\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_HOME_PAGE_REVIEWS {\n    homePage {\n      data {\n        attributes {\n          reviews {\n            data {\n              attributes {\n                author\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_HOME_PAGE_SERVICES {\n    homePage {\n      data {\n        attributes {\n          services {\n            data {\n              attributes {\n                name\n                price\n                time\n\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_HOME_PAGE_SERVICES {\n    homePage {\n      data {\n        attributes {\n          services {\n            data {\n              attributes {\n                name\n                price\n                time\n\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_PRIVACY_PAGE_TEXT {\n    privacyPage {\n      data {\n        attributes {\n          text\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_PRIVACY_PAGE_TEXT {\n    privacyPage {\n      data {\n        attributes {\n          text\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_HOME_PAGE_PROGRAMS_AND_TOOLS {\n    homePage {\n      data {\n        attributes {\n          programs_and_tools {\n            programs {\n              data {\n                attributes {\n                  name\n                }\n              }\n            }\n\n            tools {\n              data {\n                attributes {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_HOME_PAGE_PROGRAMS_AND_TOOLS {\n    homePage {\n      data {\n        attributes {\n          programs_and_tools {\n            programs {\n              data {\n                attributes {\n                  name\n                }\n              }\n            }\n\n            tools {\n              data {\n                attributes {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SEND_APPLICATION($name: String!, $telegram: String!, $service: String!) {\n    createApplication(data: { name: $name, telegram: $telegram, service: $service }) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SEND_APPLICATION($name: String!, $telegram: String!, $service: String!) {\n    createApplication(data: { name: $name, telegram: $telegram, service: $service }) {\n      data {\n        id\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;