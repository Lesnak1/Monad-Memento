# Monad Memento – Blockchain Time Machine & Simulator

Monad Memento is an innovative simulation platform that lets you explore, replay, and even modify historical states of the Monad blockchain. By offering a unique “time machine” interface, Memento enables developers, researchers, and security experts to:
- **Travel Back in Time:** View past block details, consensus decisions, and state changes.
- **Simulate Alternatives:** Modify transaction orderings or parameters starting from a given block to observe how the blockchain state evolves.
- **Learn and Innovate:** Gain deep insights into Monad’s asynchronous execution and consensus mechanisms in an interactive laboratory setting.
- **Integrate and Extend:** Use our GraphQL API and SDKs to integrate simulation data with your own dApps or research projects.

## Features

- **Interactive Timeline:** Visualize important events, block finality, and state updates on a dynamic timeline.
- **Alternative Scenario Simulation:** Run “what-if” simulations starting from any block, altering transaction orders or parameters.
- **State Explorer:** Dive into the detailed state (e.g., account balances, transaction counts) of past blocks.
- **Real-Time Updates:** Get real-time blockchain updates via WebSocket integration.
- **Developer & Research Tools:** GraphQL API endpoints and sample smart contracts to experiment with on-chain state simulations.

## Technologies

- **Frontend:**  
  - [Next.js](https://nextjs.org/)  
  - Tailwind CSS / Chakra UI  
  - React components for Timeline, Simulation Controls, and State Viewer

- **Backend:**  
  - Node.js  
  - Apollo Server (GraphQL API)  
  - Ethers.js / Web3.js for Monad RPC connectivity  
  - WebSocket for live updates

- **Database (Optional):**  
  - InfluxDB or TimescaleDB for time-series data

- **Smart Contracts:**  
  - Solidity (see `contracts/MementoSimulator.sol`)

## Installation

### Prerequisites

- Node.js (LTS version recommended)
- Yarn or npm
- (Optional) InfluxDB / TimescaleDB for time-series data storage

### Clone the Repository

```bash
git clone https://github.com/<your_username>/monad-memento.git
cd monad-memento
```

## License
This project is licensed under the MIT License.

### Contact
For any questions or contributions, please contact me from here:
philosophyfactss@gmail.com

### Socials:

Discord: kresna6773

Telegram: @lesnacrex  
