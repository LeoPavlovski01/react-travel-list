export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packet list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        <p>
          {percentage === 100
            ? " You are ready to go !"
            : ` 💼 You have ${numItems} items on your list, and you already packed 
                ${packedItems} (${percentage}%)`}
        </p>
      </em>
    </footer>
  );
}
