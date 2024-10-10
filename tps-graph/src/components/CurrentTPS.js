import React from 'react';
import styled from 'styled-components';

const TPSContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const TPSValue = styled.h2`
  font-size: 4rem;
  margin: 0;
  color: #14f195;
  text-shadow: 0 0 10px #14f195, 0 0 20px #14f195;
`;

const TPSLabel = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: #e94560;
`;

const CurrentTPS = ({ tps }) => {
  return (
    <TPSContainer>
      <TPSValue>{tps !== null ? tps.toFixed(2) : 'Loading...'}</TPSValue>
      <TPSLabel>Current TPS</TPSLabel>
    </TPSContainer>
  );
};

export default CurrentTPS;