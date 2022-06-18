import React, { ReactElement } from "react";
import { content, header, windowBox } from "./base.module.scss";
import { Link, Trans } from "gatsby-plugin-react-i18next";


interface Props {
  children: React.ReactNode;
}

export default function Base(props: Props): ReactElement {
  return (
    <main className={header}>
      <title>Chiemsee-Computer-Club</title>

      <fieldset className={windowBox}>
        <legend>Chiemsee-Computer-Club</legend>

        <nav>
          <ul>
            <li>
              <Link to="/" language="en">
                <Trans>EN</Trans>
              </Link>
            </li>

            <li>
              <Link to="/" language="de">
                <Trans>DE</Trans>
              </Link>
            </li>

            {/* <li>
              <Link to="/">
                <Trans>Home</Trans>
              </Link>
            </li> */}

            <li>
              <Link to="/contact">
                <Trans>Contact</Trans>
              </Link>
            </li>

            <li>
              <Link to="/members">
                <Trans>Members</Trans>
              </Link>
            </li>

            <li>
              <a href="https://github.com/chiemsee-computer-club/">GitHub</a>
            </li>
          </ul>
        </nav>

        <main className={content}>
          {props.children}
        </main>

        <footer>
          Copyright © 2022
        </footer>
      </fieldset>
    </main>
  );
}