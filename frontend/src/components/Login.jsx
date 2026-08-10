import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const navigate=useNavigate()

  const onSumbitHandler = async (e) => {
    e.preventDefault();

     try{
      const res=await axios.post(`http://localhost:3000/api/auth/login`,user,{
        headers:{
          'Content-Type':'application/json'
        },
       withCredentials:true
      })
  
      toast.success(res.data.message)
      navigate('/');
      console.log(res);
     
    }
    catch(err){
      toast.error(err.response.data.message)
      console.log(err)

    }
   
    setUser({
      userName: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="h-full w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border  border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-300">Login</h1>

        <form onSubmit={onSumbitHandler}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label label-text">Username</span>
            </label>
            <input
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              value={user.userName}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label label-text">Password</span>
            </label>
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Password"
            />
          </div>

          <p className="text-center text-gray-300 my-2">
            Don't have an account?{" "}
            <Link className="text-cyan-400 hover:underline" to="/register">
              SignUp
            </Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-block  mt-3 h-11 border border-slate-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
