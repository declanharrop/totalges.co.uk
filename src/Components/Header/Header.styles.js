import styled from 'styled-components';

const HeaderStyles = styled.header`
    .contact {
      position: absolute;
      z-index: 189;
      top: 80px;
      right: 30px;
      h3 {
        color: white;
        &:hover {
          color: var(--orange);
        }
        font-size: 2.6rem;
      }
      span {
        font-size: 1.8rem;
        color: var(--orange);
      }
      @media screen and (max-width: 600px) {
        right: 10px;
        h3 {
          font-size: 2rem;
        }
        span {
          font-size: 1.6rem;
        }
      }
    }
    .contact-links {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      /* justify-content: flex-end; */
      a {
        font-weight: 600;
        letter-spacing: 0rem;
        color: white;
        display: flex;
        font-size: 1.4rem;
        align-items: center;
        gap: 4px;
        &:hover {
          color: var(--orange);
        }
      }
    }
  }
  .mobile-bar {
    position: absolute;
    top: 0px;
    padding: 20px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    z-index: 190;
    color: white;
    height: 60px;
    width: 100vw;
    background: rgb(24, 24, 24);
    background: linear-gradient(
      180deg,
      rgba(24, 24, 24, 1) 0%,
      rgba(24, 24, 24, 0.6) 70%,
      rgba(24, 24, 24, 0) 100%
    );
    .menuIcon {
      position: absolute;
      top: 20px;
      z-index: 200;
    }
    .drawer {
      position: fixed;
      box-shadow: 0 0 10px var(--black);
      top: 0;
      left: 0;
      background: var(--black);
      width: 280px;
      height: 100vh;
      overflow: scroll;
      .mobile-dropdown {
        .services-li {
          .icon {
            transform: rotate(180deg);
          }
        }
        position: relative;
        width: 100%;
        background: white;
        top: 0;
        overflow: hidden;
        margin: 0 0 100px 0;
        .dropdown-content {
          position: relative;
          max-width: 100%;
          grid-template-columns: 1fr;
          gap: 0;
          .electrical {
            h3 {
              color: var(--black);
            }
          }
          .dropdown-section {
            .divider {
              margin: 10px 0 0;
            }
            margin: 0;
            h3 {
              color: var(--black);
              font-size: 1.6rem;
            }
          }
          ul {
            margin: 10px 0 24px;
            li {
              margin: 6px;
              a {
                color: var(--black);
                font-family: 'industry-inc-base', -apple-system, BlinkMacSystemFont,
                  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                  'Helvetica Neue', sans-serif;
              }
            }
          }
        }
      }
      .links {
        margin: 100px 0 20px;
        ul {
          display: flex;
          flex-direction: column-reverse;
          li {
            a {
              /* color: var(--navy); */
            }
          }
        }
      }
    }
    .logo {
      img {
        width: 200px;
      }
    }
  }

  //
  //
  //
  //
  //
  //
  //
  //
    .contact-links {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 14px;
      a {
        font-weight: 600;
        letter-spacing: 0.05rem;
        color: white;
        display: flex;
        align-items: center;
        gap: 4px;
        &:hover {
          color: var(--orange);
        }
      }
    }
  .bar {
    position: absolute;
    top: 0px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 188;
    color: white;
    height: 100px;
    width: 100vw;
    background: rgb(24, 24, 24);
    background: linear-gradient(
      180deg,
      rgba(24, 24, 24, 1) 0%,
      rgba(24, 24, 24, 0.6) 70%,
      rgba(24, 24, 24, 0) 100%
    );
  }
  .links {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  .services-li {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  li {
    font-family: 'industry-inc-base', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.8rem;
    cursor: pointer;
    a {
      cursor: pointer;
      font-family: 'industry-inc-base', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: white;
      font-size: 1.8rem;
      &:hover {
        color: var(--orange);
      }
    }
  }
  .logo {
    img {
        width: 200px;
      }
  }
  .dropdown {
    position: absolute;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    top: 0px;
    z-index: 200;
    width: 100vw;
    overflow: hidden;
    .services-li {
      .icon {
        transform: rotate(180deg);
      }
    }
    li {
      a {
        font-family: 'industry-inc-base', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color: var(--black);
        &:hover {
          color: var(--orange);
        }
      }
    }
  }
  .dropdown-inner {
  }
  .dropdown-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 30px;
    .links {
      margin: 0;
    }
  }
  .dropdown-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    padding: 20px;
    .electrical {
      .divider {
        background-color: var(--navy);
      }
      li {
        a {
          color: var(--navy);
          &:hover {
            color: var(--green);
          }
        }
      }
    }
    .renewable {
      h3 {
        color: var(--green);
      }
      .divider {
        background-color: var(--green);
      }
      li {
        a {
          color: var(--green);
          &:hover {
            color: var(--navy);
          }
        }
      }
    }
    .evcharging {
      h3 {
        color: var(--neon);
      }
      .divider {
        background-color: var(--neon);
      }
      li {
        a {
          color: var(--neon);
          &:hover {
            color: var(--navy);
          }
        }
      }
    }
    .dropdown-section {
      ul {
        margin: 20px 0;
        li {
          margin: 14px 4px;
          a {
            font-size: 1.6rem;
            letter-spacing: 0.05rem;
          }
        }
      }
      text-align: left;
      h3 {
        font-weight: 500;
        font-size: 2rem;
      }
      .divider {
        margin: 10px 0;
        width: 100%;
        height: 2px;
      }
    }
  }
`;

export default HeaderStyles;
