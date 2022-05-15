import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: false,
    trackExtraHooks: [
      // Track react-redux’s useSelector
      // See https://github.com/welldone-software/why-did-you-render#custom-hooks
      // and https://github.com/welldone-software/why-did-you-render/issues/85
      [require("react-redux/dist/react-redux.js"), "useSelector"],
    ],
  });
}
export default "";
