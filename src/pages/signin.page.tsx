import HeaderComponent from "../components/header.component";

const SignInPage = () => {
    return (
        <>
            <HeaderComponent />
            <div className="container-lg text-start mt-5">
                <div className="row">
                    <div className="col-md-6">
                       <h3>Hello Everyone,</h3>
                       <p>Welcome to our chatbot, please login to your account.</p>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 text-end">
                                <button type="button" className="btn btn-link">Forgot Password?</button>
                            </div>
                            <div className="mb-3 d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
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