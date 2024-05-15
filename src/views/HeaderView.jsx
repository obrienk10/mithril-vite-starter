import m from "mithril";
import mainLogo from "../img/logo64.png";
import NavButton from "./NavButton";

const  HeaderView = {
  view: () => (
      <header className="min-h-24">
        <nav className="navbar bg-base-100">
          <div className="flex-1">
            <div className="px-0 btn" onclick={() => m.route.set('/home')}><img src={mainLogo}/></div>
          </div>
          <div className="flex-none gap-2">
            <NavButton path={`home`}>Home</NavButton>
            <NavButton path={`products`}>Products</NavButton>
            <NavButton path={`page3`}>Owls</NavButton>
          </div>
        </nav>
      </header>
  )
}

export default HeaderView;