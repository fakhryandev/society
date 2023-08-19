import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { asyncAddThread } from "../states/threads/action";
import ThreadInput from "../components/ThreadInput";
import { asyncPreloadProcess } from "../states/isPreload/action";

function CreatePage() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (!authUser) {
    return navigate("/login");
  }

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <section className="card bg-white shadow-md px-8 py-10">
      <ThreadInput addThread={onAddThread} />
    </section>
  );
}

export default CreatePage;
