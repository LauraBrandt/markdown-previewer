import React, { Component } from 'react';
import marked from 'marked';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

let renderer = new marked.Renderer();
marked.setOptions({
  breaks: true
});
renderer.link = function (href, title, text) {
  let htmlLinkString = `<a href="${href}" target="_blank">${text}</a>`;
  return htmlLinkString;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownContent: `
# Markdown Previewer

## What is Markdown?

See [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## How it works
In this editor, type your markdown, and it will automatically display as HTML in the preview window.

## Quick reference

# header
## subheader
### you can keep going down...

Paragraphs are separated
by a blank line.

*emphasis*

**strong**

Unordered list:
* item 1
* item 2
* item 3

Ordered list:
1. item A
2. item B
3. item C

> block quote

\`code\`

\`\`\`
// multi-line code
var s = "example";
console.log(s);
\`\`\`

![Alt text](https://i.pinimg.com/736x/88/50/2b/88502b58b2ca3509be47473044fde8cc--wink-wink-adorable-animals.jpg)
`
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdownContent: event.target.value,     
    })
  }
  render() {
    return (
      <div>
        <h1 id="main-header">Markdown Previewer</h1>
        <div id="main-content">
          <Editor 
            content={this.state.markdownContent} 
            handleChange={this.handleChange}
          />
          <Preview 
            innerHTML={{
              __html: marked(this.state.markdownContent,
                             { renderer: renderer })
            }} 
          />
        </div>
      </div>
    );
  } 
}

export default App;
