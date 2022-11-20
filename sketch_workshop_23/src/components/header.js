function Header({ currentPage, pageHelper }) {
  const options = ["Home Page", "Call for papers", "Program", "Organizers"];
  let content = options.map((opt) => (
    <li>
      {" "}
      <a
        id={currentPage == opt ? "current-page" : ""}
        onClick={() => pageHelper(opt)}
      >
        {opt}
      </a>
    </li>
  ));

  return (
    <div className="header">
      <div>
        <p>SKETCH'23</p>
      </div>
      <ul>
        {content}

        {/* <li>
          <a id="current-page">Home Page</a>
        </li>
        <li>
          <a href="call-for-papers.html">Call for papers</a>
        </li>
        <li>
          <a href="program.html">Program</a>
        </li>
        <li>
          <a href="organizers.html">Organizers</a>
        </li> */}
      </ul>
    </div>
  );
}

export default Header;
