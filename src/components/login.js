import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Login(){

    const handlesubmit=(event)=>{
         
        event.preventDefault();

        let role=document.getElementById("role").value;
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let address=document.getElementById("address").value;
        let contact=document.getElementById("contact").value;
        let branch=document.getElementById("branch").value;
        let password=document.getElementById("password").value;

        if(role === '' || role === null){
            alert("Enter role");
        }
        else if (name === '' || name === null){
            alert("Enter your name");
        }
        else if(email === '' || name === null){
            alert("Enter your email");
        }
        else if(address === '' || address === null){
            alert("Enter your Address");
        }
        else if(contact === '' || contact === null){
            alert("Enter your Contact_no");
        }
        else if(branch === '' || branch === null){
            alert("Enter your branch");
        }
        else if(password ==='' || branch === null){
            alert("Enter your Password");

        }
        else{
            alert("Profile Created");
        }

    }
    return(

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
                                    <td>Roletype</td>
                                    <td>
                                        <select name="role" id="role" className="form-control">
                                            <option>---choose---</option>
                                            <option>1</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input type="text" name="name" id="name" className="form-control"/>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="Email" name="email" id="email" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>
                                    <input type="text" name="address" id="address" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Contact_no</td>
                                    <td>
                                        <input type="number" name="contact" id="contact" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Branch</td>
                                    <td>
                                        <select type="text" name="branch" id="branch" className="form-control">
                                            <option value="">---choose---</option>
                                            <option value="1">1</option>
                                        </select>

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
                                        <button type="button"  name="data_change" id="data_change" className="btn btn-danger">Sign in</button>
                                    </td>
                               
                            
                                    <td>
                                        <button type="submit" name="data_submit" id="data_submit" className="btn btn-primary">Sign up</button>
                                    </td>
                                
                                </tr>

                            </tbody>
                           
                        </table>
                    </div>
                    </form>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
        </>
    );
}

