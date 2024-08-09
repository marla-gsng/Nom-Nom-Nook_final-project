import { useState } from "react";
// import Modal from "react-modal";
import LoginModal from "../Auth/LoginModal";

// Modal.setAppElement("#root");

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  // const toggleLoginRegister = () => {
  //   setIsLogin(!isLogin);
  // };

  // const handleLoginRegister = (event) => {
  //   event.preventDefault();
  //   // Add login/register logic here
  //   closeModal();
  // };

  return (
    <>
      <header className=" w-full h-20 flex justify-between items-center p-4 bg-chamoisee z-50">
        <div className="flex justify-start items-center gap-10">
          <h1>
            <a href="/#" className="hover:text-green-700 text-licorice">
              Nom Nom Nook
            </a>
          </h1>
          <ul className="flex gap-4 justify-end">
            <li>
              <a href="/recipes" className="hover:text-gray-700 text-white">
                Recipes
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          <button
            onClick={openLoginModal}
            className="hover:text-gray-700 text-white"
          >
            Login / Register
          </button>
        </div>
      </header>
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login/Register Modal"
        className="modal"
        style={{
          content: {
            backgroundColor: "rgba(255, 255, 255, 0.9)", // More opaque background
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
            textAlign: "center",
            flexDirection: "column",
            display: "flex",
            margin: "auto",
            marginTop: "200px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)", // Darker overlay
          },
        }}
      >
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleLoginRegister}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button onClick={toggleLoginRegister} className="text-blue-600 mt-4">
          {isLogin ? "Need to register?" : "Already have an account?"}
        </button>
        <button onClick={closeModal} className="text-red-600 mt-4">
          Close
        </button>
      </Modal> */}
    </>
  );
};

export default Header;
