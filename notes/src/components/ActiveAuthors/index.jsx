import { Avatar, AvatarGroup } from "@mui/material";
import { useSelector } from "react-redux";
import avatar1 from "./avatar1.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.jpg";

function ActiveAuthors() {
  const activeThisMonth = useSelector((state) =>
    state.users.filter(
      (i) =>
        new Date(i.lastActiveDate).getFullYear() === 2023 &&
        new Date(i.lastActiveDate).getMonth() === 0
    )
  );

  return (
    <div className="primary-pane__authors">
      <div className="primary-pane__authors-last-active">
        {activeThisMonth.length} users active this month:{" "}
        {activeThisMonth.map((i) => i.name).join(", ")}
      </div>
      <AvatarGroup max={2}>
        <Avatar src={avatar1} />
        <Avatar src={avatar2} />
        <Avatar src={avatar3} />
      </AvatarGroup>
    </div>
  );
}

export default ActiveAuthors;
