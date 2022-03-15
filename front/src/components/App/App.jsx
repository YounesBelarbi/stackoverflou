import { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom";

import Container from '../Layout/Container';
import Home from '../Home/home';
import Register from '../User/Register';

import { GlobalStyle } from '../Styles/GlobalStyle';
import Login from '../User/Login';


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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />


          </Routes>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
