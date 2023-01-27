function CameraReadyInstructions() {
  return (
    <div className="description">
      <h1>Camera Ready Instructions</h1>
      <p>
        Camera ready submissions should be up to{" "}
        <span style={{ fontWeight: 600 }}>
          8 pages long (not including references)
        </span>{" "}
        following the guidelines of this year's call for papers.
      </p>
      <p>
        For IUI 2023, a summary of the workshops and tutorials will be made
        available in the ACM Digital Library, and accepted workshop submissions
        will also be published separately in a joint workshop proceedings, which
        will be available through CEUR or a similar platform. You can find an
        example of this format here:{" "}
        <a href="https://ceur-ws.org/Vol-2903/">CEUR Example</a>
        <br />
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
      <h1>Paper Metadata</h1>
      <ol>
        <li>
          Double-check that your title and abstract fields in the submission
          page match the text in your paper.
        </li>
        <li>
          Be sure that the title is in Initial Caps. Initial Caps Meaning First
          Letter of the Main Words Should be Made Capital Letters. Capitalize
          the First Letter of Main Words in the Title (Most Nouns), except a,
          an, the, conjunctions (and, but, or, for, …), and prepositions (of,
          to, in, on, …){" "}
        </li>
        <li>
          Double-check that the authors' names, affiliations, and emails are in
          the paper.
        </li>
      </ol>
      <h1>Accessibility Guidelines</h1>
      <p>
        While working on your final document, please keep the following in mind:
      </p>
      <ol>
        <li>
          Published papers must follow the accessibility guidelines presented by
          ACM on the ACM Templates page.{" "}
        </li>
        <li>
          All images and figures should have text descriptions (“alt text”)
          <ol type="a">
            <li>
              ACM provides general guidance on creating and adding figure
              descriptions on the {" "} <br/>
              <a href="https://www.acm.org/publications/taps/describing-figures/">
                Describing Figures for ACM Publications page
              </a>
            </li>
            <li>
              You may also reference the {" "}
              <a href="https://www.sigaccess.org/welcome-to-sigaccess/resources/describing-figures/">
                SIGACCESS Guide on Describing Figures
              </a>
              {" "} for additional suggestions regarding figure descriptions.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}
export default CameraReadyInstructions;
