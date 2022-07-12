import React, { useEffect } from "react";
import { isAndroid } from "react-device-detect";

const App = () => {
  useEffect(() => {
    if (isAndroid) {
      const url =
        "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

      window.location.replace(url);
    } else {
      setTimeout(() => {
        window.location.replace("https://instagram.com");
      }, 2000);
    }
  }, []);

  return (
    <div className="App">
      <div>
        If you have not been automatically redirected, click on the following
        link:
      </div>
      {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=in.gov.uidai.facerd">
          Open Android app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )}
    </div>
  );
};

export default App;
