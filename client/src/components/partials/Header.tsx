import { NavLink } from "react-router-dom";

const Header = () => {

  const linkClass = ({ isActive }: any) => isActive ? 'nav-link active active_navlink' : 'nav-link';

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header " data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className={linkClass} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/all_articles' className={linkClass} >Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/add_article' className={linkClass} >Add</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header;
