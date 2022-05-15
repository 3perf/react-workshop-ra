import { makeAutoObservable, runInAction } from "mobx";
import fakeApi from "../../utils/fakeApi";

class NotesMetadataStore {
  isUpdating = false;
  publicityByNoteId = {};
  publishedDateByNoteId = {};

  constructor() {
    makeAutoObservable(this);
  }

  setMetadataUpdating(isUpdating) {
    this.isUpdating = isUpdating;
  }

  setNotePublicStatus(noteId, isPublic) {
    this.publicityByNoteId[noteId] = isPublic;
  }

  setNotePublishedDate(noteId, dateString) {
    this.publishedDateByNoteId[noteId] = dateString;
  }

  async publishNote(noteId) {
    this.setMetadataUpdating(true);

    await fakeApi.setPublicStatus(true);
    const publishedDate = await fakeApi.getPublishedDate();

    this.setNotePublicStatus(noteId, true);
    this.setNotePublishedDate(noteId, publishedDate.toLocaleTimeString());
    this.setMetadataUpdating(false);
  }

  async unpublishNote(noteId) {
    this.setMetadataUpdating(true);

    await fakeApi.setPublicStatus(false);

    this.setNotePublicStatus(noteId, false);
    this.setMetadataUpdating(false);
  }
}

export default NotesMetadataStore;
