import * as React from "react";
import Base from "../components/base/base";

export default function ContactPage(): JSX.Element  {
  return (
    <Base>
      <h1>Kontakt</h1>

      <section>
        <p>
            Email: <a href="mailto:contact@chiemsee-computer-club.org">contact@chiemsee-computer-club.org</a>
        </p>
      </section>
    </Base>
  );
}