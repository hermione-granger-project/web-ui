import HeaderComponent from "../components/header.component";
import { AuthService } from "../services/auth.service";
import { useContext, useState } from "react";
import md5 from "md5";
import { AuthContext } from "../contexts/auth.context";

const SignUpPage = () => {
  const authService = AuthService();
  const authContext = useContext(AuthContext);
  const [hashedPassword, setHashedPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    authService.register({
      email: formData.email,
      username: formData.username,
      password: hashedPassword,
    }).then(() => {
      setIsLoading(false);
    }).catch((error) => {
      if (error.response.status === 409) {
        setErrorMessage("Duplicate email address error");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      setIsLoading(false);
    });
  };

  return (
    <>
      <HeaderComponent />
      <div className="container-lg text-start mt-5">
        <div className="row">
          <div className="col-md-6">
            <h3>Join Today</h3>
            <p>Be part of our community by Sign Up for new account.</p>
            {!authContext.user?.isAuthenticated ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username1"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      setHashedPassword(md5(e.target.value));
                    }}
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <div className="mb-3 d-grid">
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>
                <div className="mb-3 text-center">
                  <p>
                    By Sign Up, you agree to our{" "}
                    <a href="/terms">Terms of Service</a> and{" "}
                    <a href="/privacy">Privacy Policy</a>, including cookies use.
                  </p>
                </div>
                <div className="mb-3 text-center">
                  <p>
                    Already have an account? <a href="/signin">Sign In</a>
                  </p>
                </div>
              </form>
            ) : (
              <div className="alert alert-success" role="alert">
                Registration successful, please <a href="/signin">login now</a>.
              </div>
            )}
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
