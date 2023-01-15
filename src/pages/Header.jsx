import Img1 from "../img/logo.png";
import "./header.css";


const Header = () =>{
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="nav_logo">
                        <a href={Img1}><img src={Img1} alt="" /></a>
                    </div>
                    <ul className="nav__ul">
                        <li className="nav__ul--list"><a href="#">Beranda</a></li>
                        <li className="nav__ul--list"><a href="#">Koleksi</a></li>
                        <li className="nav__ul--list"><a href="#">Syarat dan Ketentuan</a></li>
                        <li className="nav__ul--list"><a href="#">Kontak</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;