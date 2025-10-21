import React from "react";
import Card from "../components/Card.jsx";
import Section from "../components/Section.jsx";
import Tag from "../components/Tag.jsx";
import { H2, Small } from "../components/Typography.jsx";
import MEETINGS from "../content/meetings.js";
import MeetingCard from "../components/MeetingCard.jsx";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  grid-template-columns: 1.3fr 1fr;
  @media (max-width: 980px) { grid-template-columns: 1fr; }
`;

export default function Home() {
    const TODAY = new Date();

    return (
        <>
            <Section>
                <H2>Naposledy pridané zápisnice</H2>
                <div style={{ display: "grid", gap: 16 }}>
                    {MEETINGS.slice(0, 3).map((m) => (
                        <MeetingCard key={m.id} meeting={m} />
                    ))}
                </div>
            </Section>
        </>
    );
}

/*

<Grid>
                <Card>
                    <H2>Aktuálny stav projektu</H2>
                    <ul style={{ margin: ".2rem 0 0 1rem", lineHeight: 1.8 }}>
                        <li><b>Roadmap:</b> backlog → prototyp → integrácia RAG → testovanie → odovzdanie.</li>
                        <li><b>Najbližšie kroky:</b> grooming backlogu, získať vzorové dokumenty, návrh vektorovej pipeline.</li>
                    </ul>
                </Card>

                <Card>
                    <H2>Rýchle odkazy</H2>
                    <ul style={{ margin: ".2rem 0 0 1rem", lineHeight: 1.8 }}>
                        <li><a href="#/minutes">Zápisnice stretnutí</a></li>
                        <li><a href="#/docs">Dokumentácia</a></li>
                        <li><a href="/docs/offer.pdf" target="_blank" rel="noreferrer">Ponuka (PDF)</a></li>
                    </ul>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                        <Tag>#DDA</Tag><Tag>#RAG</Tag><Tag>#React</Tag><Tag>#StyledComponents</Tag>
                    </div>
                </Card>
            </Grid>

 */