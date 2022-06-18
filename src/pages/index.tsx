import * as React from "react";
import Base from "../components/base/base";

export default function IndexPage(): JSX.Element  {
  return (
    <Base>
      <h1>Über uns</h1>

      <section>
        <p>
          Wir sind eine Gruppe aus Programmierern, die nichts besseres zu tun hatten, als einen
          Verein zu gründen.
          <br />
          <br />
          Da wir uns alle im Umkreis des Chiemsees kennenlernten, kam der kreative Name "Chiemsee-Computer-Club" zustande.
        </p>
      </section>
    </Base>
  );
}