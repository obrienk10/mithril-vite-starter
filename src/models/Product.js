import m from "mithril";

import "../App.css";
import "@picocss/pico/css/pico.green.min.css";

const Product = {
  list: [],
  loadList: function () {
    return m.request({
      method: "GET",
      url: "https://dummyjson.com/products",
      withCredentials: false,
    })
    .then(function (result) {
      Product.list = result.products
      console.log("Loaded products: ", result.products.length)
    })
  },
  current: {},
  load: function (id) {
    try {
      return m.request({
        method: "GET",
        url: "https://dummyjson.com/products/" + id,
        withCredentials: false,
      }).then(function (result) {
        console.log("product: ", result)
        Product.current = result
      })
    } catch (error) {
      console.error(error);
    }
  }

}

export default Product;