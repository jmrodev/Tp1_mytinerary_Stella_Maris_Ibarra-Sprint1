

export default function Header() {
  return (
    <>
    
    
    
    
        <header>
    <div className="hstack gap-3 bg-light">

      <div className="p-2 ">
        <ul className="navbar-nav mx-5">
          <li className="nav-item ">
            <a className="nav-link" href="#">My Tinerary</a>
          </li>
        </ul>
      </div>

      <div className="p-2 ms-auto">

        <div className="d-flex">
          <button type="button" className="btn btn-link px-3 me-2">
            Home
          </button>
          <button type="button" className="btn btn-link px-3 me-2">
            Cities
          </button>

        </div>

      </div>

      <div className="vr"></div>

      <div className="p-2 mx-5">
        <button type="button" className="btn btn-primary me-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg> Login
        </button>
      </div>
    </div>

  </header>
    
    
    </>

  )
}
