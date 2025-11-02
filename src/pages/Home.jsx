import React from "react";
import Section from "../components/Section.jsx";
import { H2 } from "../components/Typography.jsx";
import MEETINGS from "../content/meetings.js";
import MeetingCard from "../components/MeetingCard.jsx";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Grid = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing(3)};
    grid-template-columns: 1.3fr 1fr;
    @media (max-width: 980px) { grid-template-columns: 1fr; }
`;

const ButtonLink = styled(NavLink)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.accent};
  color: #0a1226;
  font-weight: 600;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadow};
  &:hover { filter: brightness(1.05); text-decoration: none; }
`;

const toDateTime = (m) => {
    const [y, mo, d] = m.date.split("-").map(Number);
    const [h = 0, mi = 0] = (m.startTime || "00:00").split(":").map(Number);
    return new Date(y, mo - 1, d, h, mi);
};

export default function Home() {
    const latest = [...MEETINGS]
        .sort((a, b) => toDateTime(b) - toDateTime(a))
        .slice(0, 3);

    return (
        <>
            <Section>
                <H2>Naposledy pridané zápisnice</H2>
                <div style={{ display: "grid", gap: 16 }}>
                    {latest.map((m) => (
                        <MeetingCard key={m.id} meeting={m} />
                    ))}
                </div>

                <ButtonLink to="/minutes">Zobraziť všetky zápisnice</ButtonLink>
            </Section>
        </>
    );
}