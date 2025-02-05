
---

## Example Code Files

Below are the complete code examples for each component:

### 1. Frontend: Home Page (`frontend/pages/index.js`)

```javascript
// frontend/pages/index.js
import { useEffect, useState } from 'react';
import Timeline from '../components/Timeline';
import SimulationControls from '../components/SimulationControls';
import StateViewer from '../components/StateViewer';

export default function Home() {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [simulationResult, setSimulationResult] = useState(null);
  const [timelineData, setTimelineData] = useState([]);

  // Fetch dummy timeline data (replace with real RPC data as needed)
  useEffect(() => {
    async function fetchTimeline() {
      const data = [
        { block: 12340, timestamp: '2025-01-01T12:00:00Z' },
        { block: 12341, timestamp: '2025-01-01T12:00:01Z' },
        { block: 12342, timestamp: '2025-01-01T12:00:02Z' },
        { block: 12343, timestamp: '2025-01-01T12:00:03Z' },
        { block: 12344, timestamp: '2025-01-01T12:00:04Z' }
      ];
      setTimelineData(data);
    }
    fetchTimeline();
  }, []);

  // Run simulation for selected block with modifications
  const runSimulation = async (blockNumber, modifications) => {
    try {
      const res = await fetch('/api/simulation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blockNumber, modifications })
      });
      const data = await res.json();
      setSimulationResult(data);
    } catch (error) {
      console.error('Simulation error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Monad Memento – Blockchain Time Machine</h1>
      <Timeline data={timelineData} onSelectBlock={(block) => setSelectedBlock(block)} />
      {selectedBlock && (
        <SimulationControls
          selectedBlock={selectedBlock}
          onRunSimulation={runSimulation}
        />
      )}
      {simulationResult && (
        <StateViewer simulationResult={simulationResult} />
      )}
    </div>
  );
}
