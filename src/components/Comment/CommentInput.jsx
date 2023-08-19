import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

function CommentInput({ authUser }) {
  console.log(authUser);
  const [content, handleContentChange, setContent] = useInput("");
  const handleSubmitComment = (e) => {
    if (content.trim()) {
      e.preventDefault();
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

// const authUserShape = {

// }

// CommentInput.propTypes = {
//   authUser: PropTypes.arrayOf(PropTypes.shape()).isRequired,
// };

export default CommentInput;
