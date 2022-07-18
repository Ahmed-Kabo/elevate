import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {}, [pathname]);

  return <div>{pathname}</div>;
};

export default ScrollTop;
