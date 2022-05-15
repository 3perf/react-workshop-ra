import { makeAutoObservable } from "mobx";

class StatusBarStore {
  constructor() {
    makeAutoObservable(this);
  }

  publishingConfig = {
    target: "localhost",
    port: "8080",
    username: "admin",
    password: "NotVery$ecret",
  };

  status = "great, wby?";

  setPublishingTarget = (target) => {
    this.publishingConfig.target = target;
  };
}

export default StatusBarStore;
