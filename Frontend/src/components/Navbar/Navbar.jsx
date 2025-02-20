const Navbar = () => {
  const total = 20000;
  const token = false;
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Pizzería Mamma mia!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {token == true ? "Profile" : "Login"}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {token == true ? "Logout" : "Register"}
                </a>
              </li>
            </ul>
            <span class="navbar-text fw-bold">
              Total: ${total.toLocaleString("es-Es")}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
