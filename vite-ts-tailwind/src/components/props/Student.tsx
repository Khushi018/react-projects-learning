export default function Student(props:any) {
   return (
    <div>
      <p> {props.name} </p>
      <p> {props.age} </p>
    </div>

   );
}


Student.propTypes = {

}

//default props 

Student.defaultProps = {
    name : "Aditya",
    age : 9
}




