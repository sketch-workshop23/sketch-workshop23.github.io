function ImportantDates() {
  const deadlines = [
    {
      name: "Paper Submission",
      deadline: new Date("2023-01-09T00:00:00-12:00"),
    },
    {
      name: "Acceptance Notification",
      deadline: new Date("2023-02-09T00:00:00-12:00"),
    },
    {
      name: "Camera-Ready Version",
      deadline: new Date("2023-02-16T00:00:00-12:00"),
    },
    { name: "Workshop", deadline: new Date("2023-03-27T00:00:00+11:00") },
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
          {formatter.format(ele.deadline)}
        </span>
      </p>
    );
  });

  return (
    <div className="important-dates">
      <h2>Important Dates</h2>
      {content}
    </div>
  );
}

export default ImportantDates;
