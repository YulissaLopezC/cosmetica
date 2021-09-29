import { Link } from "react-router-dom";
const MenuItem = (props) =>{
    return (
    <Link to={props.router} className="vinculos">
        <li>{props.nombreitem}</li>
    </Link>
    );
}

export default MenuItem;