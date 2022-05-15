import { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "./index.css";

function NoteEditor({ notes, activeNoteId, saveNote }) {
  const currentNote = notes[activeNoteId];
  const textareaRef = useRef();

  useEffect(() => {
    const editor = CodeMirror.fromTextArea(textareaRef.current, {
      mode: "markdown",
      lineWrapping: true,
    });

    editor.on("change", (doc, change) => {
      if (change.origin !== "setValue") {
        saveNote({ text: doc.getValue() });
      }
    });

    return () => editor.toTextArea();
  }, [activeNoteId]);

  return (
    <div className="note-editor" key={activeNoteId}>
      <textarea
        ref={textareaRef}
        defaultValue={currentNote.text}
        autoComplete="off"
      />
    </div>
  );
}

export default NoteEditor;
