import { useParams } from "react-router-dom"

export default function ParamCompo(){

     const {id} = useParams();
    return (
        <>
           <p> ID : {id}</p>
        </>
    )
}