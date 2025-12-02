export default function Button({ children, handleClick, buttonStyle = {} }) {
  const defaultStyle = { padding: "1px 1px", fontSize: "12px" };
  const combinedStyle = { ...defaultStyle, ...buttonStyle };

  return (
    <button type="button" onClick={handleClick} style={combinedStyle}>
      {children}
    </button>
  );
}
