import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import { asyncPreloadProcess } from "./states/isPreload/action";
import Loading from "./components/Loading";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import LeaderboardPage from "./components/LeaderboardPage";

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <header>
        <Navigation />
      </header>
      <main className="pt-24 min-h-screen bg-neutral-100 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <LeftSide />
            <section className="col-span-12 lg:col-span-7">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/thread/:id" element={<DetailPage />} />
                <Route path="/create-thread" element={<CreatePage />} />
                <Route path="/leadboard" element={<LeaderboardPage />} />
              </Routes>
            </section>
            <RightSide />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
