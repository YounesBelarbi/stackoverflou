import styled from 'styled-components';

export const StyledHeader = styled.header`

    background-color: #f8f9f9;
    padding: 3px 0 3px 0;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.6);
    border-top: 3px solid #f48225;

    div {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        width:60%;
        height:37px;
        margin: 0 auto;
    }

    h1 {
        font-size:1.5em;
        font-weight:normal;
    }

    span {
        font-weight:bold;
    }    

    a {
        text-decoration: none;
        color: black;
    }
`