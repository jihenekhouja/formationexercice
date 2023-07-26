import 'bootstrap/dist/css/bootstrap.min.css';

function Menu({role}) {

   
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <a className="navbar-brand" href="/">Site Vente en ligne </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="formation">formations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="User">users</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu ;