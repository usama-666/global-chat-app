import { useEffect, useState } from "react";
import io from "socket.io-client";
import logo from "../../assets/images/logo_icon.png";

const socket = io("http://localhost:4500/");
function Chat({ userName }) {
  console.log(userName);
  const [showUser, setShowUser] = useState(false);

  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const messageData = {
      message: newMessage,
      user: userName,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    socket.emit("send-message", messageData);
    console.log(newMessage);
    setNewMessage("");
  };
  console.log(message);
  useEffect(() => {
    socket.on("received-message", (messag) => {
      setMessage([...message, messag]);
      console.log(message);
    });
  }, [message, socket]);
  return (
    <div className="bg-blue-300">
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 flex h-[15vh] justify-between items-center">
        <nav className="flex flex-row items-center gap-3 ml-10 ">
          <div>
            <img src={logo} alt="Logo " className="h-20" />
          </div>
          <div className="text-3xl font-bold">Developers Talk</div>
        </nav>

        <div className="px-3 font-bold text-2xl mr-11 md:hidden">
          <button
            className="hover:cursor-pointer "
            onClick={() => setShowUser(!showUser)}>
            &#9776;
          </button>
        </div>
      </header>
      <div
        className={` ${
          !showUser && "hidden"
        } md:hidden bg-gray-200 p-5  uppercase font-bold m-5 rounded-xl`}>
        <h1>Joined People</h1>

        <div className="w-full  px-2 py-3">
          <ul className=" capitalize flex flex-col gap-2">
            <li className="  rounded-full bg-green-400 py-3 px-6 font-dm text-base font-md text-white  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              {" "}
              Usama{" "}
            </li>
            <li className="  rounded-full bg-green-400 py-3 px-6 font-dm text-base font-md text-white  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              {" "}
              Haris{" "}
            </li>
            <li className="  rounded-full bg-green-400 py-3 px-6 font-dm text-base font-md text-white  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              {" "}
              Nayak{" "}
            </li>
          </ul>
        </div>
      </div>

      <main className="w-full flex  justify-between bg-blue-300 h-[85vh] ">
        <div
          className={`left 
             hidden md:block md:w-1/3 md:bg-gray-200 p-5  uppercase font-bold m-5 rounded-xl`}>
          <h1>Joined People</h1>

          <div className="w-full  px-2 py-3">
            <ul className=" capitalize flex flex-col gap-2">
              <li className="  rounded-full bg-green-400 py-3 px-6 font-dm text-base font-md text-white  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                {" "}
                Usama{" "}
              </li>
              <li className="  rounded-full bg-green-400 py-3 px-6 font-dm text-base font-md text-white  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                {" "}
                Haris{" "}
              </li>
              <li className="  rounded-full bg-green-400 py-3 px-6 font-dm text-base font-md text-white  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                {" "}
                Nayak{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="right md:w-2/3 w-full bg-gray-200  p-5 relative   m-5 rounded-xl">
          <h2 className="bg-white w-fit px-4 py-1 m-auto text-sm rounded-xl">
            <span className="font-bold  capitalize text-lg">you</span> Joined
            the chat
          </h2>
          <div className="h-[60vh] overflow-y-scroll ">
            {message.map((messg, index) => (
              <div
                key={index}
                className={`${
                  userName === messg.user ? "flex justify-end mr-4" : ""
                }`}>
                <div
                  className={`flex justify-start items-center space-y-4 ${
                    userName === messg.user ? "ml-auto" : " "
                  }`}>
                  <div className="bg-green-400 w-[40px] font-bold text-center pt-2 mr-2 h-[40px] rounded-full">
                    {messg.user.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-black bg-white px-2 py-1 pb-2 rounded-lg">
                      <h3 className="text-sm font-bold"> {messg.user}</h3>
                      <p> {messg.message}</p>
                      <p className="text-end text-sm  text-gray-400">
                        {messg.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-full ">
            <form
              action=""
              className="flex justify-between gap-3 "
              onSubmit={handleSubmit}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className=" px-4 h-12 w-full rounded-full focus:outline-green-400 focus:outline-2"
                placeholder="Type a Message...... "
              />

              <button
                type="submit"
                className=" rounded-full bg-green-400 py-3 px-6 font-dm text-base font-medium text-white  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                ✔
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chat;
