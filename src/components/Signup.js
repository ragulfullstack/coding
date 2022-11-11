import React from 'react';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup(){

    const handlesubmit=(event)=>{
        event.preventDefault();

    

    let name=document.getElementById("name").value;

    let email=document.getElementById("email").value;

    let address=document.getElementById("address").value;

    let password=document.getElementById("password").value;

    if(name === "" || name === null){
        alert('enter name');
    }
    else if(email === '' || email === null){
        alert('Enter your email');
    }
    else if(address === '' || address === null){
        alert('Enter your Address');
    }
    else if(password === '' || password === null){
        alert("Enter the password");
    }
    else{
        alert("Profile Created Sucessfully");
    }
    
    


}

    
    

    
        

        

        
        






        
        





    
   
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                    <form onSubmit={handlesubmit}>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Signup</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input type="text" name="name" id="name" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="email" name="email" id="email" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>
                                        <input type="text" name="address" id="address" className="form-control"/>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="password" name="password" id="password" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/"><button type="button"  name="data_change" id="data_change" className="btn btn-danger">Sign in</button></Link>
                                    </td>
                               
                            
                                    <td>
                                        <button type="submit" name="data_submit" id="data_submit" className="btn btn-primary">Sign up</button>
                                    </td>
                                
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </form>
                        <div className="col-lg-3">&nbsp;</div>

                    </div>
                </div>

            </div>

        
        </>
    )
}