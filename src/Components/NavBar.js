import { useState, useEffect } from "react";

const navIconsStyle = {
  width: "2.4rem",
  height: "2.4rem",
  stroke: "#2d9596",
};

function NavBar({ navList, navName }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mainNavStyle = {
    width: "100%",
    //  position: absolute;
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Poppins', 'sans-serif'",
    padding: "1.6rem 3.2rem",
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    gap: "4.8rem",
    fontSize: "2rem",
  };

  function handleMenuClick() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="main--navigation" style={mainNavStyle}>
      <nav style={{ display: "flex", gap: "3.2rem" }}>
        <h4>{navName}</h4>
        {viewportWidth > 800 && (
          <ul style={navLinksStyle}>
            {navList && navList.map((navItem) => <li>{navItem}</li>)}
          </ul>
        )}
      </nav>
      {viewportWidth > 800 && openMenu === false ? (
        <User />
      ) : (
        <Menu openMenu={handleMenuClick} />
      )}
      {viewportWidth < 800 && openMenu === true && (
        <SideBar navList={navList} closeMenu={handleMenuClick} />
      )}
    </div>
  );
}

function User() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="navIcon"
      style={navIconsStyle}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function Menu({ openMenu }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="navIcon"
      style={navIconsStyle}
      onClick={openMenu}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function SideBar({ navList, closeMenu }) {
  const sideBarStyle = {
    position: "fixed",
    top: "0",
    left: "50%",
    height: "100vh",
    width: "50%",
    zIndex: "10",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.6rem",
    textAlign: "center",
  };

  const sideNavListStyle = {
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-between",
    listStyle: "none",
    gap: "3.2rem",
  };

  return (
    <div style={sideBarStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="navIcon"
        style={navIconsStyle}
        onClick={closeMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      <ul style={sideNavListStyle}>
        {navList && navList.map((navItem) => <li>{navItem}</li>)}
      </ul>
      <p>Lankan Amigo</p>
    </div>
  );
}

export default NavBar;
