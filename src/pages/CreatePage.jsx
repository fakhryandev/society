import { useDispatch } from "react-redux";
import { asyncAddThread } from "../states/threads/action";
import ThreadInput from "../components/ThreadInput";

function CreatePage() {
  const dispatch = useDispatch();

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return <ThreadInput addThread={onAddThread} />;
}

export default CreatePage;
