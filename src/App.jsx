import m from "mithril";
import "./App.css";
import HeaderView from "./views/HeaderView";
import MainPage from "./views/MainPage";
import FooterView from "./views/FooterView";

export const App = () => {
  // Local state ...
  return {
    view: ({ children }) => (
        <div class=" flex flex-col h-screen px-0 tablet:px-6 laptop:px-12">
          <HeaderView/>
          <MainPage> {children}</MainPage>
          <FooterView/>
        </div>
    )
  };
};

