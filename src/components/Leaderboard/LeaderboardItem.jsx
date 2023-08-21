import PropTypes from "prop-types";

function LeaderboardItem({ name, score, index }) {
  return (
    <div
      className={`flex justify-between w-full rounded-md py-1 px-2 ${
        index % 2 === 0 ? "bg-gray-500 text-white" : ""
      }`}
    >
      <span className="text-xl">{name}</span>
      <span className="font-bold">{score}</span>
    </div>
  );
}

LeaderboardItem.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default LeaderboardItem;
