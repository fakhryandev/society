import PropTypes from "prop-types";

function LeaderboardItem({ name, score }) {
  return (
    <p>
      {name}
      {score}
    </p>
  );
}

LeaderboardItem.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
