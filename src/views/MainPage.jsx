import m from "mithril";

const MainPage = {
  view: (vnode) => <div className="flex-1" >
    {vnode.children}
  </div>,
};

export default MainPage;