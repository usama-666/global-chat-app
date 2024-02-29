// import socketIO from "socket.io-client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join from "./components/join/Join.jsx";
import Chat from "./components/chat/Chat.jsx";
import { useState } from "react";

// const ENDPOINT = "http://localhost:4500/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
function App() {
  // socket.on("connect", () => {
  //   // console.log("building connection");
  // });

  const [userName, setUserName] = useState("");
  console.log(userName);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Join setUserName={setUserName} />,
      // children: [
      //   {
      //     path: "chat",
      //     element: <Chat />,
      //   },
      // ],
    },
    {
      path: "chat",
      element: <Chat userName={userName} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
