function ImportantDates() {
  const deadlines = [
    { name: "Paper Submission", deadline: new Date("January 1, 2023") },
    { name: "Acceptance Notification", deadline: new Date("January 1, 2023") },
    { name: "Camera-Ready Version", deadline: new Date("January 1, 2023") },
    { name: "Workshop", deadline: new Date("March 27, 2023") },
  ];

  const content = deadlines.map((ele) => {
    return (
      <p id={ele.name}>
        <span className="date-label">{ele.name}:</span>{" "}
        {ele.deadline.toDateString()}
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
