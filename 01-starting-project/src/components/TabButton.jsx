export default function TabButton({ children, onSelect }) {
  return (
    <li>
      {/* forward the onSelect event to javascript's onclick as a prop */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
