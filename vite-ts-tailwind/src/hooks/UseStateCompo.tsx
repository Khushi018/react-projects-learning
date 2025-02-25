import  { useState } from "react";

export default function UseStateCompo() {
    const [name, setName] = useState("khus");
    const [age, setAge] = useState(23);
    const updateName = () => {
        setName("Khushi");
    }

    const updateAge=()=>{
        setAge(12);
    }

    return (
        <>
        <div>
            <p>Name : { name}</p>
            <button onClick={updateName}> Set Name</button>
        </div>
         <div>
         <p>Age : { age}</p>
         <button onClick={updateAge}> Set Age</button>
     </div>
     </>
    )
}