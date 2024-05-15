import m from "mithril";
import "../App.css";

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
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col tablet:flex-row">
            <img src={Product.current.thumbnail}
                 className="max-w-xs rounded-lg shadow-2xl"/>
            <div>
              <h1 className="text-5xl font-bold">{Product.current.title}</h1>
              <div className="flex flex-row">
                <div className="text-lg font-medium mr-2 min-w-24">Brand</div>
                <div className="flex-1 text-lg">
                  {Product.current.brand}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="text-lg font-medium mr-2 min-w-24">Category
                </div>
                <div className="flex-1 text-lg">
                  {Product.current.category}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="text-lg font-medium mr-2 min-w-24">Description
                </div>
                <div className="flex-1 text-lg">
                  {Product.current.description}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="text-lg font-medium mr-2 min-w-24">Price</div>
                <div className="flex-1 text-xl font-bold">
                  {Product.current.price}
                </div>
              </div>
              <button
                  className="mt-5 btn btn-primary mx-auto text-xl font-medium" onclick={()=>document.getElementById('my_modal_3').showModal()}>Buy
                Now!
              </button>

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">NICE!</h3>
                  <p className="py-4">Added to your shopping cart!!!</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
    )
        ;
  }
}

export default ProductView;