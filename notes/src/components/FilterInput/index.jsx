import { TextField } from "@mui/material";

function FilterInput({ filter, onChange, noteCount }) {
  return (
    <TextField
      className="notes-list__input"
      type="search"
      size="small"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
      placeholder={`Filter ${noteCount} note${noteCount === 1 ? "" : "s"}`}
    />
  );
}
export default FilterInput;
