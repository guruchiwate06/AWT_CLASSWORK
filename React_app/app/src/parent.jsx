import React from "react";
import Child from './child'

function Parent(){
    const x=[]
    const obj={}
    const users = [
  { id: 1, name: "Aarav Sharma", photo: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Ananya Patel", photo: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Vihaan Mehta", photo: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ishita Rao", photo: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Arjun Nair", photo: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Diya Kapoor", photo: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Rohan Desai", photo: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Meera Joshi", photo: "https://i.pravatar.cc/150?img=8" },
  { id: 9, name: "Kabir Shah", photo: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Sara Khan", photo: "https://i.pravatar.cc/150?img=10" },
  { id: 11, name: "Aditya Verma", photo: "https://i.pravatar.cc/150?img=11" },
  { id: 12, name: "Kavya Iyer", photo: "https://i.pravatar.cc/150?img=12" },
  { id: 13, name: "Reyansh Gupta", photo: "https://i.pravatar.cc/150?img=13" },
  { id: 14, name: "Aditi Kulkarni", photo: "https://i.pravatar.cc/150?img=14" },
  { id: 15, name: "Dev Malhotra", photo: "https://i.pravatar.cc/150?img=15" },
  { id: 16, name: "Nisha Bansal", photo: "https://i.pravatar.cc/150?img=16" },
  { id: 17, name: "Karan Sethi", photo: "https://i.pravatar.cc/150?img=17" },
  { id: 18, name: "Riya Chawla", photo: "https://i.pravatar.cc/150?img=18" },
  { id: 19, name: "Yash Thakur", photo: "https://i.pravatar.cc/150?img=19" },
  { id: 20, name: "Tanya Agarwal", photo: "https://i.pravatar.cc/150?img=20" }
];
    return(
        <div>  
            <Child name="Rajguru" number={4} array={x} object={obj}/>
        </div>
    )
}
export default Parent