import m from "mithril";
import { App } from "./App";
import TestPage1 from "./views/TestPage1";
import TestPage3 from "./views/TestPage3";
import ProductList from "./views/ProductList";
import ProductView from "./views/ProductView";

const mountNode = document.querySelector("#app");

const Page1 = () => (
    <App>
      <TestPage1/>
    </App>
);
const Products = () => (
    <App>
      <ProductList />
    </App>
);
const Product = {
  view: function (vnode) {
    return (<App>
      <ProductView id={vnode.attrs.id}/>
    </App>)
  }
};
const Page3 = () => (
    <App>
      <TestPage3 />
    </App>
);


m.route(mountNode, "/home", {
  "/home": {
    view: Page1,
  },
  "/products": {
    view: Products,
  },
  "/product/:id": Product,
  "/page3": {
    view: Page3,
  },
});
