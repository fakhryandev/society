import PropTypes from "prop-types";
import { useParams } from "react-router";
import useInput from "../../hooks/useInput";

function CommentInput({ authUser, onAddComment }) {
  const { id: commentTo } = useParams();

  const [content, handleContentChange, setContent] = useInput("");
  const handleSubmitComment = (e) => {
    if (content.trim()) {
      e.preventDefault();
      onAddComment(content, commentTo);
      setContent("");
    }
  };

  return (
    <div className="card-body py-4">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleSubmitComment(e)}
      >
        <div className="form-control w-full">
          <label htmlFor="title" className="label">
            <span className="label-text">{authUser.name} : </span>
          </label>
          <input
            id="title"
            type="text"
            placeholder="Comment here"
            value={content}
            onChange={handleContentChange}
            className="bg-amber-50 input input-bordered"
          />
        </div>
        <button
          className="btn btn-sm btn-info normal-case text-white w-20"
          type="submit"
        >
          Comment
        </button>
      </form>
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
};

CommentInput.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  onAddComment: PropTypes.func.isRequired,
};

export default CommentInput;
