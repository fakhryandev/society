import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveLeaderboard } from "../states/leaderboard/action";
import LeaderboardList from "../components/Leaderboard/LeaderboardList";

function LeaderboardPage() {
  const { leaderboard = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score);

  return <LeaderboardList leaderboard={sortedLeaderboard} />;
}

export default LeaderboardPage;
