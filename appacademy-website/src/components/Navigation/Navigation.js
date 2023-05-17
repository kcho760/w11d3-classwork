import { NavLink } from "react-router-dom";
import './Navigation.css'

function Navigation() {
    return(
        <nav>
            <div className="navigation">
            <NavLink to="/samplesurvey">Sample Survey</NavLink>
            </div>
            <NavLink to="/sensorypreferences">Sensory Preferences</NavLink>
            <NavLink to="/report">Report</NavLink>
            <NavLink exact to="/">Home</NavLink>
        </nav>
    )
}
export default Navigation;