import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FinanceBannerStyles = styled.div`
  background: var(--black);
  color: white;
  padding: 80px 0;
  .lower {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    button {
      margin: 30px 0;
      background: white;
      border: none;
      border-radius: 30px;
      padding: 8px 20px;
      cursor: pointer;
      transition: ease-in-out 0.2s;
      &:hover {
        background: var(--orange);
        box-shadow: 0 0 3px 1px var(--orange);
      }
    }
  }
  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 4fr 1fr;
    text-align: center;
    h3 {
      margin: 10px 0;
      color: var(--orange);
    }
    .item {
      text-align: center;
      padding: 20px;
      img {
        max-width: 200px;
      }
    }
  }
  @media (max-width: 800px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;

export default function FinanceBanner() {
  return (
    <FinanceBannerStyles>
      <div className="container">
        <div className="item">
          <h1>Finance Now Available</h1>
          <h3>Spread the cost of our services today</h3>
        </div>
        <div className="item">
          <img src="/logo/kanda-logo.png" alt="" />
        </div>
      </div>
      <div className="lower">
        <h4>Finance from 0%</h4>
        <Link href="/kanda">
          <button type="button">Find out more</button>
        </Link>
      </div>
    </FinanceBannerStyles>
  );
}
