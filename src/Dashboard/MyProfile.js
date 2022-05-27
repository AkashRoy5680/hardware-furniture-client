import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const[user,loading]=useAuthState(auth)
    const { register,handleSubmit,reset } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        reset();
    
    //send data to server
    const url=`http://localhost:5000/profile/${user.email}`;
    fetch(url,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged===true){
            toast("Your profile is updated");
        }
    })
    };
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
             <h2>My Profile!</h2>
             <div>
        <div class="hero h-screen bg-base-200">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered"
                  {...register("name")}
                  value={user.displayName}
                
                /> 
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  class="input input-bordered"
                  {...register("email")}
                  value={user.email}
                
                /> 
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Education</span>
                </label>
                <input
                  type="text"
                  placeholder="Add Education"
                  class="input input-bordered"
                  {...register("education")}
                /> 
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Linkedin</span>
                </label>
                <input
                  type="text"
                  placeholder="Linkedin Profile"
                  class="input input-bordered"
                  {...register("linkedin")}
                /> 
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone No.</span>
                </label>
                <input
                  type="number"
                  placeholder="phone"
                  class="input input-bordered mb-3"
                  {...register("phone")}
                /> 
              </div>
              <div class="form-control">
              <button class="btn btn-accent text-white">Update</button>
            </div>
            </form>
            
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default MyProfile;