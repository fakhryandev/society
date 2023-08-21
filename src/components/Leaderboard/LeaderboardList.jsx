import PropTypes from "prop-types";
import LeaderboardItem from "./LeaderboardItem";

function LeaderboardList({ leaderboard }) {
  return (
    <article className="card bg-white p-6">
      {leaderboard.map((item, index) => {
        const {
          score,
          user: { id, name },
        } = item;
        return (
          <LeaderboardItem index={index} key={id} name={name} score={score} />
        );
      })}
    </article>
  );
}

const leaderboardUserShape = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(leaderboardUserShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardList.propTypes = {
  leaderboard: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape))
    .isRequired,
};

export default LeaderboardList;
