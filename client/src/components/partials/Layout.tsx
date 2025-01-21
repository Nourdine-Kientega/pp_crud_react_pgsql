import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
        <Header />
        <main className="mt-5 pt-2 mb-5 pb-5">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout;