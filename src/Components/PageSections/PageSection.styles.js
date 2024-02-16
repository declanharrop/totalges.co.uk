import styled from 'styled-components';

export const StandardPageSectionStyles = styled.section`
  padding: 120px 10px;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 16px;
  }
  .content-html {
    h2 {
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }
`;
export const StandardPageSectionReverseStyles = styled.section`
  background-color: var(--orange);
  .inner {
    padding: 120px 10px;
    margin: 0 auto;
    max-width: 1200px;
  }
  h2 {
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 16px;
  }
  .content-html {
    h2 {
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }
`;

export const GridPageSectionStyles = styled.section`
  padding: 120px 10px;
  h2 {
    margin: 0 0 60px 0;
  }
  .container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
  @media screen and (max-width: 1040px) {
    .container {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }
  @media screen and (max-width: 840px) {
    .container {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  .grid-item {
    max-height: 400px;
    min-height: 400px;
    border-radius: 4px;
    position: relative;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
    transform: scale(1);
    transition: 0.3s ease-in-out;
    img {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
    .overlay {
      border-radius: 4px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      h3 {
        color: white;
        margin-bottom: 20px;
      }
    }
  }
  .grid-item:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`;
export const ImagePageSectionStyles = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 400px;
  max-height: 1000px;
  img {
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00000080;
    color: #fff;
  }
  h2 {
    margin-bottom: 30px;
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }
`;
