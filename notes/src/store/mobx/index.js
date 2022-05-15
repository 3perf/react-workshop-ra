import { makeAutoObservable } from "mobx";
import NoteMetadataStore from "./noteMetadata";
import StatusBarStore from "./statusBar";

class RootStore {
  statusBar = new StatusBarStore();
  noteMetadata = new NoteMetadataStore();

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
