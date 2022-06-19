import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next";
import React, { ReactElement, useState } from "react";
import { content, header, languageSelection, windowBox } from "./base.module.scss";


interface Props {
  children: React.ReactNode;
}

export default function Base(props: Props): ReactElement {
  const { languages, originalPath, language, changeLanguage } = useI18next();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const setLanguage = (newLanguage: string): void => {
    setCurrentLanguage(newLanguage);
    void changeLanguage(newLanguage, originalPath);
  };

  return (
    <main className={header}>
      <title>Chiemsee-Computer-Club</title>

      <fieldset className={windowBox}>
        <legend>Chiemsee-Computer-Club</legend>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <Trans>Home</Trans>
              </Link>
            </li>

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

          <select className={languageSelection}
                    value={currentLanguage}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => setLanguage(event.target.value)}>
              {languages.map((lng) => (
                <option key={lng}>
                  {lng}
                </option>
              ))}
            </select>
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
