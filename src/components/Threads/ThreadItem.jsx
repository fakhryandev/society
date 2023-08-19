import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { AiOutlineComment } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import postedAt from "../../utils";

function ThreadItem({ id, title, category, createdAt, owner, totalComments }) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/thread/${id}`);
    }
  };

  const onLikeClick = (event) => {
    console.log(event);
  };

  const onDislikeClick = (event) => {
    console.log(event);
  };

  return (
    <div className="card bg-white rounded-lg mb-2 p-4 shadow-md">
      <div className="flex">
        <img
          className="w-8 h-8 rounded-full mr-4"
          src={owner.avatar}
          alt={owner.name}
        />
        <div>
          <span className="block font-medium text-sm text-black">
            {owner.name}
          </span>
          <span className="block text-neutral-400 text-xs">
            {postedAt(createdAt)}
          </span>
        </div>
      </div>
      <div className="pl-12 pt-2">
        <span
          role="button"
          tabIndex={0}
          onClick={onThreadClick}
          onKeyDown={onThreadPress}
          className="text-xl text-black font-bold block"
        >
          {title}
        </span>
        <span className="mt-4 block text-black">{`#${category}`}</span>
        <div className="mt-2 flex gap-3">
          <button
            onClick={onLikeClick}
            type="button"
            className="flex gap-1 cursor-pointer"
          >
            <BiLike />
            <span className="block pt-1 text-xs">{totalComments}</span>
          </button>
          <button onClick={onDislikeClick} type="button" className="flex gap-1">
            <BiDislike />
            <span className="block pt-1 text-xs">{totalComments}</span>
          </button>
          <div className="flex gap-1">
            <AiOutlineComment />
            <span className="block pt-1 text-xs">{totalComments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
