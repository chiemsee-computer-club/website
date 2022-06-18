import * as React from "react";
import Base from "../components/base/base";

export default function MembersPage(): JSX.Element  {
  return (
    <Base>
      <h1>Mitglieder</h1>

      <section>
        <h2>Andi Scha</h2>
        <p>
          Email: <a href="mailto:andi@chiemsee-computer-club.org">andi@chiemsee-computer-club.org</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Julian Baumann</h2>
        <p>
          Email: <a href="mailto:julian@chiemsee-computer-club.org">julian@chiemsee-computer-club.org</a>
          <br />
          Website: <a href="https://julian-baumann.com">julian-baumann.com</a>
          <br />
          GitHub: <a href="https://github.com/julian-baumann">julian-baumann</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Samuel Höra</h2>
        <p>
          Email: <a href="mailto:samu@chiemsee-computer-club.org">samu@chiemsee-computer-club.org</a>
          <br />
          Website: <a href="https://hoera.dev">hoera.dev</a>
          <br />
          GitHub: <a href="https://github.com/hoersamu">hoersamu</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Jakob Bauer</h2>
        <p>
          Email: <a href="mailto:jakob@chiemsee-computer-club.org">jakob@chiemsee-computer-club.org</a>
          <br />
          Website: <a href="https://bauer-jakob.de">bauer-jakob.de</a>
          <br />
          GitHub: <a href="https://github.com/bauerjakob">bauerjakob</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Thomas Schuster</h2>
        <p>
          Email: <a href="mailto:thomas@chiemsee-computer-club.org">thomas@chiemsee-computer-club.org</a>
          <br />
          GitHub: <a href="https://github.com/twihno">twihno</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Paul Hüfner</h2>
        <p>
          Email: <a href="mailto:paul@chiemsee-computer-club.org">paul@chiemsee-computer-club.org</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>Leon Schmidtke</h2>
        <p>
          Email: <a href="mailto:leon@chiemsee-computer-club.org">leon@chiemsee-computer-club.org</a>
        </p>
      </section>
    </Base>
  );
}