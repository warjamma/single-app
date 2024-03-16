import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { IEditorProps } from './editor.type';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props: any) => {
  return (
    <div>
      {BLOCK_TYPES.map((type) => (
        <StyleButton key={type.label} label={type.label} onToggle={props?.onToggle} style={type.style} />
      ))}
    </div>
  );
};

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const StyleButton = (props: any) => {
  const onClickButton = (e) => {
    e.preventDefault();
    props?.onToggle(props?.style);
  };
  return <button onMouseDown={onClickButton}>{props?.label}</button>;
};

const InlineStyleControls = (props: any) => {
  return (
    <div>
      {INLINE_STYLES.map((type) => (
        <StyleButton key={type.label} label={type.label} onToggle={props?.onToggle} style={type.style} />
      ))}
    </div>
  );
};

export const DraftEditor: React.FC<IEditorProps> = () => {
  // export const DraftEditor: React.FC<IEditorProps & Parameters<typeof useController>[0]> = (props) => {
  // const { name, control, rules, errors, defaultValue = '', isViewOnly } = props;
  // const {
  //   field: { onChange },
  // } = useController({ name, rules, control });

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const editor = React.useRef<any>(null);

  function focusEditor() {
    editor?.current?.focus();
  }

  useEffect(() => {
    focusEditor();
  }, []);

  const onInlineClick = (e) => {
    const nextState = RichUtils.toggleInlineStyle(editorState, e);
    setEditorState(nextState);
  };

  const onBlockClick = (e) => {
    const nextState = RichUtils.toggleBlockType(editorState, e);
    setEditorState(nextState);
  };
  return (
    <div className="h-full editor-control-wrapper field-body">
      {/* <Editor
        ref={register}
        // name={name}
        // initData={defaultValue}
        onChange={(e: any) => onChange(e.editor.getData())}
        readOnly={!!isViewOnly}
        // style={{ minWidth: '100%', minHeight: '100%' }}
      /> */}
      <div onClick={focusEditor}>
        <div className="App">
          <BlockStyleControls onToggle={onBlockClick} />
          <InlineStyleControls onToggle={onInlineClick} />
        </div>
        <div className="App">
          <Editor ref={editor} editorState={editorState} onChange={(e) => setEditorState(e)} />
        </div>
      </div>
    </div>
  );
};
