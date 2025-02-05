// frontend/components/SimulationControls.js
import { useState } from 'react';

export default function SimulationControls({ selectedBlock, onRunSimulation }) {
  const [modification, setModification] = useState('');

  const handleRun = () => {
    // Prepare modifications object (extend as needed for real simulation parameters)
    const modifications = { note: modification };
    onRunSimulation(selectedBlock, modifications);
  };

  return (
    <div className="my-4 p-4 border rounded">
      <h2 className="text-xl font-semibold">Run Simulation</h2>
      <p>Selected Block: {selectedBlock}</p>
      <input
        type="text"
        placeholder="Enter modification note"
        value={modification}
        onChange={(e) => setModification(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button onClick={handleRun} className="bg-blue-500 text-white px-4 py-2 rounded">
        Run Simulation
      </button>
    </div>
  );
}
