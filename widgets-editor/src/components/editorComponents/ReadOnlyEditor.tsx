import React, { ChangeEvent } from "react";
import {
  EditorModes,
  EditorSize,
  EditorTheme,
  TabBehaviour,
} from "components/editorComponents/CodeEditor/EditorConfig";

const CodeEditorLazy = React.lazy(() =>
  import("components/editorComponents/CodeEditor"),
);

interface Props {
  input: {
    value: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  };
  height: string;
  folding: boolean;
}

const ReadOnlyEditor = (props: Props) => {
  const editorProps: EditorProps = {
    hinting: [],
    input: props.input,
    marking: [],
    mode: EditorModes.JSON_WITH_BINDING,
    size: EditorSize.EXTENDED,
    tabBehaviour: TabBehaviour.INDENT,
    theme: EditorTheme.LIGHT,
    height: props.height,
    showLightningMenu: false,
    showLineNumbers: true,
    borderLess: true,
    folding: props.folding,
  };
  return <CodeEditorLazy {...editorProps} />;
};

export default ReadOnlyEditor;
