import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Logout(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Signin</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>Username</td>
                                <td>
                                    <input type="text" name="username" id="username" className="form-control"/>
                                </td>
                                <tr>
                                    <td>
                                        Password
                                    </td>
                                    <td>
                                        <input type="password" name="password" id="password" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <button type="button" name="data_send" id="data_send" className="btn btn-danger">Signup</button>
                                    </td>

                                    <td>
                                        <button type="submit" name="data_submit" id="data_submit" className="btn btn-primary">Signin</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}