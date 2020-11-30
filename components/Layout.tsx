import { FunctionComponent } from "react";

export interface NavigationLink {
  href: string;
  title: string;
}

const Layout: FunctionComponent = ({ children }) => (
  <div className="root">
    <main>{children}</main>
    <style jsx global>{`
      body {
        text-align: center;
        font-family: "Avenir", sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
