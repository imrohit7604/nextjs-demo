import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <Link href="/">
          <a className="logo">GitHub</a>
        </Link>
        <Link href="/addUser">
          <a style={{fontSize:"1.2rem",fontWeight:"bolder"}} >Add User</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
