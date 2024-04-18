import HeaderComponent from "../components/header.component";

const SignUpPage = () => {
  return (
      <>
          <HeaderComponent />
          <div className="container-lg text-start mt-5">
              <div className="row">
                  <div className="col-md-6">
                      <h3>Join Today</h3>
                      <p>Be part of our community by Sign Up for new account.</p>
                      <form>
                          <div className="mb-3">
                              <label className="form-label">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" />
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Username</label>
                              <input type="text" className="form-control" id="username1" />
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" />
                          </div>
                          <div className="mb-3 d-grid">
                              <button type="submit" className="btn btn-primary">Continue</button>
                          </div>
                          <div className="mb-3 text-center">
                              <p>By Sign Up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>, including cookies use.</p>
                          </div>
                          <div className="mb-3 text-center">
                              <p>Already have an account? <a href="/signin">Sign In</a></p>
                          </div>
                      </form>
                  </div>
                  <div className="col-md-6 text-center">
                      <img src="public/img/signup.png" alt="Hero" width="300" />
                  </div>
              </div>
          </div>
      </>
  );
};

export default SignUpPage;