import { Link } from "react-router-dom";
import icon from "../../assets/images/logo_icon.png";
import { useEffect, useState } from "react";

function Join({ setUserName }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setUserName(name);
  }, [name]);

  return (
    <div
      className={`h-[100vh]   flex flex-col justify-center items-center   bg-gradient-to-r from-purple-500 to-pink-500 `}
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className=" w-1/2  h-[50vh] flex flex-col justify-center gap-4 items-center bg-blue-300">
        <img src={icon} alt="icon" />
        <h1>Developers Global Chat</h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:w-2/3 gap-2  ">
          <input
            type="text"
            className=" px-3 w-full h-10 rounded-lg outline-none"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Link
            to={!name ? "/" : "/chat"}
            type="submit"
            className="md:w-1/3 h-10 overflow-hidden bg-red-400 rounded-lg px-4 py-2 text-center  hover:bg-red-300">
            {" "}
            <button type="submit" className=" ">
              Join Chat
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Join;
