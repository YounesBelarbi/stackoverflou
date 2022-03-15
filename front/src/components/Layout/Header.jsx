import { Link } from 'react-router-dom';

import Navbar from '../Navigation/Navbar';

import { StyledHeader } from '../Styles/Layout/Header.styled';


const Header = () => {
    return (
        <StyledHeader>
            <div>
                <h1><Link to="/" >stack<span>overflou</span></Link></h1>
                <Navbar />
            </div>
        </StyledHeader>
    )
}

export default Header;