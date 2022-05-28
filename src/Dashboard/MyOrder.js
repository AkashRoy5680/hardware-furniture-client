import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((order,index)=>
                <tr key={order._id}>
                <th>{index+1}</th>
                <td>{order.orderName}</td>
                <td>{order.minQuantity}</td>
                <td>{order.price}</td>
                <td>{(order.price &&!order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-secondary text-white'>Pay</button></Link>}
                {(order.price && order.paid) && <div>
                  <p><span className='text-accent font-bold'>Paid</span></p>
                <p>Transaction Id: <span className='text-accent'>{order.transactionId}</span></p>
                  </div>}
                </td>
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