import m from "mithril";

const NavButton = {
  view: ({ attrs, children }) => (
    <div  role="button" className="text-xl btn btn-ghost" onclick={() =>  m.route.set(attrs.path)}>
      {children}
    </div>
  ),
};

export default NavButton;