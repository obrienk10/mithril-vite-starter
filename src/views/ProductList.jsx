import m from "mithril";

import "../App.css";
import Product from "../models/Product";

const ProductList = {
  oninit: Product.loadList,
  view: function () {
    return (
        <div>
          <div className="text-xl font-medium">Product List</div>
          <ul className="user-list">
            {
              Product.list.map((product, i) =>
                  <div role="button" className="flex bg-base-300 rounded-lg my-3 btn-ghost" key={i} onclick={() => m.route.set('/product/' + product.id)}>
                    <div  className="flex-1 px-6">
                      <div className="text-slate-100">
                        {product.title}
                      </div>
                      <div className="text-sm text-slate-400 italic">
                        {product.description}
                      </div>
                    </div>
                    <div className="my-auto px-12 text-xl text-gray-400 font-medium">€{product.price}</div>
                  </div>
              )
            }
          </ul>
        </div>
    );
  }
}

export default ProductList;
