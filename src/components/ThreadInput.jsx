import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function ThreadInput({ addThread }) {
  const [title, handleTitleChanged, setTitle] = useInput("");
  const [category, handleCategoryChanged, setCategory] = useInput("");
  const [content, handleContentChanged, setContent] = useInput("");

  const addthread = () => {
    if (title.trim() && content.trim()) {
      addThread();
      setTitle("");
      setContent("");
      setCategory("");
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChanged} />
      <input type="text" value={category} onChange={handleCategoryChanged} />
      <textarea value={content} onChange={handleContentChanged} />
      <button type="submit" onClick={addthread}>
        Publish
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
