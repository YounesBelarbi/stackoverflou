import Header from '../Layout/Header';

import { StyledContainer } from "../Styles/Layout/Container.styled";


const Container = ({ children }) => {
    return (
        <>
            <Header />
            <StyledContainer className="container">
                {children}
            </StyledContainer>
        </>
    )
}

export default Container;