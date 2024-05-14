import m from "mithril";

import "../App.css";
import "@picocss/pico/css/pico.green.min.css";
import Product from "../models/Product";

const ProductList = {
  oninit: Product.loadList,
  view: function () {
    return (
        <div>
          <h2>Product List</h2>
          <ul className="user-list">
            {
              Product.list.map((product, i) =>
                  <li className="user-list-item" key={i} title={product.description}><a href={'#!/product/' + product.id}>{product.title}</a></li>
              )
            }
          </ul>
        </div>
    );
  }
}

export default ProductList;