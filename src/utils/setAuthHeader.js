import axios from 'axios'
// const jsonwebtoken=require('jsonwebtoken')


export default function(token){

    console.log(token)
    if(token){
        console.log('Token has been set-properly')
       return axios.defaults.headers.common['Authorization']='Bearer'+ token
    }else{
       return axios.defaults.headers.common['Authorization']=null

    }
}
