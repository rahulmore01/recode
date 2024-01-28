import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Add your chatbot script here
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "65b52937a0bb9b38ed01c818" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    document.head.appendChild(script);

    // Cleanup when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="chatbot-container"></div>; // Add a container div for your chatbot
};

export default Chatbot;
