import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure=axios.create({
    baseURL:"https://car-doc-server-delta.vercel.app",
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut}= useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },error=>{
            console.log('error tracked in the interceptor',error.response)
            if(error.response.status=== 401 || error.response.status=== 403 ){
                console.log('logOut the user')
                logOut()
                .then(() => { 
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }
        }
    )
    },[])
  
    return axiosSecure;
};

export default useAxiosSecure;