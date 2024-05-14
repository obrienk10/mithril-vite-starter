import m from "mithril";
import "../App.css";
import "@picocss/pico/css/pico.green.min.css";

import Product from "../models/Product";
import mainLogo from "../img/logo64.png";

const ProductView = {
  oninit: function (vnode) {
    Product.current = {};
    console.log("ProductView")
    console.log(vnode)
    Product.load(vnode.attrs.id)
  },
  view: function () {
    return (
        <article>
          <h2 className={"product-title"}>{Product.current.title}</h2>
          <img src={Product.current.thumbnail} className={"product-thumbnail"}/>
          <table class="striped">
            <tbody>
            <tr>
              <td scope="column">Brand</td>
              <td>
                <xsmall>{Product.current.brand}</xsmall>
              </td>
            </tr>
            <tr>
              <td scope="column">Category</td>
              <td>
                <xsmall>{Product.current.category}</xsmall>
              </td>
            </tr>
            <tr>
              <td scope="column">Description</td>
              <td>
                <xsmall>{Product.current.description}</xsmall>
              </td>
            </tr>
            <tr>
              <td scope="column">Price</td>
              <td>
                <xsmall>{Product.current.price}</xsmall>
              </td>
            </tr>
            </tbody>
          </table>
        </article>

    );
  }
}

export default ProductView;