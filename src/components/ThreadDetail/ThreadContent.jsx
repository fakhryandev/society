import PropTypes from "prop-types";
import parse from "html-react-parser";
import postedAt from "../../utils";

function ThreadContent({ title, body, category, createdAt, owner }) {
  return (
    <article className="card bg-white mb-2 shadow-sm px-8 py-4">
      <h1 className="text-4xl leading-normal font-bold">{title}</h1>
      <div className="flex mt-5">
        <img
          className="w-8 h-8 rounded-full mr-4"
          src={owner.avatar}
          alt={owner.name}
        />
        <div>
          <span className="block text-black font-medium text-sm">
            {owner.name}
          </span>
          <span className="block text-neutral-500 text-xs">
            {postedAt(createdAt)}
          </span>
        </div>
      </div>
      <div className="pt-4">{parse(body)}</div>
      <p className="pt-4 font-bold">{`#${category}`}</p>
    </article>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadDetailShape = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

export { threadDetailShape };

ThreadContent.propTypes = {
  ...threadDetailShape,
};

export default ThreadContent;
