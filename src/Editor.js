import React from 'react';

const Editor = (props) => {
  return(
    <div id="editor-container">
      <h2 className="section-header">Editor</h2>
      <textarea id="editor" 
        rows="20" 
        onChange={props.handleChange} 
        value={props.content}>
      </textarea>
    </div>
  );  
}

export default Editor;
