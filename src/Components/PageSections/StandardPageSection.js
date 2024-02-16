import React from 'react';
import {
  StandardPageSectionReverseStyles,
  StandardPageSectionStyles,
} from './PageSection.styles';

export default function StandardPageSection({ data }) {
  if (data.reverse) {
    return (
      <StandardPageSectionReverseStyles>
        <div className="inner">
          <h2>{data.title}</h2>
          {data.text && (
            <div>
              {data.text.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          )}
          {data.content && (
            <div className="content">
              <div
                className="content-html"
                dangerouslySetInnerHTML={{ __html: data.content.html }}
              />
            </div>
          )}
        </div>
      </StandardPageSectionReverseStyles>
    );
  }
  return (
    <StandardPageSectionStyles>
      <h2>{data.title}</h2>
      {data.text && (
        <div>
          {data.text.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      )}
      {data.content && (
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        </div>
      )}
    </StandardPageSectionStyles>
  );
}
