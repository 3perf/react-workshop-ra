import "./index.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function NoteView({ text }) {
  return (
    <div className="note-view">
      <ReactMarkdown remarkPlugins={[gfm]}>{text}</ReactMarkdown>
    </div>
  );
}
