import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
