import { useState } from "react";
import Modal from "react-modal";
import RegisterModal from "./RegisterModal";
import axios from "axios";

Modal.setAppElement("#root");

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //   const [identifier, setIdentifier] = useState("");

  const [password, setPassword] = useState("");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/login", {
        username,
        email,
        password,
      });
      if (response.status === 200) {
        alert("You have successfully logged in!");
        onRequestClose(); // Close the modal on successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  //     }
  //     // Add login logic
  //     console.log("Email:", email);
  //     console.log("Password:", password);
  //   };

  const handleRegister = () => {
    onRequestClose();
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
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
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Login Modal"
        style={customStyles}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <button onClick={handleRegister} className="text-blue-600 mt-4">
          Register here
        </button>
      </Modal>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        openLoginModal={onRequestClose}
      />
    </>
  );
};

export default LoginModal;
