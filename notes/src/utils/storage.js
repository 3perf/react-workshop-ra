import { formatISO, parseISO } from "date-fns";
import * as marked from "marked";

let notes;

export const loadNotesFromLocalStorage = () => {
  const parsedNotes = JSON.parse(localStorage.reactWorkshopAppNotes || "{}");

  const transformedNotes = {};
  for (const [id, note] of Object.entries(parsedNotes)) {
    const transformedNote = { ...note, date: parseISO(note.date) };
    transformedNotes[id] = transformedNote;
  }

  return transformedNotes;
};

export const saveNotesToLocalStorage = (notes, activeNoteId) => {
  const transformedNotes = {};
  for (const [id, note] of Object.entries(notes)) {
    const transformedNote = {
      ...note,
      html: marked.parse(note.text, { mangle: false, headerIds: false }),
      date: formatISO(note.date),
    };
    transformedNotes[id] = transformedNote;
  }

  const stringifiedNotes = JSON.stringify(transformedNotes);

  localStorage.reactWorkshopAppNotes = stringifiedNotes;
  localStorage.reactWorkshopActiveNoteId = activeNoteId;
};

export const getNotes = () => {
  if (!notes) {
    notes = loadNotesFromLocalStorage();
  }

  return notes;
};

export const putNote = (noteId, { text, date }) => {
  if (notes[noteId]) {
    // The note already exists; just update it
    notes = {
      ...notes,
      [noteId]: {
        ...notes[noteId],
        text: text || notes[noteId].text,
        date: date || notes[noteId].date,
      },
    };
  } else {
    // The note doesn’t exist; create it, filling the creation date
    notes = {
      ...notes,
      [noteId]: {
        id: noteId,
        text: text,
        date: date || new Date(),
      },
    };
  }
};

export const deleteNotes = () => {
  notes = {};
};
