import { ThemeProvider } from 'styled-components';

import Container from '../Layout/Container';

import { GlobalStyle } from '../Styles/GlobalStyle';


const theme = {
  colors: {
    header: "#f8f9f9",
    body: "#fff",
  },
  mobile: '600px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container className="container">

        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
