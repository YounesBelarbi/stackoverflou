import { StyledLinks_ul, StyledLinks_a } from '../Styles/navigation/Links.styled';


const Links = () => {
  return (
    <StyledLinks_ul>
      <li>
        <StyledLinks_a color="#7aa7c7" bg="#e1ecf4" bg_hover="#a8d6f7">
          se connecter
        </StyledLinks_a>
      </li>
      <li>
        <StyledLinks_a color="#fff" bg="#0a95ff" bg_hover="#067ad3">
          s'inscrire
        </StyledLinks_a>
      </li>
    </StyledLinks_ul>
  )
}

export default Links;