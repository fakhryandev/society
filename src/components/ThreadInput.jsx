import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function ThreadInput({ addThread }) {
  const [title, handleTitleChanged, setTitle] = useInput("");
  const [category, handleCategoryChanged, setCategory] = useInput("");
  const [content, handleContentChanged, setContent] = useInput("");

  const handleSubmitThread = (e) => {
    if (title.trim() && content.trim()) {
      e.preventDefault();
      addThread(title, content, category);
      setTitle("");
      setContent("");
      setCategory("");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitThread}>
      <div className="form-control">
        <textarea
          placeholder="Title"
          value={title}
          onChange={handleTitleChanged}
          className="bg-amber-50 textarea textarea-bordered h-20 text-3xl font-bold"
        />
      </div>
      <div className="form-control w-full">
        <input
          id="title"
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategoryChanged}
          className="bg-amber-50 input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <textarea
          className="bg-amber-50 textarea textarea-bordered h-24"
          placeholder="Content"
          value={content}
          onChange={handleContentChanged}
        />
      </div>
      <button
        className="btn btn-info normal-case text-white font-bold"
        type="submit"
      >
        Publish
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
