export default function Input({ placeholder, onChange, value, type = "text" }) {
  return <input type={type} placeholder={placeholder} onChange={onChange} value={value} />;
}
