const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f3f3f3",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#333" }}>Nom Nom Nook</h1>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <a
              // href="#home"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Home
            </a>
          </li>
          <li style={{ display: "inline", marginRight: "20px" }}>
            <a
              // href="#recipes"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              Recipes
            </a>
          </li>
          <li style={{ display: "inline" }}>
            <a
              // href="#about"
              style={{ textDecoration: "none", color: "#007bff" }}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
