import React from 'react';
import { ImagePageSectionStyles } from './PageSection.styles';

export default function ImagePageSection({ data }) {
  return (
    <ImagePageSectionStyles>
      <img src={data.image.url} alt={data.title} />
      <div className="overlay">
        <div className="content">
          <h2>{data.title}</h2>
          <div className="content-html">
            <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
          </div>
        </div>
      </div>
    </ImagePageSectionStyles>
  );
}
