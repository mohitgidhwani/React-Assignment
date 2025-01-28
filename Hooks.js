import React, { useEffect, useState } from 'react'

function UsestateHook() {

    const [state,setState] = useState(1)
  return (
    <>
      <h1>UseState Hook</h1>

      <h3>{state}</h3>
      <button style={{width:"100px", backgroundColor:"black",color:"white",fontSize:"20px"}} onClick={()=>{setState(state + 1)}}>+</button>
      <UseeffectHook></UseeffectHook>
    </>
  )
}

export default UsestateHook


function UseeffectHook()
{

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{return res.json()})
        .then((data)=>{
             console.log(data)
             setData(data)
        })
    },[])
    return(
        <>
           <h1>UseEffect Hook, API Data</h1>
             {data.map((v)=>(
                <li style={{padding:"10px 0"}}>{v.id} {" "} {v.name}</li>
             ))}
        </>
    )
}



