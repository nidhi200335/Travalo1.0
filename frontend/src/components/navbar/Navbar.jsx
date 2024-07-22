import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TravaLo</span>
        </Link>
        <a href="https://github.com/nidhi200335/Travalo" target="_blank" rel="noopener noreferrer" className="githubLink">
            GitHub
          </a>
        {  user ? ( 
          
          <div className="navItems">
            
            <span>{user.username}</span>
            <button className="navButton" onClick={logout}>
              Logout
            </button>
            
          </div>
        ) : (
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">
              <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
              <span className="button">Login</span>
              </Link>
            </button>
          </div>
           )}
        {/* {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
// import React from 'react'
// import "./Navbar.css"
// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <div className="navContainer">
//             <span className='logo'>Book Hotels</span>
//             <div className="navItems">
//                 <button className='navButton'>Register</button>
//                 <button className='navButton'>Login</button>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar