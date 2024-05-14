import m from "mithril";
import "./App.css";
import "@picocss/pico/css/pico.green.min.css";
import HeaderView from "./views/HeaderView";
import MainPage from "./views/MainPage";
import FooterView from "./views/FooterView";

export const App = () => {
  // Local state ...
  return {
    view: ({ children }) => (
        <>
          <HeaderView/>
          <MainPage> {children}</MainPage>
          <FooterView/>
        </>
    )
  };
};

