import { graphql, StaticQueryDocument } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";
import Base from "../components/base/base";

export default function IndexPage(): JSX.Element  {
  return (
    <Base>
      <h1>
        <Trans>About us</Trans>
      </h1>

      <section>
        <p>
          <Trans>
            We are a group of programmers who had nothing better to do than to start a club.
          </Trans>
          <br />
          <br />
          <Trans>
            Since we all got to know each other around the lake Chiemsee, we came up with the creative name "Chiemsee-Computer-Club".
          </Trans>
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