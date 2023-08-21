import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import ThreadDetail from "../components/ThreadDetail/ThreadDetail";

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  return <ThreadDetail threadDetail={threadDetail} />;
}

export default DetailPage;
