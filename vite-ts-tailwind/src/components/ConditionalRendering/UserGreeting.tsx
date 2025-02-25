export default function UserGreeting(props:any) {
    return (
        props.isLogIn ? <h2> {props.name} </h2> : <h2>Please log In!!</h2>

    )
}
// UserGreeting.prototype = {
//     isLogIn : PropTypes.bool,
//     name : PropTypes.String

// }
UserGreeting.defaultPropTypes = {

}

