import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const[user]=useAuthState(auth);
  const[admin]=useAdmin(user);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          <h2 className="bg-accent text-white font-bold p-5">DashBoard!!!</h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/myprofile">My Profile</Link>
            </li>
           { admin && <li>
              <Link to="/dashboard/users">Users</Link>
            </li>}
           { admin && <li>
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
