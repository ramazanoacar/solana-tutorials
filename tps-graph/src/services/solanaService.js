import { Connection } from '@solana/web3.js';

const SOLANA_RPC_URL = 'https://mainnet.helius-rpc.com/?api-key=f06b34dd-0fbd-44a8-9eb7-06c6204abab9';
const connection = new Connection(SOLANA_RPC_URL);

export const getCurrentTPS = async () => {
  try {
    const perfSamples = await connection.getRecentPerformanceSamples(1);
    if (perfSamples.length > 0) {
      const { numTransactions, samplePeriodSecs } = perfSamples[0];
      return numTransactions / samplePeriodSecs;
    }
    throw new Error('No performance samples available');
  } catch (error) {
    console.error('Error fetching current TPS:', error);
    throw error;
  }
};

export const getHistoricalTPS = async () => {
  try {
    const perfSamples = await connection.getRecentPerformanceSamples(30);
    return perfSamples.map((sample) => ({
      timestamp: sample.slot,
      tps: sample.numTransactions / sample.samplePeriodSecs,
    })).reverse();
  } catch (error) {
    console.error('Error fetching historical TPS:', error);
    throw error;
  }
};