import { Link } from "react-router-dom";
import './Breadcrumb.css';

const Breadcrumb = ({ pagetitle, module }) => (
    <div className="pms-block-head-content">
        <nav>
            <ul className="breadcrumb breadcrumb-pipe">
                <li className="breadcrumb-item"> <Link to="/dashboard"> Dashboard </Link> </li>
                <li className="breadcrumb-item active"> <Link to={module.url}> {module.name} </Link> </li>
            </ul>
        </nav>
        <h3 className="pms-block-title page-title"> {pagetitle} </h3>
    </div>
)
export default Breadcrumb;