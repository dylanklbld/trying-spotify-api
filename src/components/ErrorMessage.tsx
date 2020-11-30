import React, { useEffect } from 'react'
import styled, { keyframes } from "styled-components";

import { useHistory } from 'react-router-dom';
import useSessionStatus from '../hooks/useSessionStatus'

const ErrorContainer = styled.div`
  width: 100%;
  top:30%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background:#d77070de;
  font-size: 2em;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: white;
  z-index:1;
  position:sticky;
`
const SessionMessage = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Message = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Title = styled.h2`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const ExtraInfo = styled.p`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
`


const errorTitleText = "Oops, something went wrong"
const sessionExpired = "Session is expired, please go to the start page"

type Props = {
  error: Error
}

const ErrorMessage = ({ error }: Props) => {
  const [sessionIsAlive] = useSessionStatus()
  const { message } = error

  return (<ErrorContainer>
    <Title>{errorTitleText}</Title>
    <Message>{message}</Message>
    {!sessionIsAlive && <>
      <SessionMessage>{sessionExpired}</SessionMessage>
      <a href='/'>start page</a>
    </>}

  </ErrorContainer>)
}

export default ErrorMessage