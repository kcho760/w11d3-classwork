import './Header.css';
import logo from '../../Images/logo.png';

function Header() {
    return (
        <>
            <div className="survey">
            <img className="logo" src={logo}></img>
                <div className='innerdiv'>
                    <h1>Survey Tool</h1>
                    <h3>Home</h3>
                </div>
            </div>
        </>
    )
}

export default Header;