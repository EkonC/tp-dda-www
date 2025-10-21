import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.js";
import theme from "./styles/theme.js";

import Container from "./components/Container.jsx";
import { Small } from "./components/Typography";
import NavBar from "./components/NavBar.jsx";

import Home from "./pages/Home.jsx";
import Documentation from "./pages/Documentation.jsx";
import Minutes from "./pages/Minutes.jsx";

import styled from "styled-components";

const Shell = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00));
`;

const BrandRow = styled.div`
  display: flex; align-items: center; gap: ${({ theme }) => theme.spacing(2)};
`;

const Logo = styled.div`
  width: 42px; height: 42px; border-radius: 12px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accent2});
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Title = styled.h1`
  margin: 0; font-size: clamp(1.1rem, 1vw + 1rem, 1.6rem); letter-spacing: .2px;
`;

const Sub = styled.div`
  color: ${({ theme }) => theme.colors.textSoft}; font-size: .95rem;
`;

const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSoft};
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Shell>
                    <Header>
                        <Container>
                            <BrandRow>
                                <Logo />
                                <div>
                                    <Title>Document Drafting Assistant</Title>
                                    <Sub>Projektová prezentácia a dokumentácia • tímový projekt DDA</Sub>
                                </div>
                            </BrandRow>
                            <NavBar />
                        </Container>
                    </Header>

                    <main>
                        <Container>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/docs" element={<Documentation />} />
                                <Route path="/minutes" element={<Minutes />} />
                            </Routes>
                        </Container>
                    </main>

                    <Footer>
                        <Container>
                            <Small>
                                © {new Date().getFullYear()} DDA Team • Aktualizované{" "}
                                {new Date().toLocaleDateString("sk-SK")}
                            </Small>
                        </Container>
                    </Footer>
                </Shell>
            </Router>
        </ThemeProvider>
    );
}