import m from "mithril";

const NavButton = {
  view: ({ attrs, children }) => (
    <div  role="button" className="text-md px-1 mx-0 tablet:text-lg btn btn-ghost" onclick={() =>  m.route.set(attrs.path)}>
      {children}
    </div>
  ),
};

export default NavButton;