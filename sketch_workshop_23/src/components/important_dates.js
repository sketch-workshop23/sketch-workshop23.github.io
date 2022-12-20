function ImportantDates() {
  const deadlines = [
    {
      name: "Intention to Submit",
      deadline: new Date("2023-01-09T00:00:00-12:00"),
      display_date: "Monday, 9 Jan 2023 AOE",
    },
    {
      name: "Paper Submission",
      deadline: new Date("2023-01-23T00:00:00-12:00"),
      display_date: "Monday, 23 Jan 2023 AOE",
    },
    {
      name: "Acceptance Notification",
      deadline: new Date("2023-02-23T00:00:00-12:00"),
      display_date: "Thursday, 23 Feb 2023 AOE",
    },
    {
      name: "Camera-Ready Version",
      deadline: new Date("2023-03-02T00:00:00-12:00"),
      display_date: "Thursday, 2 Mar 2023 AOE"
    },
    {
      name: "Workshop",
      deadline: new Date("2023-03-27T00:00:00+11:00"),
      display_date: "Monday, 27 Mar 2023 AOE",
    },
  ];

  const formatter = new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const now = new Date();
  const content = deadlines.map((ele) => {
    return (
      <p id={ele.name}>
        <span className="date-label">{ele.name}:</span>{" "}
        <span
          style={{
            textDecoration: now - ele.deadline > 0 ? "line-through" : "none",
          }}
        >
          {ele.display_date}
        </span>
      </p>
    );
  });

  return (
    <div className="important-dates">
      <h2>Important Dates</h2>
      {content}
      <p className="submit">Submission site: <a href="https://easychair.org/my/conference?conf=sketchrec23#">EasyChair</a></p>
    </div>
  );
}

export default ImportantDates;
