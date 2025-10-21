import React from "react";

const DOC_SECTIONS = [
    {
        id: "zadanie",
        title: "Oficiálne zadanie",
        body: (
            <>
                <p>
                    DDA is a tool that helps users draft new documents using an archive of their existing docs. It can help
                    procurement specialists draft new public tenders, lawyers draft new contracts, consultants draft new advice and
                    much more. It enables a simple yet powerful workflow.
                </p>

                <p>Let&apos;s see it in action with this example:</p>
                <ul>
                    <li>
                        Procurement specialist John works in municipal administration and he needs to create a new public procurement
                        for IT services.
                    </li>
                    <li>
                        John opens DDA and describes the procurement. DDA searches a vector database of all previously published
                        public procurements and selects a couple that are most relevant/similar.
                    </li>
                    <li>
                        DDA automatically understands the structure and content of previous procurements (which sections should the
                        document contain, what kind of content is needed, etc.).
                    </li>
                    <li>
                        DDA prompts John to upload specific materials related to the procurement (specification, timeline, etc., in
                        various formats).
                    </li>
                    <li>
                        DDA finds and extracts the information it identified as necessary for the procurement document. If some
                        information is missing it explicitly prompts John to provide it (as text or data).
                    </li>
                    <li>
                        DDA generates the new document section by section, following the format and structure of previous
                        procurements.
                    </li>
                    <li>
                        John can review and step in at any moment during the generation, adding comments, rewriting, etc
                        (human-in-the-loop).
                    </li>
                    <li>Once John is happy the new document is saved and exported.</li>
                </ul>

                <p>
                    This tool can be used across various domains, improving quality and saving hours of professional work on each
                    document. At the same time, the user has full control over the process and full transparency about what is
                    being generated.
                </p>
            </>
        ),
    },
    {
        id: "ponuka",
        title: "Vypracovaná ponuka",
        body: (
            <>
                <p>
                    Pre zobrazenie ponuky kliknite na odkaz nižšie.
                </p>
                <p>
                    <a href="/docs/offer.pdf" target="_blank" rel="noreferrer">
                        Otvoriť ponuku (PDF)
                    </a>
                </p>
            </>
        ),
    },
    {
        id: "ciele",
        title: "Ciele riešenia",
        body: (
            <>
                <p>
                    Bude doplnené neskôr.
                </p>
            </>
        ),
    },
    {
        id: "analyza",
        title: "Analýza problému",
        body: (
            <>
                <p>
                    Bude doplnené neskôr.
                </p>
            </>
        ),
    },
    {
        id: "algoritmy",
        title: "Algoritmy a metódy",
        body: (
            <>
                <p>
                    Bude doplnené neskôr.
                </p>
            </>
        ),
    },
    {
        id: "programy",
        title: "Dokumentácia k programom",
        body: (
            <>
                <p>
                    Bude doplnené neskôr.
                </p>
            </>
        ),
    },
    {
        id: "vysledky",
        title: "Výsledky a porovnania",
        body: (
            <>
                <p>
                    Bude doplnené neskôr.
                </p>
            </>
        ),
    },
    {
        id: "zdroje",
        title: "Zdroje a literatúra",
        body: (
            <>
                <p>
                    Bude doplnené neskôr.
                </p>
            </>
        ),
    },
];

export default DOC_SECTIONS;