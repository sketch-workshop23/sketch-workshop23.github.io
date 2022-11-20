function Header({ currentPage, pageHelper }) {
  const options = ["Home Page", "Call for papers", "Program", "Organizers"];
  let content = options.map((opt) => (
    <li>
      <a
        id={currentPage === opt ? "current-page" : ""}
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
      <ul>{content}</ul>
    </div>
  );
}

export default Header;
