import Footer from "./Footer";
import NavBar from "./Navbar";

function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
