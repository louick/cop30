const colorMap = [
  "#fba304", // Card 1 - laranja ouro
  "#05657d", // Card 2 - azul COP
  "#9d7453", // Card 3 - marrom elegante
  "#f4cc74", // Card 4 - amarelo suave
  "#d4c4b4", // Card 5 - bege claro
];

export default function SegmentCard({ image, title, description, onClick, idx }) {
  const accent = colorMap[idx % colorMap.length];
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        background: "#fff",
        borderRadius: "1.3rem",
        boxShadow: `0 4px 32px 0 #05657d19`,
        border: `2.5px solid ${accent}`,
        transition: "box-shadow 0.18s, transform 0.18s, border-color .2s",
        padding: "2rem 1.2rem 1.5rem 1.2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        minHeight: 410,
        maxWidth: 370,
        margin: "0 auto",
      }}
      onMouseOver={e => {
        e.currentTarget.style.boxShadow = `0 8px 36px 0 ${accent}33`;
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.borderColor = "#fba304";
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = `0 4px 32px 0 #05657d19`;
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.borderColor = accent;
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          maxWidth: 300,
          height: 170,
          objectFit: "cover",
          borderRadius: "1rem",
          marginBottom: "1.3rem",
          border: `1.5px solid ${accent}`,
        }}
      />
      <h2
        style={{
          color: accent,
          fontSize: 25,
          fontWeight: 700,
          margin: "0 0 .7rem 0",
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
          marginBottom: "2.2rem",
          textAlign: "center",
          minHeight: 80
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
          transition: "background .18s",
          letterSpacing: ".04em"
        }}
        onClick={onClick}
        onMouseOver={e => (e.currentTarget.style.background = "#fba304")}
        onMouseOut={e => (e.currentTarget.style.background = accent)}
      >
        Saiba mais →
      </button>
      <div
        style={{
          position: "absolute",
          right: 25,
          top: 20,
          width: 28,
          height: 28,
          background: accent,
          borderRadius: "50%",
          opacity: 0.07,
        }}
      />
    </div>
  );
}
