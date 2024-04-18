import { useNavigate } from "react-router-dom";
import HeaderComponent from "../components/header.component";

const HomePage = () => {
    const navigate = useNavigate();
    const gotoSignInPage = () => {
        navigate("/signin");
    };
    const gotoSignUpPage = () => {
        navigate("/signup");
    };
    return (
        <>
            <HeaderComponent />
            <div className="container-lg text-start mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-2">Two greatest mind combine in one single powerful chatbot.</h1>
                        <div className="container text-center mt-5">
                            <div className="row">
                                <div className="col d-grid ">
                                    <button type="button" className="btn btn-primary" onClick={gotoSignInPage}>Login Now</button>
                                </div>
                                <div className="col d-grid ">
                                    <button type="button" className="btn btn-outline-primary" onClick={gotoSignUpPage}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="public/img/Hero.png" alt="Hero" width="620" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;