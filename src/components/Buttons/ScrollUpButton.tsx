import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const UpButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 400;
  opacity: 0.6;
  transition: opacity 500ms ease-out;
  width: 50px;
  height: 50px;
  @media (min-width: 1600px) {
    right: 5%;
  }

  &:hover {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`

const UpIcon = styled.span`
  border: solid black;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`

type Props = {
    onClick: () => void
}

const ScrollUpButtonComponent = ({onClick}:Props) => {
    return <ButtonContainer>
        <UpButton onClick={onClick}>
            <UpIcon />
        </UpButton>
    </ButtonContainer>
}

export default ScrollUpButtonComponent