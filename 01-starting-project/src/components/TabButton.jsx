export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* forward the onSelect event to javascript's onclick as a prop */}
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
