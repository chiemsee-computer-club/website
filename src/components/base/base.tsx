import React, { ReactElement } from "react";
import { Link } from "gatsby";
import { content, header, windowBox } from "./base.module.scss";

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
              <Link to="/">Start</Link>
            </li>

            <li>
              <Link to="/contact">Kontakt</Link>
            </li>

            <li>
              <Link to="/members">Mitglieder</Link>
            </li>

            <li>
              <Link to="https://github.com/chiemsee-computer-club/">GitHub</Link>
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