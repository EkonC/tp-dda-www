import React from "react";
import Card from "./Card.jsx";
import Tag from "./Tag.jsx";
import { H3, Small } from "./Typography.jsx";

const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("sk-SK", { day: "2-digit", month: "2-digit", year: "numeric" });

const fmtTime = (hhmm) => hhmm ?? "—";

export default function MeetingCard({ meeting, detailed = false }) {
    return (
        <Card>
            {/* Hlavička */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <H3 style={{ margin: 0 }}>{meeting.title}</H3>
                <Small>{fmtDate(meeting.date)}</Small>
            </div>

            {/* Základné údaje */}
            <div style={{ marginTop: 8, display: "grid", gap: 6 }}>
                <Small>
                    Čas: {fmtTime(meeting.startTime)} – {fmtTime(meeting.endTime)} • Miesto: {meeting.location || "—"} •{" "}
                    Zapisovateľ: {meeting.recorder || "—"}
                </Small>
            </div>

            {/* Účastníci */}
            <div style={{ marginTop: 8 }}>
                <Small>Účastníci:</Small>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                    {meeting.attendees.map((a) => (
                        <Tag key={a}>{a}</Tag>
                    ))}
                </div>
            </div>

            {/* Detailný obsah */}
            {detailed && (
                <>
                    {/* Agenda & diskusia */}
                    {Array.isArray(meeting.agenda) && meeting.agenda.length > 0 && (
                        <>
                            <H3>Agenda</H3>
                            <ul style={{ margin: ".2rem 0 0 1rem", lineHeight: 1.8 }}>
                                {meeting.agenda.map((item, i) => (
                                    <li key={i}>
                                        <b>{item.topic}:</b> {item.summary}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Rozhodnutia */}
                    {Array.isArray(meeting.decisions) && meeting.decisions.length > 0 && (
                        <>
                            <H3>Rozhodnutia</H3>
                            <ul style={{ margin: ".2rem 0 0 1rem", lineHeight: 1.8 }}>
                                {meeting.decisions.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Uložené úlohy */}
                    {Array.isArray(meeting.actions) && meeting.actions.length > 0 && (
                        <>
                            <H3>Nové úlohy</H3>
                            <ul style={{ margin: ".2rem 0 0 1rem", lineHeight: 1.8 }}>
                                {meeting.actions.map((a, i) => (
                                    <li key={i}>
                                        {a.status === "done" ? "✅" : "⬜️"} <b>{a.owner}</b> - {a.task}
                                        {a.due && <> (termín: {fmtDate(a.due)})</>}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* Vyhodnotenie predchádzajúcich úloh */}
                    {Array.isArray(meeting.previousTasksReview) && meeting.previousTasksReview.length > 0 && (
                        <>
                            <H3>Vyhodnotenie predchádzajúcich úloh</H3>
                            <ul style={{ margin: ".2rem 0 0 1rem", lineHeight: 1.8 }}>
                                {meeting.previousTasksReview.map((p, i) => (
                                    <li key={i}>
                                        {p.status === "done" ? "✅" : p.status === "blocked" ? "⛔️" : "⬜️"} <b>{p.owner}</b> - {p.task}
                                        {p.notes ? ` - ${p.notes}` : ""}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}
        </Card>
    );
}