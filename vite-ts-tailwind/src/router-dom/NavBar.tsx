import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (

        <>
          <ul>
            <li>
             <NavLink to='/'>
             Home
             </NavLink>
            </li>
          </ul>

          <ul>
            <li>
            <NavLink to='/about'>
             About
             </NavLink>
            </li>
          </ul>

          <ul>
          <li>
            <NavLink to='/dashboard'>
             Dashbaord
             </NavLink>
            </li>
            <li>
            <NavLink to='/student/:id'>
             Student ID
             </NavLink>
            </li>
          </ul>
        </>
    )
}