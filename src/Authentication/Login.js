import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import useToken from "../hooks/useToken";
import google from "../Images/social/google.png";
import Loading from "../Shared/Loading";


const Login = () => {
    const { register,formState: { errors },handleSubmit,reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate=useNavigate();

    const [token]=useToken(gUser ||user);

    let signInError;

    const onSubmit = async(data) => {console.log(data)
        await signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    if(user||gUser){
        navigate("/home");
    }

    if(loading||gLoading){
        return <Loading></Loading>
    }

    if(error||gError){
        signInError=(
            <p className="text-red-500"><small>{error?.message||gError?.message}</small></p>
        )
    }
  return (
    <div>
      <div class="hero h-screen bg-base-200">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
                {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    }
                })}
              />
               <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>  
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    }
                })}
              />
               <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label class="label">
                <a href="#" class="label-text-alt link link-hover mt-1">
                  Forgot password?
                </a>
              </label>
            </div>
            {signInError}
            <div class="form-control mt-2">
              <button class="btn btn-primary text-white">Login</button>
            </div>
            <p className="mt-2">
              New to Parts Hub?
              <Link className="text-primary" to="/signup">
                {" "}
                create new account
              </Link>
            </p>
          </form>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} class="btn btn-secondary text-white">
              <img className="px-3" src={google} alt="" />
              <span>continue with google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
