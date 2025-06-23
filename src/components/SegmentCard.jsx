import React from "react";

const colorMap = [
  "#fba304", // laranja
  "#05657d", // azul
  "#9d7453", // marrom
  "#f4cc74", // amarelo suave
  "#d4c4b4", // bege
];

export default function SegmentCard({ image, title, description, onClick, idx }) {
  const accent = colorMap[idx % colorMap.length];
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "1.4rem",
        boxShadow: `0 4px 28px 0 #05657d15`,
        border: `2.5px solid ${accent}`,
        transition: "box-shadow 0.18s, transform 0.18s, border-color .2s",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // ESSENCIAL PARA NÃO APARECER BORDA NA IMAGEM
        minHeight: 440,
        maxWidth: 370,
        margin: "0 auto",
      }}
    >
      <div style={{ width: "100%", height: 180, overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            border: "none",
            margin: 0,
            display: "block",
            borderRadius: 0, // SEM BORDA NEM RAIO
          }}
        />
      </div>
      <div style={{ padding: "1.6rem 1.3rem 2.2rem 1.3rem", flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2
          style={{
            color: accent,
            fontSize: 23,
            fontWeight: 700,
            margin: "1.1rem 0 .75rem 0",
            letterSpacing: "-.5px",
            textAlign: "center"
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "#333",
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 1.4,
            textAlign: "center",
            minHeight: 60,
            marginBottom: "2rem",
          }}
        >
          {description}
        </p>
        <button
          style={{
            background: accent,
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: 16,
            padding: "0.68rem 2.2rem",
            boxShadow: `0 2px 8px 0 ${accent}22`,
            cursor: "pointer",
            letterSpacing: ".04em",
            alignSelf: "center"
          }}
          onClick={onClick}
          onMouseOver={e => (e.currentTarget.style.background = "#05657d")}
          onMouseOut={e => (e.currentTarget.style.background = accent)}
        >
          Saiba mais →
        </button>
      </div>
    </div>
  );
}
