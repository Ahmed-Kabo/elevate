import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // let heightOne = document.body.clientHeight;
    // let heightThreee = document.documentElement.scrollHeight;
    // const mainHeight = document.documentElement.scrollHeight / 2;

    // let scrollHeight =
    //   Math.max(
    //     document.body.scrollHeight,
    //     document.documentElement.scrollHeight,
    //     document.body.offsetHeight,
    //     document.documentElement.offsetHeight,
    //     document.body.clientHeight,
    //     document.documentElement.clientHeight
    //   ) / 2;
    // if (window.scrollY > 300 + "px") {
    //   console.log(window.scrollY);
    // }
    // console.log(window.scrollY);
    // console.log(scrollHeight);
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
