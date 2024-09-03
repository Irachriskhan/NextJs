import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
      <Link href="/" className="text-blue-400 mt-8  text-xl">
        Home
      </Link>
      <Link href="/aboutus" className="text-blue-400 mt-8  text-xl">
        About Us
      </Link>
      <Link href="/contactus" className="text-blue-400 mt-8  text-xl">
        Contact Us
      </Link>
      <Link href="/counter" className="text-blue-400 mt-8  text-xl">
        Counter
      </Link>
      <Link href="/tours" className="text-blue-400 mt-8  text-xl">
        Tours
      </Link>
      <Link href="/actions" className="text-blue-400 mt-8  text-xl">
        Actions
      </Link>
    </nav>
  );
}

export default NavBar;
