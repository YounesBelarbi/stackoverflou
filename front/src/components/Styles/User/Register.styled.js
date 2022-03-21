import styled from 'styled-components';

export const StyledRegister = styled.section`

    .register-container {

        display: flex;
        justify-content: center;
        padding: 20px 0;
        margin: 0 auto;
        padding: 25px 30px;
    }


    .left-section {
        width: 25%;
        align-self:center;

        @media (max-width: 768px) {
            display:none;
        }
        

    }

    .right-section {
        width: 22%;
        @media (max-width: 768px) {
            width: 80%;
        }
        @media (max-width: 390px) {
            width: 100%;
        }

        & .buttons {
            display: flex;
            flex-direction:column;
            align-items:center;

            & .google-icon {
                margin: -5px;
                padding-right: 9px;
            }
        }

        & .form-container {
            margin-top:10px;

            & form {
                box-shadow: 5px 0px 32px -10px rgb(61 61 61 / 48%);
                background-color:#fff;
                width: 79%;
                height: 521px;
                margin: 16px auto;
                padding-top: 25px;
                border-radius: 10px;
                border:0 black solid;
                display: flex;
                flex-direction: column;
                align-items:center;
        
                & div{
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    margin: 5px;
                    border-radius: 2px;

                    & input {
                        height: 27px;
                        margin: 2px 0 10px 0;
                        border: 1px solid #babfc4;
                        border-radius: 3px;

                        &:focus {
                            border: 1px solid #59a4de;
                            box-shadow: 0px -2px 4px 4px #D9EAF8;
                        }
                    }
                }          
            }
        }
    }
`;

export const StyledRegisterButton = styled.button`

    background-color: ${({ bg }) => bg};
    color: ${({ color }) => color};
    box-shadow: 5px 0px 32px -10px rgb(61 61 61 / 48%);
    border-radius: 5px;
    border:0 black solid;
    width: 80%;
    height:33px;
    margin: 4px 0
    

`;

