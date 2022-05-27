import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const MyOrder = () => {
    const [orders,setOrder]=useState([]);
    const[user]=useAuthState(auth);
    useEffect(()=>{
        if(user){
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
        }
    },[user])
    return (
        <div>
            <h2 className='m-3 text-2xl'>My Order: {orders.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((order,index)=>
                <tr>
                <th>{index+1}</th>
                <td>{order.orderName}</td>
                <td>{order.minQuantity}</td>
                <td>{order.price}</td>
              </tr>
            )
        }
    </tbody>
  </table>
</div>
          
        </div>
    );
};

export default MyOrder;