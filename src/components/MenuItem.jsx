import { Link } from "react-router-dom";
function MenuItem(props){
    return (
    <Link to='/Manufacturing' className="vinculos">
        <li>{props.nombreitem}</li>
    </Link>
    );
}

export default MenuItem;