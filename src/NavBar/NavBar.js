import "./NavBar.css";



const Navbar = ({ openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#"> Management</a>
                <a href="#"> Projects</a>
                <a href="#"> Events</a>
                <a className="active_link" href="#"> Admin</a>
            </div>
            <div className= "navbar __ right">
               
            </div>
        </nav>
    );
};


export default Navbar; 