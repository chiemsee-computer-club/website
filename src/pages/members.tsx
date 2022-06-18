import { StaticQueryDocument, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import * as React from "react";
import Base from "../components/base/base";

export default function MembersPage(): JSX.Element  {
  return (
    <Base>
      <h1><Trans>Members</Trans></h1>

      <section>
        <h2>Andi Scha</h2>
        <p>
          <Trans>Email</Trans>: <a href="mailto:andi@chiemsee-computer-club.org">andi@chiemsee-computer-club.org</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Julian Baumann</h2>
        <p>
          <Trans>Email</Trans>: <a href="mailto:julian@chiemsee-computer-club.org">julian@chiemsee-computer-club.org</a>
          <br />
          <Trans>Website</Trans>: <a href="https://julian-baumann.com">julian-baumann.com</a>
          <br />
          <Trans>GitHub</Trans>: <a href="https://github.com/julian-baumann">julian-baumann</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Samuel Höra</h2>
        <p>
          <Trans>Email</Trans>: <a href="mailto:samu@chiemsee-computer-club.org">samu@chiemsee-computer-club.org</a>
          <br />
          <Trans>Website</Trans>: <a href="https://hoera.dev">hoera.dev</a>
          <br />
          <Trans>GitHub</Trans>: <a href="https://github.com/hoersamu">hoersamu</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Jakob Bauer</h2>
        <p>
          <Trans>Email</Trans>: <a href="mailto:jakob@chiemsee-computer-club.org">jakob@chiemsee-computer-club.org</a>
          <br />
          <Trans>Website</Trans>: <a href="https://bauer-jakob.de">bauer-jakob.de</a>
          <br />
          <Trans>GitHub</Trans>: <a href="https://github.com/bauerjakob">bauerjakob</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Thomas Schuster</h2>
        <p>
          <Trans>Email</Trans>: <a href="mailto:thomas@chiemsee-computer-club.org">thomas@chiemsee-computer-club.org</a>
          <br />
          <Trans>GitHub</Trans>: <a href="https://github.com/twihno">twihno</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Paul Hüfner</h2>
        <p>
          <Trans>Email</Trans>: <a href="mailto:paul@chiemsee-computer-club.org">paul@chiemsee-computer-club.org</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Leon Schmidtke</h2>
        <p>
          <Trans>Email</Trans>: <a href="mailto:leon@chiemsee-computer-club.org">leon@chiemsee-computer-club.org</a>
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