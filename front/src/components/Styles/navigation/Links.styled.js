import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledUl = styled.ul`
    display: flex;

    li {
        list-style-type: none;
    }
`;

export const StyledLink = styled(Link)`
    font-size: 13px;
    font-weight: normal;
    text-align: center;
    margin-right: 3px ;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    padding: 0.6em 0.6em;
    text-decoration:none; 
    cursor: pointer;
    color: ${({ color }) => color};
    background-color:${({ bg }) => bg}; 
    &:hover {
        background-color:${({ bg_hover }) => bg_hover};
    }
`;





