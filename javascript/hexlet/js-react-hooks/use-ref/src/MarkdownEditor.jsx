import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef();

    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
            height: '500px',
            initialValue: ''
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            onContentChange(content);
        });
    });

    return (<div ref={editorRef}></div>);
};

export default MarkdownEditor;
