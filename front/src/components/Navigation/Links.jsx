import { StyledUl, StyledLink } from '../Styles/navigation/Links.styled';


function Links() {
  return (
    <StyledUl>
      <li>
        <StyledLink to="/login" color="#7aa7c7" bg="#e1ecf4" bg_hover="#a8d6f7">Se connecter</StyledLink>
      </li>
      <li>
        <StyledLink to="/register" color="#fff" bg="#0a95ff" bg_hover="#067ad3">S'inscrire</StyledLink>
      </li>
    </StyledUl>
  );
}

export default Links;