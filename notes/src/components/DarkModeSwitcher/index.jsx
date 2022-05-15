import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import "./index.css";

function DarkModeSwitcher() {
  const { mode, setMode } = useContext(DarkModeContext);

  return (
    <div className="theme-switcher">
      <ToggleButtonGroup
        size="small"
        value={mode}
        exclusive
        onChange={(_e, value) => setMode(value)}
        aria-label="text alignment"
      >
        <ToggleButton value="light">
          <WbSunnyIcon />
        </ToggleButton>
        <ToggleButton value="dark">
          <Brightness2Icon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default DarkModeSwitcher;
