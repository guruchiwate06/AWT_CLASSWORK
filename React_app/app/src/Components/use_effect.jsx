import { useEffect, useState } from "react";
// USe state saves the current state of the variable without rendering 
function use (){
   const[state,chage]= useState(0) ;

useEffect(()=>{
    console.log("render");
}, )

   return(
    <div>{state}</div>
   )
}
