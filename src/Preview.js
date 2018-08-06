import React from 'react';

const Preview = (props) => {
  return (
    <div id="preview-container">
      <h2 className="section-header">Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={props.innerHTML}></div>
    </div>
  );
}

export default Preview;