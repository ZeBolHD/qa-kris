import type { Schema, Attribute } from "@strapi/strapi";

export interface HomePageHero extends Schema.Component {
  collectionName: "components_home_page_heroes";
  info: {
    displayName: "Hero";
    icon: "television";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    avatar: Attribute.Media & Attribute.Required;
    offers: Attribute.RichText & Attribute.Required;
  };
}

export interface HomePageProgramAndTools extends Schema.Component {
  collectionName: "components_home_page_program_and_tools";
  info: {
    displayName: "Tool Categories";
    icon: "grid";
    description: "";
  };
  attributes: {
    tools: Attribute.Relation<"home-page.program-and-tools", "oneToMany", "api::tool.tool">;
    name: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "home-page.hero": HomePageHero;
      "home-page.program-and-tools": HomePageProgramAndTools;
    }
  }
}
