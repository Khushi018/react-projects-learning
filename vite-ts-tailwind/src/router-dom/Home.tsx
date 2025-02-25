import { useNavigate } from "react-router-dom"

export default function Home() {
    const khushi = useNavigate();

    const handle = () => {
        khushi("/dashboard")
    }

return (
   
    <>
  <p>  Home</p> 
  <p  onClick={handle}>  Back to dashboard </p>
    </>
)
}