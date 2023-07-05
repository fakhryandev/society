function LeftSide() {
  return (
    <aside className="hidden lg:block lg:col-span-2 sticky top-20 p-4 h-25">
      <ul className="flex flex-col gap-3">
        <li>
          <span className="block p-2 hover:bg-neutral-200 rounded-md bg-neutral-200">
            Home
          </span>
        </li>
        <li>
          <span className="block p-2 hover:bg-neutral-200 rounded-md">
            Leaderboard
          </span>
        </li>
      </ul>
    </aside>
  );
}

export default LeftSide;
