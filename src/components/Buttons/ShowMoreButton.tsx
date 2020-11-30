import styled, { keyframes } from "styled-components";

import React from 'react';
import {Spinner} from '../Spinner'

const ButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;  
`

const ShowMoreButton = styled.button`
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: #17323F;
`;

const showMoreButtonText = "Show more"

type Props = {
    isShown: boolean,
    isLoading: boolean,
    onClick: () => void
}

const ShowMoreButtonComponent = ({ isLoading, isShown, onClick }: Props) => {
    return <ButtonContainer>
      {isLoading && <Spinner />}
      {isShown && 
        (<ShowMoreButton disabled={isLoading} onClick={onClick}>
          {showMoreButtonText}
        </ShowMoreButton>)}                
    </ButtonContainer>
}

export default ShowMoreButtonComponent