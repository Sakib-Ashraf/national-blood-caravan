import React from 'react';
import '../../containers/App.css';

const Login = () => {
    return (
        <section>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner">
                                <h2 className="page-title">Login</h2>
                                <ul className="page-list">
                                    <li>
                                        <a href="https://nationalbloodcaravan.com">Home</a>
                                    </li>
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content contact-page-content-area padding-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="right-content-area">
                                <div className="contact-page-form-wrap login-page">
                                    <h2 className="title">Login</h2>
                                    <form action="https://nationalbloodcaravan.com/login" method="post" className="contact-page-form" noValidate encType="multipart/form-data">
                                        <input type="hidden" name="_token" value="OfPwLz0MpdRTmNY9ieQpPREP1CnEC1xHvU2a0HMH"/>         <div className="form-group">
                                            <input type="text" name="username" placeholder="Your Username" className="form-control" required aria-required="true"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" placeholder="Your Password" className="form-control" required aria-required="true"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Login" className="submit-btn register-as-donor"/>
                                        </div>
                                        <div className="extra-links form-group">
                                            <a href="user-forget-password.html">Forget Password ?</a>
                                            <a href="register.html">Don't Have Account ?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
  );
};


export default Login;