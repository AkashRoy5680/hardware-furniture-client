import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../Firebase/Firebase.init";
import google from "../Images/social/google.png";
import useToken from "../hooks/useToken";
import { toast } from "react-toastify";

const SignUp = () => {
    const { register,formState: { errors },handleSubmit,reset } = useForm();
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token]=useToken(gUser ||user);

      const onSubmit = async(data) => {
      console.log(data)
      await createUserWithEmailAndPassword(data.email, data.password)
      reset();
      toast.success("Your account is created.please log in");
      navigate("/login");
    };
      
     
    if(user||gUser){
      navigate("/home");
  }
 

  return (
      <div>
        <div class="hero h-screen bg-base-200">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body ">
       <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    }
                  })}
                /> 
                 <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label> 
            </div>

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
                 </div>
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover mt-1">
                    Forgot password?
                  </a>
                </label>
             
      
              <div class="form-control mt-2">
                <button class="btn btn-primary text-white">Sign up</button>
              </div>
              <p className="mt-2">Already have an account?
            <Link className="text-primary" to="/login"> Please login</Link>
              </p>
            </form>
              <div class="divider">OR</div>
              <button onClick={()=> signInWithGoogle()} class="btn btn-secondary text-white">
              <img className="px-3" src={google} alt="" />
              <span>continue with google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SignUp;
