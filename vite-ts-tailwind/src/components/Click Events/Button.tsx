export default function Button() {
    // function handleClick() {
    //     console.log("thanks to clcik");
        
    // }


    const handleClick2 = (e:any) => {
       e.target.textContent = "HY";
    }

    return (
        <button onClick={(e)=> handleClick2(e)}> Click me </button>
    )
}