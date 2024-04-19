import md5 from "md5";
import { useState } from "react";
import HeaderComponent from "../components/header.component";
import { AuthService } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const authService = AuthService();
    const [hashedPassword, setHashedPassword] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        authService.login({
            email: formData.email,
            password: hashedPassword,
        }).then(() => {
            navigate("/chat");
        }).catch((error) => {
            if (error.response.status === 404) {
                setErrorMessage("Incorrect email or password!");
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
                       <h3>Hello Everyone,</h3>
                       <p>Welcome to our chatbot, please login to your account.</p>
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
                            <div className="mb-3 text-end">
                                <button type="button" className="btn btn-link">Forgot Password?</button>
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
                                        "Submit"
                                    )}
                                </button>
                            </div>
                            <div className="mb-3 text-center">
                                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="public/img/signin.png" alt="Sign In" width="350" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInPage;