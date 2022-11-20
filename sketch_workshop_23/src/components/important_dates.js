function ImportantDates() {
  const deadlines = [
    {
      name: "Paper Submission",
      deadline: new Date("2023-01-02T00:00:00-12:00"),
    },
    {
      name: "Acceptance Notification",
      deadline: new Date("2023-01-02T00:00:00-12:00"),
    },
    {
      name: "Camera-Ready Version",
      deadline: new Date("2023-01-02T00:00:00-12:00"),
    },
    { name: "Workshop", deadline: new Date("2023-03-27T23:59:59-12:00") },
  ];

  const formatter = new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
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
