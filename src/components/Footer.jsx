// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      background: "#112914",
      borderTop: "2px solid #b0c73544",
      color: "#b0c735a2",
      padding: "1.1rem 0",
      textAlign: "center",
      fontSize: 16,
      marginTop: "2.5rem"
    }}>
      &copy; {new Date().getFullYear()} COP30 BusinessHub &mdash; Louick Andrade
    </footer>
  );
}
