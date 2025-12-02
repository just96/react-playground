export default function Button({ className, children, handleClick }) {
  return (
    <button className={className} type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
