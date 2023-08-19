import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
} from "../states/threadDetail/action";
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

  const onAddComment = (content, commentTo) => {
    dispatch(asyncAddComment({ content, commentTo }));
  };

  return <ThreadDetail threadDetail={threadDetail} addComment={onAddComment} />;
}

export default DetailPage;
