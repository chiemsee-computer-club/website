import { StaticQueryDocument, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";
import Base from "../components/base/base";

export default function ContactPage(): JSX.Element  {
  return (
    <Base>
      <h1>
        <Trans>Contact</Trans>
      </h1>

      <section>
        <p>
            <Trans>Email</Trans>: <a href="mailto:contact@chiemsee-computer-club.org">contact@chiemsee-computer-club.org</a>
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