import { observer } from "mobx-react-lite";
import "./index.css";

function PublishingTo({ publishingTarget, onPublishingTargetChange }) {
  return (
    <>
      Publishing to: {publishingTarget}{" "}
      <button
        className="publishing-to__button"
        onClick={() => {
          const newTarget = prompt("New target?");
          onPublishingTargetChange(newTarget);
        }}
      >
        (edit)
      </button>
    </>
  );
}

export default observer(PublishingTo);
