import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { navItems } from "../constants";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate added
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login"); // ✅ redirect to login
  };

  return (
    <nav
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"
      style={{ height: "10vh", position: "fixed", width: "100vw", fontFamily: "Gill Sans", fontWeight: "bold" }}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src="https://images.unsplash.com/photo-1695740639466-7baecca4224d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ borderRadius: "50%", marginLeft: "-60px" }}
            />
            <Link to="/">
              <span className="text-xl tracking-tight" style={{ marginTop: "10px" }}>
                KALARITI
              </span>
            </Link>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12" style={{ marginTop: "10px" }}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-6 items-center" style={{ marginLeft: "160px", marginTop: "10px" }}>
            <Link to="#" className="py-2 px-3" style={{ fontSize: "25px" }}>
              <IoMdSearch />
            </Link>

            <Link to="#" className="py-2 px-3 border rounded-md">
              Chat with Us
            </Link>

            {!currentUser ? (
              <>
                <Link to="/login" className="py-2 px-3 border rounded-md">
                  Sign In
                </Link>
                <Link to="/register" className="bg-gradient-to-r from-red-500 to-red-900 py-2 px-3 rounded-md">
                  Create an account
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/bid"
                  className="bg-gradient-to-r from-red-500 to-red-900 py-2 px-3 rounded-md"
                >
                  BID ON ANTIQUES
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-700 text-white py-2 px-3 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 mt-4">
              {!currentUser ? (
                <>
                  <button onClick={() => navigate("/login")} className="py-2 px-3 border rounded-md">
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => navigate("/bid")} className="py-2 px-3 border rounded-md text-white">
                    BID ON ANTIQUES
                  </button>
                  <button onClick={handleLogout} className="py-2 px-3 bg-red-700 text-white rounded-md">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
