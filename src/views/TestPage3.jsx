import m from "mithril";

import "../App.css";

const TestPage2 = {
  view: ({ attrs }) => (
      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox"/>
          <div className="collapse-title text-xl font-medium">
            Owls
          </div>
          <div className="collapse-content">
            <p className={"owl"}>African Grass Owl</p>
            <p className={"owl"}>Blakiston's Fish Owl</p>
            <p className={"owl"}>Brown</p>
            <p className={"owl"}>Golden Masked Owl</p>
            <p className={"owl"}>Pernambuco Pygmy-owl</p>
            <p className={"owl"}>Tawny</p>
            <p className={"owl"}>Whiskered Screech Owl </p>
          </div>
          </div>
        </div>
        ),
        };

        export default TestPage2;