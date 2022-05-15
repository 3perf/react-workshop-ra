import { formatISO } from "date-fns";
import Jabber from "jabber";
import { nanoid } from "nanoid";
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteNotes,
  getNotes,
  putNote,
  saveNotesToLocalStorage,
} from "../../utils/storage";
import { updateLastActiveDate } from "../../store/redux/userReducer";
import NotesList from "../NotesList";
import PrimaryPane from "../PrimaryPane";
import "./index.css";
import "./index-pro.css";
import { DarkModeProvider } from "../DarkModeContext";
import StatusBar from "../StatusBar";

const jabber = new Jabber();

function App({ mobxStore }) {
  const [notes, setNotes] = useState(getNotes());
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    saveNotesToLocalStorage(notes, activeNoteId);
  }, [notes, activeNoteId]);

  const dispatch = useDispatch();

  const saveNote = (id, { text, date }) => {
    putNote(id, { text, date });

    const newNotes = getNotes();
    setNotes(newNotes);

    dispatch(
      updateLastActiveDate(formatISO(new Date(), { representation: "date" }))
    );
  };

  const createNewNotes = ({ count, paragraphs }) => {
    for (let i = 0; i < count; i++) {
      const noteId = nanoid();

      let noteText = jabber.createParagraph(6);
      for (let j = 0; j < paragraphs; j++) {
        let line = jabber.createParagraph(30);

        noteText += "\n\n" + line;
      }

      // Make random words bold or italic
      noteText = noteText
        .split("\n")
        .map((line) =>
          line
            .split(" ")
            .filter(Boolean)
            .map((word) => {
              if (Math.random() < 0.05) {
                return "**" + word + "**";
              }

              if (Math.random() < 0.05) {
                return "_" + word + "_";
              }

              return word;
            })
            .join(" ")
        )
        .join("\n");

      putNote(noteId, { text: noteText });
    }

    const newNotes = getNotes();
    setNotes(newNotes);

    // For convenience, if only a single note was created, activate it
    if (count === 1) {
      const noteIds = Object.keys(newNotes);
      setActiveNoteId(noteIds[noteIds.length - 1]);
    }
  };

  const deleteAllNotes = () => {
    deleteNotes();

    const newNotes = getNotes();
    setNotes(newNotes);
    setActiveNoteId(null);
  };

  return (
    <DarkModeProvider>
      <div className="notes">
        <div className="notes__columns">
          <div className="notes__column notes__column_list">
            <h1>NoteList</h1>
            <div className="notes__column-content">
              <NotesList
                notes={notes}
                activeNoteId={activeNoteId}
                onNoteActivated={setActiveNoteId}
                onNewNotesRequested={createNewNotes}
                onDeleteAllRequested={deleteAllNotes}
              />
            </div>
          </div>
          <div className="notes__column notes__column_primary">
            <div className="notes__column-content">
              <PrimaryPane
                activeNoteId={activeNoteId}
                notes={notes}
                saveNote={saveNote}
              />
            </div>
          </div>
        </div>
        <div className="notes__status-bar">
          <StatusBar store={mobxStore.statusBar} />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default memo(App);
