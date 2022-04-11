import React, { useState } from 'react'
import Display from './Display';
const Formhandling=()=>{

const[name,setName]=useState('');
const[age,setAge]=useState('');
const[salary,setSalary]=useState('');
const[show,setShow]=useState(false)
const[store,setStore]=useState([
    {
        Name:name,
        Age:age,
        Salary:salary
    }
])
const showdata=()=>{

    // setShow(!show)

    setStore(
        [
            ...store,
            {
                Name:name,
                Age:age,
                Salary:salary
            }
        ]
    )

}


    return(
        <>

        <input type='text' value={name} placeholder='enter name' onChange={(event)=>setName(event.target.value)} />
        <br/>
        <input type='number' value={age} placeholder='enter age' onChange={(event)=>setAge(event.target.value)}/>
        <br/>

        <input type='number' value={salary} placeholder='enter salary' onChange={(event)=>setSalary(event.target.value)}/>
        
        <br/>

<button type='submit' onClick={showdata}>Submit</button>
<br/>

{
    store.map((store)=><div>{store.Name}{store.Age}{store.Salary}</div>)
}
{/* 
{show&&<Display dataname={name} dataage={age} datasalary={salary} />} */}


        </>
    )
}

export default Formhandling