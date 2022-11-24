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
        Paper submissions should be up to <span style={{fontWeight: 600}}>8 pages long (not including references)</span> following the guidelines
        of this year's call for papers. Submissions must be original and
        relevant to the workshop themes listed above. Relevant types of
        submissions include but are not limited to position papers, surveys of
        the topic area, and papers that describe work-in-progress research
        projects. Papers will be reviewed in a single-blind process.
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
      
      <p>Submission site: <a href="https://easychair.org/my/conference?conf=sketchrec23#">EasyChair</a></p>
      <p>
        If you have any further questions please contact the workshop organizers
        at{" "}
        <a href="mailto:sketchworkshop2023@gmail.com">
          sketchworkshop2023@gmail.com
        </a>
      </p>
    </div>
  );
}
export default CallForPapers;
