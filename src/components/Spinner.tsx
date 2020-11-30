import styled, { keyframes } from "styled-components";

import React from 'react';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{width?:number, height?:number}>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 4px solid #09212D;
  background: transparent;
  width: ${(props) => props.width || 24}px;
  height: ${(props) => props.height || 24}px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
`;
