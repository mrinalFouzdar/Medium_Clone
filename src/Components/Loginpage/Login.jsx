import React from "react";
import styles from "../../styles/Login.module.css";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { isAuthorized } from "../../Redux/IsAuth/action.js";
import { saveData, loadData } from "../../Localstorage";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  if (loadData("user") === null) {
    saveData("user", []);
  }
  if (loadData("useDetails") === null) {
    saveData("userDetails", []);
  }
  // let isAuth=useSelect

  const navigate = useNavigate();

  let AuthDetails = useSelector((state) => state.IsAuth);
  console.log(AuthDetails);
  const dispatch = useDispatch();
  const onLoginsucces = (res) => {
    let user = loadData("user");

    let userDetails = loadData("userDetails");
    // (navigate("/loading"),
    let i = 1;
    user.map((eachuser) =>
      eachuser === res.profileObj.email
        ? // dispatch(isAuthorized(true)),
          (i === 1 ? alert("sucessfull") : console.log("something"),
          i++,
          userDetails.push(res.profileObj),
          saveData("userDetails", userDetails),
          navigate("/loading"))
        : console.log("hallo")
    );

    if (i === 1) {
      alert("Register First");
    }
  };
  const onFailuresucces = (res) => {
    console.log("login Failed", res);
  };
  const logsin = () => {
    navigate("/register");
  };
  const closesign = () => {
    navigate("/");
  };
  console.log(AuthDetails, "authdetails");
  return (
    <div className={styles.login1}>
      <div className={styles.login2}>
        <div>
          <span className={styles.close} onClick={closesign}>
            +
          </span>
        </div>
        <div className={styles.login3}>
          <h2>Welcome Back</h2>
        </div>
        <div className={styles.login4}>
          <GoogleLogin
            clientId="386944029756-6t000p41vm5g8qtif9m191abtejqa3ev.apps.googleusercontent.com"
            render={(renderProps) => (
              <>
                <div
                  className={styles.login41}
                  onClick={renderProps.onClick}
                  // disabled={renderProps.disabled}
                >
                  <svg width="25" height="25" className="cp al">
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                        fill="#EA4335"
                      ></path>
                    </g>
                  </svg>
                  <p>Sign in with Goggle</p>
                </div>
              </>
            )}
            buttonText="Login"
            onSuccess={onLoginsucces}
            onFailure={onFailuresucces}
            cookiePolicy={"single_host_origin"}
          />

          <div className={styles.login41}>
            <svg width="25" height="25" fill="#3B5998" className="cp al">
              <path
                d="M20.3 4H4.7a.7.7 0 0 0-.7.7v15.6c0 .38.32.7.7.7h8.33v-6.38h-2.12v-2.65h2.12V9.84c0-2.2 1.4-3.27 3.35-3.27.94 0 1.75.07 1.98.1v2.3H17c-1.06 0-1.31.5-1.31 1.24v1.76h2.65l-.53 2.65H15.7l.04 6.38h4.56a.7.7 0 0 0 .71-.7V4.7a.7.7 0 0 0-.7-.7"
                fillRule="evenodd"
              ></path>
            </svg>
            <p>Sign in with Facebook</p>
          </div>
          <div className={styles.login41}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="cp al"
            >
              <path
                d="M16.86 12.48c.02 2.42 2.12 3.22 2.14 3.23-.02.06-.34 1.15-1.1 2.27-.67.98-1.36 1.94-2.45 1.96-1.07.02-1.41-.63-2.63-.63-1.23 0-1.6.61-2.62.65-1.05.04-1.85-1.05-2.52-2.02-1.37-1.98-2.42-5.6-1.01-8.04a3.9 3.9 0 0 1 3.3-2c1.03-.02 2 .7 2.64.7.63 0 1.8-.87 3.05-.74.52.02 1.98.21 2.92 1.58-.07.05-1.74 1.02-1.72 3.04zm-2.01-5.93c.56-.68.93-1.62.83-2.55-.8.03-1.78.54-2.35 1.21-.52.6-.97 1.55-.85 2.47.9.07 1.81-.46 2.37-1.13"
                fill="#000"
              ></path>
            </svg>
            <p>Sign in with Apple</p>
          </div>
          <div className={styles.login41}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              className="dp cp al"
            >
              <path d="M22.3 4.3c-.82.51-1.72.88-2.67 1.08a4.25 4.25 0 0 0-6.18-.12 4.3 4.3 0 0 0-1.26 3.03c0 .34.04.67.08 1a12.2 12.2 0 0 1-8.81-4.52 4.8 4.8 0 0 0-.62 2.14 4.44 4.44 0 0 0 1.92 3.6 4.13 4.13 0 0 1-1.91-.55v.07c0 2.06 1.47 3.8 3.44 4.21-.37.08-.74.13-1.15.15l-.76-.07a4.32 4.32 0 0 0 3.98 2.99A9.03 9.03 0 0 1 3 19.14l-1-.06A12.26 12.26 0 0 0 8.6 21c7.88 0 12.2-6.55 12.17-12.18.02-.23.02-.41 0-.62a8.06 8.06 0 0 0 2.15-2.23c-.77.37-1.6.6-2.45.7a4.1 4.1 0 0 0 1.84-2.38"></path>
            </svg>
            <p>Sign in with Twitter</p>
          </div>
          <div className={styles.login41}>
            <svg width="25" height="25" className="co cp al">
              <path d="M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"></path>
            </svg>
            <p>Sign in with email</p>
          </div>
          <div className={styles.login42}>
            <p>No account?</p>
            <button onClick={logsin}>
              <b>Create one</b>
            </button>
          </div>
        </div>
        <div className={styles.login5}>
          <p>
            Click “Sign In” to agree to Medium’s{" "}
            <a
              href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=login----------------------------------------"
              rel="noreferrer"
              target="_blank"
            >
              Terms of Service
            </a>{" "}
            and acknowledge that Medium’s{" "}
            <a
              href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9?source=login----------------------------------------"
              rel="noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            applies to you.
          </p>
        </div>
      </div>
    </div>
  );
};
