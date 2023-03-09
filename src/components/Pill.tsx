import React from 'react'
import styled from 'styled-components'

type TPillProps = {
  title: string
}

const Pill = ({ title }: TPillProps) => {
  return (
    <PillWrapper>
      <p className='pill-title'>{title}</p>
    </PillWrapper>
  )
}

export default Pill

const PillWrapper = styled.div`
  padding: 8px;
  min-width: 50px;
  min-height: 50px;
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: help;

  .pill-title {
    font-size: 18px;
    color: #fff;
    padding: 0;
    font-weight: 700;
  }

  :hover {
    transform: scale(1.1);
    margin: 0 8px;
    border-color: var(--secondary-color);
    animation: float 5s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-5px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
`
