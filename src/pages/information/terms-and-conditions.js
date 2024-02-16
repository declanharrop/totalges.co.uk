import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

const TCSStyles = styled.div`
  margin: 160px auto 0;
  padding: 0 10px;
  max-width: 1000px;
  .markdown {
    text-align: left;
    ul {
      list-style-type: disc;
      list-style-position: inside;
      margin-top: 20px;
      li {
        list-style-type: disc;
        margin-top: 10px;
        text-transform: none;
      }
    }
    ol {
      list-style-type: decimal;
      list-style-position: inside;
      margin-top: 14px;
      li {
        list-style-type: numeric;
        margin-top: 10px;
        text-transform: none;
      }
    }
    h3 {
      margin: 50px 0 20px 0;
    }
    a {
      word-wrap: break-word;
    }
  }
`;
const tac = `
#Coming Soon`;
export default function TCS() {
  return (
    <TCSStyles>
      <Markdown className="markdown">{tac}</Markdown>
    </TCSStyles>
  );
}
