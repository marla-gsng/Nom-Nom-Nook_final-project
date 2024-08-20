import { useState } from "react";
import Modal from "react-modal";
import RegisterModal from "./RegisterModal";
import { useAuth } from "../Context/AuthContext";

Modal.setAppElement("#root");

const LoginModal = ({ isOpen, onRequestClose }) => {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const loggedUser = await login({ username, email, password });
      if (loggedUser.data.message) return alert(loggedUser.data.message);
      onRequestClose();
    } catch (error) {
      alert("Email or password invalid");
    }
  };

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
        <button
          onClick={onRequestClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            color: "#D2B48C",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
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
          <button onClick={handleRegister} className="text-blue-600 mt-4">
            Register here
          </button>
        </form>
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
