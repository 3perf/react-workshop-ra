import { Button } from "@mui/material";
import { useState } from "react";
import fakeApi from "../../utils/fakeApi";
import NoteEditor from "../NoteEditor";
import NoteView from "../NoteView";
import DarkModeSwitcher from "../DarkModeSwitcher";
import ActiveAuthors from "../ActiveAuthors";
import spinner from "./spinner.svg";
import "./index.css";

function PrimaryPane({ activeNoteId, notes, saveNote }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [publishedAt, setPublishedAt] = useState(null);

  const togglePublic = async () => {
    setIsLoading(true);

    if (isPublic) {
      await fakeApi.setPublicStatus(false);
      setIsPublic(false);
    } else {
      await fakeApi.setPublicStatus(true);
      const publishedDate = await fakeApi.getPublishedDate();
      setIsPublic(true);
      setPublishedAt(publishedDate.toLocaleTimeString());
    }

    setIsLoading(false);
  };

  if (!activeNoteId) {
    return (
      <div className="primary-pane__empty-editor">
        <div className="primary-pane__eyes">👀</div>
        <div className="primary-pane__eyes-caption">
          Select a note to start editing
        </div>
      </div>
    );
  }

  return (
    <div className="primary-pane">
      <div className="primary-pane__header">
        <h1 className="primary-pane__header-text">Editor</h1>
        <ActiveAuthors />
        <DarkModeSwitcher />
      </div>

      <div className="primary-pane__content">
        <div className="primary-pane__controls">
          <Button
            variant="outlined"
            onClick={togglePublic}
            disabled={isLoading}
            startIcon={isPublic ? "🤫" : "👀"}
          >
            {isLoading
              ? "Loading..."
              : isPublic
              ? "Make Private"
              : "Make Public"}
          </Button>
          {!isLoading && isPublic && <span>Published at: {publishedAt}</span>}
        </div>
        <NoteEditor
          saveNote={({ text, date }) => saveNote(activeNoteId, { text, date })}
          notes={notes}
          activeNoteId={activeNoteId}
        />
        <div className="primary-pane__view">
          <NoteView text={notes[activeNoteId].text} />
        </div>
      </div>
      <div
        className={
          "primary-pane__spinner-wrapper" +
          (isLoading ? " primary-pane__spinner-wrapper_visible" : "")
        }
      >
        <img className="primary-pane__spinner" src={spinner} alt="" />
      </div>
    </div>
  );
}

export default PrimaryPane;
