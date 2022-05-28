import React from 'react';
import { toast } from 'react-toastify';

const userRows = ({user,refetch}) => {
    const{_id,email,role}=user;
    const makeAdmin=()=>{
        fetch(`https://secure-beach-13890.herokuapp.com/user/admin/${email}`,{
            method:"PUT",
        })
        .then(res=>res.json())
        .then(data=>{
        refetch();
        toast.success("Successfully made an admin")
        
        })
    }

    const deleteAdmin=()=>{
        fetch(`https://secure-beach-13890.herokuapp.com/admin/${email}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
        refetch();
        toast.success("Successfully delete an admin")
        
        })
    }
    return (
        <tr>
        <th></th>
        <td>{_id}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>{role !=="admin" &&<button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button onClick={deleteAdmin} class="btn btn-xs">Remove User</button></td>
      </tr> 
     
    );
};

export default userRows;