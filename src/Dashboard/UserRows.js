import React from 'react';
import { toast } from 'react-toastify';

const userRows = ({user,refetch}) => {
    const{_id,email,role}=user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:"PUT",
        })
        .then(res=>res.json())
        .then(data=>{
        refetch();
        toast.success("Successfull made an admin")
        
        })
    }

    const deleteAdmin=()=>{

    }
    return (
        <tr>
        <th></th>
        <td>{_id}</td>
        <td>{email}</td>
        <td>{role !=="admin" &&<button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button onClick={deleteAdmin} class="btn btn-xs">Remove User</button></td>
      </tr> 
     
    );
};

export default userRows;