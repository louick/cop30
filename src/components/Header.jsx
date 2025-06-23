export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        background: "#fff",
        padding: "2.5rem 0 1.5rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: "2px solid #d4c4b4",
        marginBottom: "2.5rem"
      }}
    >
      <img
        src="/images/logocop.svg"
        alt="Logo COP30 Brasil Amazônia"
        style={{
          width: "160px",
          maxWidth: "90vw",
          height: "auto",
          display: "block",
          margin: "0 auto 1.2rem auto",
          filter: "drop-shadow(0 2px 24px #fba30466)",
        }}
        draggable={false}
      />
    </header>
  );
}
