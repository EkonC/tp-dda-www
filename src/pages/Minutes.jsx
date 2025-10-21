import React from "react";
import Section from "../components/Section.jsx";
import { H2, Small } from "../components/Typography.jsx";
import MeetingCard from "../components/MeetingCard.jsx";
import MEETINGS from "../content/meetings.js";

export default function Minutes() {
    const meetings = [...MEETINGS].sort((a, b) => (a.date < b.date ? 1 : -1));

    return (
        <>
            <Section>
                <H2>Zápisnice</H2>
                <Small>
                    Stručný zápis so základnými údajmi o stretnutí (kedy bolo stretnutie, kto sa na ňom zúčastnil, kto vypracoval zápis) a podrobné informácie z priebehu stretnutia.
                </Small>
            </Section>

            <div style={{ display: "grid", gap: 16 }}>
                {meetings.map((m) => (
                    <MeetingCard key={m.id} meeting={m} detailed />
                ))}
            </div>
        </>
    );
}