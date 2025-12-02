export default function Input({ className, placeholder, onChange, value, type = "text" }) {
  return <input className={className} type={type} placeholder={placeholder} onChange={onChange} value={value} />;
}
