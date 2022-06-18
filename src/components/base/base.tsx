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
        <legend>CHCC</legend>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>

            <li>
              <Link to="/">Mitglieder</Link>
            </li>

            <li>
              <Link to="https://github.com/chiemsee-computer-club/">GitHub</Link>
            </li>
          </ul>
        </nav>

        <div className={content}>
          {props.children}
        </div>
      </fieldset>
    </main>
  );
}