import React from 'react';
import {Spinner} from '../Spinner';
import styled from "styled-components";
const containersColor = `#57717D`

const AreaContainer = styled.div<{isLoading?:boolean}>`
    background: ${containersColor};
    display: flex;
    flex-wrap: wrap;
    padding: 5px 10px;
    justify-content: space-evenly;
    align-items:center;
    opacity: ${props => props.isLoading ? 0.1 : 1};
    z-index: 1;
    pointer-events:${props => props.isLoading ? 'none' : 'auto'};
`;

type Props = {
    isLoading?: boolean,
    children: React.ReactNodeArray
  }
  
  const GalleryContainer = ({children, isLoading}: Props): React.ReactElement => { 
    return (<AreaContainer isLoading={isLoading}>
        {isLoading && <Spinner width={100} height={100}/>}
        <>{children}</>
      </AreaContainer>)
  }

export default GalleryContainer;