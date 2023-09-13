import React, { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="p-2 bg-violet-200">
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <h1 className="font-serif text-3xl">
              <Anchor to="/" className="text-zinc-950">
                My Tinerary
              </Anchor>
            </h1>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-zinc-950 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <nav
            className={`${
              menuOpen ? "block " : "hidden"
            } md:block space-y-2 md:space-y-0 md:flex md:space-x-4 `}
          >
            <Anchor to="/" className="text-zinc-950">
              Home
            </Anchor>
            <Anchor to="/cities" className="text-zinc-950">
              Cities
            </Anchor>
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <button
                  type="button"
                  className="text-white btn btn-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-primary text-zinc-950"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
