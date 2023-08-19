import PropTypes from "prop-types";
import ThreadItem, { threadItemShape } from "./ThreadItem";

function ThreadList({ threads }) {
  return (
    <>
      {threads.map((thread) => {
        const { id, title, category, createdAt, owner, totalComments } = thread;
        return (
          <ThreadItem
            key={id}
            id={id}
            title={title}
            category={category}
            createdAt={createdAt}
            owner={owner}
            totalComments={totalComments}
          />
        );
      })}
    </>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
