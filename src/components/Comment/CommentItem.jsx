import PropTypes from "prop-types";
import parse from "html-react-parser";
import postedAt from "../../utils";

function CommentItem({ comment }) {
  return (
    <div className="flex mb-2 mt-8" key={comment.id}>
      <div className="p-2">
        <img
          className="w-8 h-8 rounded-full"
          src={comment.owner.avatar}
          alt={comment.owner.name}
        />
      </div>
      <div className="flex-1 p2">
        <div className="bg-amber-50 rounded-md border p-4 border-amber-100 shadow-lg">
          <div className="mb-4">
            <span className="font-bold">{comment.owner.name}</span>
            <span className="text-neutral-500 pl-2">
              {postedAt(comment.createdAt)}
            </span>
          </div>
          <div>{parse(comment.content)}</div>
        </div>
      </div>
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

CommentItem.propTypes = {
  comment: PropTypes.shape(commentShape).isRequired,
};

export { commentShape };

export default CommentItem;
