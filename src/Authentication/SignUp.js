import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
      <div>
        <div class="hero h-screen bg-base-200">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-5">
            <div class="card-body ">
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered"
                />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover mt-1">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-2">
                <button class="btn btn-primary text-white">Login</button>
              </div>
              <p>Already have an account?
            <Link className="text-primary" to="/login"> Please login</Link>
              </p>
              <div class="divider">OR</div>
              <button class="btn btn-secondary text-white">
                continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SignUp;
