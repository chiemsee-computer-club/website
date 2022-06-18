import * as React from "react";
import Base from "../components/base/base";

export default function NotFountPage(): JSX.Element  {
  return (
    <Base>
      <h1>404 - Page not found!</h1>

      <section>
        <p>
          Great, you broke it.
        </p>
      </section>
    </Base>
  );
}