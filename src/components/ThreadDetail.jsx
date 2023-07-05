import PropTypes from "prop-types";
import parse from "html-react-parser";
import postedAt from "../utils";

function ThreadDetail({ title, body, category, createdAt, owner, comments }) {
  return (
    <>
      <article className="bg-white border border-neutral-200 rounded-md mb-2 shadow-sm p-8">
        <div className="flex">
          <img
            className="w-8 h-8 rounded-full mr-4"
            src={owner.avatar}
            alt={owner.name}
          />
          <div>
            <span className="block font-medium text-sm">{owner.name}</span>
            <span className="block text-neutral-500 text-xs">
              {postedAt(createdAt)}
            </span>
          </div>
        </div>
        <div className="p-y">
          <h1 className="text-4xl leading-normal font-bold">{title}</h1>
          <div className="pt-4">{parse(body)}</div>
          <p className="pt-4 font-bold">{`#${category}`}</p>
        </div>
      </article>
      <h2 className="text-xl font-bold py-4 mt">{comments.length} Komentar</h2>
      <div className="bg-white border border-neutral-200 rounded-md mb-2 p-8">
        {comments.map((comment) => (
          <div className="flex mb-2" key={comment.id}>
            <div className="p-2">
              <img
                className="w-8 h-8 rounded-full"
                src={comment.owner.avatar}
                alt={comment.owner.name}
              />
            </div>
            <div className="flex-1 p2">
              <div className="rounded-md border p-4 border-neutral-300">
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
        ))}
        {/* <div className="flex mb-2">
          <div className="p-2">
            <img className="w-8 h-8 rounded-full" />
          </div>
          <form ></form>
        </div> */}
      </div>
    </>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

export default ThreadDetail;
