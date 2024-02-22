import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  :root {
    --light-grey: #dddddd;
    --grey: #bababa;
    --black: #0f9923;
    --black-75: #181818bf;
    --black-50: #1818187f;
    --black-25: #1818183f;
    --orange: #0f9923;
    --navy: #25466e;
    --navy-75: #25466ebf;
    --navy-50: #25466e7f;
    --navy-25: #25466e3f;
    --neon: #04D2DF;
    --neon-75: #04D2DFbf;
    --neon-50: #04D2DF7f;
    --neon-25: #04D2DF3f;
    --green: #54af61;
    --green-75: #54af61bf;    
    --green-50: #54af617f;
    --green-25: #54af613f;
    --dark-green: #214E34;
    --bs-s: 0px 0px 10px 0px #ffffff87;
    --bs-m: 0px 0px 20px 2px #ffffff87;
    --bs-l: 0px 0px 30px 5px #ffffff4d;
    --bsd-s: 0px 0px 10px 0px #00000087;
    --bsd-m: 0px 0px 20px 2px #00000087;
    --bsd-l: 0px 0px 30px 5px #0000004d;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  body {
    background: var(--cream);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: scandia-web, --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--black);
  }
  button {
    font-weight: 500;
    font-family: scandia-web, --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: ease-in-out 0.3s;
    font-size: 1.8rem;
    padding: 10px 20px;
    border: 0;
    background: white;
    color: var(--black);
    border-radius: 4px;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    box-shadow: var(--bs-m);
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
  .button-reverse {
    background: var(--black);
    color: white;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  .grid {
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill,  minmax(300px, 1fr));
  }
  
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 20px;
  }
  .divider {
    height: 2px;
    width: calc(100% - 20px);
    background: var(--light-grey);
    margin: 20px 10px;
  }
  .spacer-sm {
    position: relative;
    width: 100%;
    height: 5px;
  }
  .spacer-md {
    position: relative;
    width: 100%;
    height: 15px;
  }
  .spacer-lg {
    position: relative;
    width: 100%;
    height: 30px;
  }
  .buttons-flex {
    margin: 30px 0 0 0;
    padding: 20px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .contractor-section {
    h2 {
      margin-bottom: 40px;
    }
    p {
      margin: 10px 0;
    }
  }
  // 
  //
  // Animation Styles
  //
  //

  .rotate-scale-down-diag-1 {
    -webkit-animation: rotate-scale-down-diag-1 0.7s linear both;
            animation: rotate-scale-down-diag-1 0.7s linear both;
  }
/**
 * ----------------------------------------
 * animation rotate-scale-down-diag-1
 * ----------------------------------------
 */
@-webkit-keyframes rotate-scale-down-diag-1 {
  0% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
            transform: scale(1) rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
            transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
            transform: scale(1) rotate3d(1, 1, 0, -360deg);
  }
}
@keyframes rotate-scale-down-diag-1 {
  0% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
            transform: scale(1) rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
            transform: scale(0.5) rotate3d(1, 1, 0, -180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
            transform: scale(1) rotate3d(1, 1, 0, -360deg);
  }
}


// New Styles

.flex-container {
  margin: 0 auto 50px;
  max-width: 1200px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  .item {
  padding: 20px 10px;
   background: var(--black);
   color: white; 
  }
}
.why-choose {
  margin: 50px auto;
  max-width: 1200px;
  padding: 0 10px;
}
`;

export default Globalstyle;
