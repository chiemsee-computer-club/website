import { graphql, StaticQueryDocument } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";
import Base from "../components/base/base";

export default function NotFountPage(): JSX.Element  {
  return (
    <Base>
      <h1>
        <Trans>404 - Page not found!</Trans>
      </h1>

      <section>
        <p>
        <Trans>Great, you broke it.</Trans>
        </p>
      </section>
    </Base>
  );
}

export const query: StaticQueryDocument = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;