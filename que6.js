import React from "react";

export default class List extends React.Component
{
    arr = [{fruit:"Orange"},
        {fruit:"Mango"},
        {fruit:"Banana"},
        {fruit:"Kivi"}
    ]
  render()
  {
    return(
        <>
        <h1>Lists and Keys</h1>
          {this.arr.map((v)=>(
           <li key={v.id}>
            {v.fruit}
            </li>
          )
        
          )}
        </>
    )
  }
}