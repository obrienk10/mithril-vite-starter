import m from "mithril";
import mainLogo from "../img/logo64.png";
import NavButton from "./NavButton";

const  HeaderView = {
  view: () => (
      <header className="container">
        <nav>
          <ul>
            <li><img src={mainLogo}/></li>
          </ul>
          <ul className="nav-bar">
            <li><NavButton path={`home`}>Home</NavButton></li>
            <li><NavButton path={`products`}>Products</NavButton></li>
            <li><NavButton path={`page3`}>Owls</NavButton></li>
          </ul>
        </nav>
      </header>
  )
}

export default HeaderView;