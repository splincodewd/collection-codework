import React from 'react';
import Editor from '@toast-ui/editor';

export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        const editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
            height: '500px',
            initialValue: ''
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            this.props.onContentChange(content);
        });
    }

    render() {
        return <div ref={this.editorRef}></div>
    }
}