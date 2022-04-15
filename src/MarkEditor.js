import React from "react";
import MarkPreviewer from "./MarkPreviewer.js";
import "./MarkEditor.css";

class MarkEditor extends React.Component {
  constructor(props) {
    const defaultMd = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
} 
\`\`\`
    
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
    
And if you want to get really crazy, even tables:
    
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
    
- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
    
    
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
    
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`; // using markdown example from fcc project example
    super(props);
    this.state = {
      inputText: defaultMd.trim(),
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }
  render() {
    return (
      <div className="editor">
        <h1>MarkPrev</h1>
        <textarea
          defaultValue={this.state.inputText}
          onChange={this.handleTextChange}
          id="editor"
        ></textarea>
        <MarkPreviewer editorText={this.state.inputText} />
      </div>
    );
  }
}

export default MarkEditor;
