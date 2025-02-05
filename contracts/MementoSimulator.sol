// contracts/MementoSimulator.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/**
 * @title MementoSimulator
 * @notice An example contract for on-chain state simulation experiments.
 * This contract records snapshots of state data (e.g., account balances,
 * transaction counts) and allows retrieval for simulation purposes.
 */
contract MementoSimulator {
    struct StateSnapshot {
        uint256 blockNumber;
        uint256 balance;
        uint256 txCount;
    }
    
    mapping(uint256 => StateSnapshot) public snapshots;
    
    event SnapshotRecorded(uint256 indexed blockNumber, uint256 balance, uint256 txCount);
    
    /**
     * @notice Records a state snapshot for a given block.
     * @param _blockNumber The block number of the snapshot.
     * @param _balance The recorded balance.
     * @param _txCount The number of transactions.
     */
    function recordSnapshot(uint256 _blockNumber, uint256 _balance, uint256 _txCount) external {
        snapshots[_blockNumber] = StateSnapshot(_blockNumber, _balance, _txCount);
        emit SnapshotRecorded(_blockNumber, _balance, _txCount);
    }
    
    /**
     * @notice Retrieves the snapshot for a given block.
     * @param _blockNumber The block number of the snapshot.
     * @return The state snapshot.
     */
    function getSnapshot(uint256 _blockNumber) external view returns (StateSnapshot memory) {
        return snapshots[_blockNumber];
    }
}
