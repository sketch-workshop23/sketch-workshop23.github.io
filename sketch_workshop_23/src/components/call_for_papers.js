function CallForPapers() {
  return (
    <div className="description">
      <h1>Call for Papers</h1>
      <p>
        Sketch recognition is the interpretation of hand-drawn diagrams, and
        seeks to understand the users’ intent while allowing them to draw
        unconstrained diagrams. Sketch recognition research has been on-going
        for approximately half a century, and has experienced iterative advances
        due to the difficulty of the problem. As pen- and touch-capable devices
        such as smartphones, tablets, touch- driven monitors, and large
        touchscreen devices have become ubiquitous, and as emergent technologies
        such as virtual and augmented reality-driven computing technologies are
        becoming more advanced, sketch recognition-related research remains an
        open field for researchers to explore in approaching continuing
        interaction and recognition challenges with these technologies.
      </p>

      <p>
        The workshop aims to share and discuss state-of-the-art innovations and
        challenges in IUI research topics that relate to sketch interactions and
        recognition. We especially focus on highlighting research contributions
        and engaging in healthy dialogue that intersect topics pertaining to
        sketch recognition user interfaces and techniques.
      </p>
      <h1>Topics</h1>
      <p>Possible paper topics include but are not limited to:</p>
      <ul>
        <li>Sketch recognition algorithms</li>
        <li>Sketch recognition applications</li>
        <li>Comparisons between pen and touch input</li>
        <li>User Interface issues</li>
        <li>User studies</li>
        <li>Multimodal interfaces that include sketch recognition</li>
        <li>Editing and display concerns in sketch recognition applications</li>
        <li>Algorithm comparisons</li>
      </ul>
      <h1>Paper Submission</h1>
      <p>
        Paper submissions should be 4-10 pages following the guidelines of this
        year's call for papers.
      </p>
      <p>
        Papers should be formatted in the new ACM single-column format,
        following the official templates:
      </p>
      <ul>
        <li>
          <a href="https://authors.acm.org/proceedings/production-information/taps-production-workflow">
            LaTeX template
          </a>
          , using the following command:{" "}
          <span className="latex-code">
            \documentclass[manuscript, review]
            {`{acmart}`};
          </span>
        </li>
        <li>
          <a href="https://authors.acm.org/proceedings/production-information/taps-production-workflow">
            Word template.
          </a>
        </li>
      </ul>
      <p>Submission site: TBD</p>
      <p>Papers will be reviewed in a single-blind process.</p>
    </div>
  );
}
export default CallForPapers;
