import React from "react";
import "./MarkPreviewer.css";
import Markdown from "marked-react";
class MarkPreviewer extends React.Component {
  render() {
    return (
      <div>
        <h2 className="previewTitle">Previewer</h2>
        <div className="markdown" id="preview">
          <Markdown
            gfm={true}
            breaks={true}
            langPrefix="language-js"
            value={this.props.editorText}
          >
            {this.props.editorText}
          </Markdown>
        </div>
      </div>
    );
  }
}
export default MarkPreviewer;
