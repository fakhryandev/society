import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CommentItem, { commentShape } from "../Comment/CommentItem";
import LoginCard from "../Comment/LoginCard";
import { asyncPreloadProcess } from "../../states/isPreload/action";
import CommentInput from "../Comment/CommentInput";

function ThreadComments({ comments }) {
  const { isPreload = false, authUser = null } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <div className="card mb-10 p-8 bg-white h-fit">
      <div className="card border border-neutral-200 shadow-xl">
        {authUser ? <CommentInput authUser={authUser} /> : <LoginCard />}
      </div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

ThreadComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

export default ThreadComments;
