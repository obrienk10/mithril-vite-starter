import m from "mithril";

import "../App.css";
import "@picocss/pico/css/pico.green.min.css";

const TestPage1 = {
  view: ({ attrs }) => (
      <>
        <section>
          <hgroup>
            <h2>Get inspired with CSS</h2>
            <p>How to use CSS to add glam to your Website?</p>
          </hgroup>
        </section>
        <section>

          <article data-theme="dark">
            Hello
          </article>
        </section>
      </>

  ),
};

export default TestPage1;