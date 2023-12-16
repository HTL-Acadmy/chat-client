import React from "react";

// error page Not Found
const NotFound = React.lazy(() => import("./Error404"));
const LandingPage = React.lazy(() => import("./Landing"));

// chat 
const ChatPage = React.lazy(() => import("./Chat"));

export {
  NotFound,
  LandingPage,
  ChatPage
};
