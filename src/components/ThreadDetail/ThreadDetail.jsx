import PropTypes from "prop-types";
import ThreadContent, { threadDetailShape } from "./ThreadContent";
import ThreadComments from "./ThreadComments";
import { commentShape } from "../Comment/CommentItem";
// import { Link } from "react-router-dom";
// import useInput from "../hooks/useInput";

function ThreadDetail({ threadDetail }) {
  const { title, body, category, createdAt, owner, comments } = threadDetail;
  // const [content, handleContentChange, setContent] = useInput("");

  // const handleSubmitComment = (e) => {
  //   if (content.trim()) {
  //     e.preventDefault();
  //     addComment(content, id);
  //     setContent("");
  //   }
  // };

  return (
    <>
      <ThreadContent
        title={title}
        body={body}
        category={category}
        createdAt={createdAt}
        owner={owner}
      />
      <h2 className="text-xl font-bold py-4 px-6 mt">
        {threadDetail.comments.length} Komentar
      </h2>
      <ThreadComments comments={comments} />
    </>
  );
}

const threadShape = {
  ...threadDetailShape,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

ThreadDetail.propTypes = {
  threadDetail: PropTypes.shape(threadShape).isRequired,
};

export default ThreadDetail;
