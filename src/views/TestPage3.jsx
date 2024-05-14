import m from "mithril";

import "../App.css";
import "@picocss/pico/css/pico.green.min.css";

const TestPage2 = {
  view: ({ attrs }) => (
      <section>
        <details className={"accordion"}>
          <summary role="button">Owls</summary>
          <p className={"owl"}>African Grass Owl</p>
          <p className={"owl"}>Blakiston's Fish Owl</p>
          <p className={"owl"}>Brown</p>
          <p className={"owl"}>Golden Masked Owl</p>
          <p className={"owl"}>Pernambuco Pygmy-owl</p>
          <p className={"owl"}>Tawny</p>
          <p className={"owl"}>Whiskered Screech Owl </p>
        </details>
      </section>
  ),
};

export default TestPage2;