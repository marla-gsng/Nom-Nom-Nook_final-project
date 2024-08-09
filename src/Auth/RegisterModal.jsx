import { useState } from "react";
import Modal from "react-modal";
import LoginModal from "./LoginModal";
import axios from "axios";

Modal.setAppElement("#root");

const RegisterModal = ({ isOpen, onRequestOpen, openLoginModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/newuser", {
        username,
        email,
        password,
      });
      console.log(response);

      //   if (response )
      //     alert("You have successfully registered!");
      //     onRequestClose(); // Close the modal on successful registration
      //   }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0, 0, 0, 0.9)", // Night as an opaque background
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      textAlign: "center",
      color: "#D2B48C", // Chamoise writing
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)", // Night as a darker overlay
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestOpen}
      contentLabel="Register Modal"
      style={customStyles}
    >
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ backgroundColor: "#F5F5DC", color: "#D2B48C" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ backgroundColor: "#F5F5DC", color: "#D2B48C" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ backgroundColor: "#F5F5DC", color: "#D2B48C" }}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4">
        Already registered?{" "}
        <span onClick={handleLogin} className="text-blue-600 cursor-pointer">
          Sign in here
        </span>
      </p>
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
    </Modal>
  );
};

export default RegisterModal;
