// frontend/components/StateViewer.js
export default function StateViewer({ simulationResult }) {
  return (
    <div className="my-4 p-4 border rounded">
      <h2 className="text-xl font-semibold">Simulation Result</h2>
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(simulationResult, null, 2)}
      </pre>
    </div>
  );
}
