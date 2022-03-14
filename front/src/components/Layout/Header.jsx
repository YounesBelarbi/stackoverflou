import Navbar from '../Navigation/Navbar';

import { StyledHeader } from '../Styles/Layout/Header.styled';


const Header = () => {
    return (
        <StyledHeader>
            <div>
                <h1>stack<span>overflou</span></h1>
                <Navbar />
            </div>
        </StyledHeader>
    )
}

export default Header;