import m from "mithril";

const NavButton = {
  view: ({ attrs, children }) => (
    <a href={`#!/${attrs.path}`}>
      {children}
    </a>
  ),
};

export default NavButton;