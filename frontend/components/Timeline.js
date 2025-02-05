// frontend/components/Timeline.js
export default function Timeline({ data, onSelectBlock }) {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-semibold">Timeline</h2>
      <ul className="list-disc pl-5">
        {data.map((item) => (
          <li
            key={item.block}
            className="cursor-pointer hover:underline"
            onClick={() => onSelectBlock(item.block)}
          >
            Block #{item.block} - {new Date(item.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
