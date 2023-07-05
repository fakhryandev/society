import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveLeaderboard } from "../states/leaderboard/action";

function LeaderboardPage() {
  const { leaderboard = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score);

  console.log(sortedLeaderboard);
}

export default LeaderboardPage;
