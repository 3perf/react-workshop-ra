import React from "react";
import * as ReactRedux from "react-redux";
import whyDidYouRender from "@welldone-software/why-did-you-render";

if (process.env.NODE_ENV === "development") {
  whyDidYouRender(React, {
    trackExtraHooks: [[ReactRedux, "useSelector"]],
  });
}
