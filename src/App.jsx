import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navigation from "./components/Common/Navigation";
import Loading from "./components/Common/Loading";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import { asyncPreloadProcess } from "./states/isPreload/action";
import LeaderboardPage from "./pages/LeaderboardPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  const { isPreload = false } = useSelector((states) => states);

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
      <header className="bg-white">
        <Navigation />
      </header>
      <main className="bg-amber-50 pt-5 min-h-screen text-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <LeftBar />
            <section className="col-span-12 lg:col-span-7 px-6">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/thread/:id" element={<DetailPage />} />
                <Route path="/create-thread" element={<CreatePage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
              </Routes>
            </section>
            <RightBar />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
