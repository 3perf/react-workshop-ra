import { observer } from "mobx-react-lite";
import DarkModeInfo from "../DarkModeInfo";
import PublishingTo from "../PublishingTo";

function StatusBar({ store }) {
  return (
    <div>
      <PublishingTo
        publishingTarget={store.publishingConfig.target}
        onPublishingTargetChange={(newTarget) => {
          store.setPublishingTarget(newTarget);
        }}
      />{" "}
      · <DarkModeInfo /> · Status: {store.status}
    </div>
  );
}

export default observer(StatusBar);
