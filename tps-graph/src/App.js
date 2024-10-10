import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import TPSChart from './components/TPSChart';
import CurrentTPS from './components/CurrentTPS';
import { getCurrentTPS, getHistoricalTPS } from './services/solanaService';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #1a1a2e;
  color: #e94560;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #e94560, 0 0 20px #e94560, 0 0 30px #e94560;
`;

function App() {
  const [currentTPS, setCurrentTPS] = useState(null);
  const [historicalTPS, setHistoricalTPS] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const current = await getCurrentTPS();
        setCurrentTPS(current);

        const historical = await getHistoricalTPS();
        setHistoricalTPS(historical);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>Solana TPS Tracker</Title>
        {error && <p>Error: {error}</p>}
        <CurrentTPS tps={currentTPS} />
        <TPSChart data={historicalTPS} />
      </AppContainer>
    </>
  );
}

export default App;
