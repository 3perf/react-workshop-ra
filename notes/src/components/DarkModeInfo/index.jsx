import { useContext } from "react";
import Button from "@mui/material/Button";
import { DarkModeContext } from "../DarkModeContext";
import "./index.css";

function DarkModeInfo() {
  const { mode } = useContext(DarkModeContext);

  return (
    <span>
      Mode:{" "}
      <Button
        classes={{ root: "dark-mode-info__button" }}
        size="small"
        onClick={() => alert("Ha, thought you can click me?")}
      >
        {mode}
      </Button>
    </span>
  );
}

export default DarkModeInfo;
