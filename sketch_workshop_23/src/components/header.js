function Header({ currentPage, pageHelper }) {
  const options = ["Home Page", "Call for papers", "Program", "Organizers"];
  let content = options.map((opt) => (
    <li>
      <a
        id={currentPage === opt ? "current-page" : ""}
        style={currentPage === opt ? { pointerEvents: "none" } : null}
        onClick={() => pageHelper(opt)}
      >
        {opt}
      </a>
    </li>
  ));

  return (
    <div className="header">
      <div>
        <p>IUI 2023 Workshop on Sketch Recognition (SketchRec'23)</p>
      </div>
      <ul>{content}</ul>
    </div>
  );
}

export default Header;
