import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageHero extends Schema.Component {
  collectionName: 'components_home_page_heroes';
  info: {
    displayName: 'Hero';
    icon: 'television';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    avatar: Attribute.Media;
    offers: Attribute.RichText;
  };
}

export interface HomePageProgramAndTools extends Schema.Component {
  collectionName: 'components_home_page_program_and_tools';
  info: {
    displayName: 'Programs and Tools';
    icon: 'grid';
    description: '';
  };
  attributes: {
    programs: Attribute.Relation<
      'home-page.program-and-tools',
      'oneToMany',
      'api::program.program'
    >;
    tools: Attribute.Relation<
      'home-page.program-and-tools',
      'oneToMany',
      'api::tool.tool'
    >;
  };
}

export interface HomePageRequisites extends Schema.Component {
  collectionName: 'components_home_page_requisites';
  info: {
    displayName: 'Requisites';
    icon: 'phone';
  };
  attributes: {
    name: Attribute.String;
    number: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-page.hero': HomePageHero;
      'home-page.program-and-tools': HomePageProgramAndTools;
      'home-page.requisites': HomePageRequisites;
    }
  }
}
