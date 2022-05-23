import React, { useState, useEffect } from "react";

import { renderButton, checkSignedIn } from "../helpers/utils";

export const useLoggedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => {
    //(3)
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => {
    //(2)
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init); //(1)
  });

  return isSignedIn;
};
