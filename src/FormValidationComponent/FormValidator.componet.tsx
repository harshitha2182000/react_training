import { useState } from "react";
import { useForm } from "react-hook-form";
import{useNavigate} from 'react-router-dom';


export interface MyFormData{
    name:string;
    age:number;
    email:string;
    password:string;
}

export function Validators(){
    let {register,handleSubmit,formState:{errors}}=useForm<MyFormData>();
    let [status,setStatus]=useState('Correct form errors');

    //redirecting to a page
    let navigateto=useNavigate();


    function onMyFormSubmit(data:any){
        console.log(data);
        setStatus('Form Submitted');
        localStorage.setItem('userValidity','sdgfj-dfhgj-djfh');

        //navigation
        navigateto('/StickyNotes');

    }
    return(
        <>
    <form onSubmit={handleSubmit(onMyFormSubmit)}>
        <div>
            <input id='name' placeholder="name" {...register('name',{required:{value:true,message:'name is mandatory'}})}/>
            {errors.name?<span className='error'>{errors.name.message}</span>:''}
        </div>
        <div>
            <input id='age' placeholder="age" {...register('age',{required:{value:true,message:'age is mandatory'}})}/>
            {errors.age?<span className='error'>{errors.age.message}</span>:''}
        </div>
        <div>
            <input id='email' placeholder="email"{...register('email',{required:{value:true,message:'email is mandatory'}})}/>
            {errors.email?<span className='error'>{errors.email.message}</span>:''}
        </div>
        <div>
            <input id='password' placeholder="password"{...register('password',{required:{value:true,message:'Password is mandatory'}})}/>
            {errors.password?<span className='error'>{errors.password.message}</span>:''}
        </div>

        <button type="submit">Submit</button>
    </form>
    <h3 className="success">{status}</h3>
    </>
    )

}