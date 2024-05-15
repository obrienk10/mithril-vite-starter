import m from "mithril";
import "../App.css";

const TestPage1 = {
  view: ({attrs}) => (
      <div className="hero min-h-96 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">A Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary" onclick={() => m.route.set('/products')}>Get Started</button>
          </div>
        </div>
      </div>

  ),
};

export default TestPage1;
