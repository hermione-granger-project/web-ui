const ChatPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-md-1">
            <div className="d-flex flex-column flex-shrink-0 bg-light sidebar">
              <a href="/" className="d-block link-dark text-decoration-none py-3 text-center" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <img src="public/img/logo-head.png" className="bi" alt="logo head" width={80}></img>
              </a>
              <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                  <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                    <i className="bi bi-house"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
                    <i className="bi bi-speedometer"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
                    <i className="bi bi-table"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
                    <i className="bi bi-basket"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
                    <i className="bi bi-person"></i>
                  </a>
                </li>
              </ul>
              <div className="dropdown border-top">
                <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-gear"></i>
                </a>

              </div>
            </div>
          </div>
          <div className="col-md-11">
            <nav className="navbar bg-body-tertiary">
              <div className="container justify-content-end">
                <a className="navbar-brand py-3" href="#">
                  <i className="bi bi-person-circle"></i>
                </a>
              </div>
            </nav>
            <div className="chat-box mx-3">
              <div className="chat-history" style={{ height: 'calc(100vh - 140px)', overflowY: 'scroll'}}>
                <p className="from-them">It was loud. We just laid there and said &ldquo;is this an earthquake? I think this is an earthquake.&rdquo;</p>
                <p className="from-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="from-them margin-b_one">It&rsquo;s more like &ldquo;this is an earthquake. Check the Internet. Yup. Earthquake. This is the size. This is the epicenter. Check social media. Make sure the East Coast knows I&rsquo;m alive. Okay, try and go back to sleep.&rdquo;</p>
                <p className="from-me no-tail emoji">👍🏻</p>
                <p className="from-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Ornare quam viverra orci sagittis eu volutpat odio. Congue quisque egestas diam in arcu cursus euismod quis. Venenatis tellus in metus vulputate eu. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Odio aenean sed adipiscing diam donec adipiscing tristique. Egestas pretium aenean pharetra magna ac. Pulvinar neque laoreet suspendisse interdum consectetur libero id.

                  Ultricies mi eget mauris pharetra et ultrices neque ornare. Semper auctor neque vitae tempus. Nec feugiat nisl pretium fusce id velit. Neque laoreet suspendisse interdum consectetur libero. Malesuada pellentesque elit eget gravida. Risus nec feugiat in fermentum posuere urna. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Sit amet venenatis urna cursus eget nunc. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Non tellus orci ac auctor augue mauris augue neque gravida. Venenatis tellus in metus vulputate eu scelerisque felis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Adipiscing elit duis tristique sollicitudin nibh sit. Vestibulum sed arcu non odio euismod lacinia at quis. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Aliquet eget sit amet tellus. Hac habitasse platea dictumst quisque sagittis purus sit. Magna fermentum iaculis eu non. Vel fringilla est ullamcorper eget.</p>
                <p className="from-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Ornare quam viverra orci sagittis eu volutpat odio. Congue quisque egestas diam in arcu cursus euismod quis. Venenatis tellus in metus vulputate eu. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Odio aenean sed adipiscing diam donec adipiscing tristique. Egestas pretium aenean pharetra magna ac. Pulvinar neque laoreet suspendisse interdum consectetur libero id.

                  Ultricies mi eget mauris pharetra et ultrices neque ornare. Semper auctor neque vitae tempus. Nec feugiat nisl pretium fusce id velit. Neque laoreet suspendisse interdum consectetur libero. Malesuada pellentesque elit eget gravida. Risus nec feugiat in fermentum posuere urna. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Sit amet venenatis urna cursus eget nunc. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Non tellus orci ac auctor augue mauris augue neque gravida. Venenatis tellus in metus vulputate eu scelerisque felis. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Adipiscing elit duis tristique sollicitudin nibh sit. Vestibulum sed arcu non odio euismod lacinia at quis. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Aliquet eget sit amet tellus. Hac habitasse platea dictumst quisque sagittis purus sit. Magna fermentum iaculis eu non. Vel fringilla est ullamcorper eget.</p>
              </div>
              <form className="row">
                <div className="col-md-11">
                  <input type="text" className="form-control" placeholder="Enter your message here..." />
                </div>
                <div className="col-md-1">
                  <button type="submit" className="btn btn-primary"><i className="bi bi-send"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default ChatPage;