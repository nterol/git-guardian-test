import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useRouter from "../utils/useRouter";
import connector from "./connect";
import { Nav } from "./styles";

const RawNavbar = props => {
  const [goBack, setGoback] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.location.pathname !== "/") setGoback(true);
    return () => setGoback(false);
  }, [router.location.pathname]);

  const handleChange = () => {
    props.changeUser();
  };

  return (
    <Nav>
      <h1>Github profil</h1>
      {goBack && (
        <Link onClick={handleChange} to="/">
          Se déconnecter
        </Link>
      )}
    </Nav>
  );
};

const Navbar = connector(RawNavbar);

export default Navbar;
