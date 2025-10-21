import React from "react";
import Card from "../components/Card.jsx";
import Section from "../components/Section.jsx";
import { H2, H3, Small } from "../components/Typography.jsx";
import DOC_SECTIONS from "../content/docs.jsx";

export default function Documentation() {
    return (
        <>
            <Section>
                <H2>Dokumentácia</H2>
                <Small>
                    Oficiálne zadanie, vypracovaná ponuka, ciele riešenia, analýza problému, informácie o použitých algoritmoch a metódach, dokumentácia k programom, výsledky a porovnania riešenia so známymi výsledkami, použitá literatúra a zdroje spracovaných textov.
                </Small>
            </Section>

            <div style={{ display: "grid", gap: 16 }}>
                {DOC_SECTIONS.map((sec) => (
                    <Card key={sec.id} id={sec.id}>
                        <H3>{sec.title}</H3>
                        <div>{sec.body}</div>
                    </Card>
                ))}
            </div>
        </>
    );
}