function ImportantDates() {
  const deadlines = [
    {
      name: "Intention to Submit",
      deadline: new Date("2023-01-09T00:00:00-12:00"),
      display_date: "Monday, 9 Jan 2023 AOE",
    },
    {
      name: "Paper Submission Deadline",
      deadline: new Date("2023-01-23T00:00:00-12:00"),
      display_date: "Monday, 23 Jan 2023 AOE",
    },
    {
      name: "Author Notification",
      deadline: new Date("2023-01-29T00:00:00-12:00"),
      display_date: "Sunday, 29 January 2023 AOE",
    },
    {
      name: "Camera-Ready Version",
      deadline: new Date("2023-03-01T00:00:00-12:00"),
      display_date: "Wednesday, 1 Mar 2023 AOE",
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
      <br />
      <p className="submit">
        Submission site:{" "}
        <a href="https://easychair.org/my/conference?conf=sketchrec23#">
          EasyChair
        </a>
      </p>
      <p className="submit">
        Contact:{" "}
        <a href="mailto:sketchworkshop2023@gmail.com">
          sketchworkshop2023@gmail.com
        </a>
      </p>
    </div>
  );
}

export default ImportantDates;
