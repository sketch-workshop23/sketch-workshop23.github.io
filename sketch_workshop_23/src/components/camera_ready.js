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
        Papers should be formatted in the new ACM single-column format,
        following the official templates:
      </p>
      <h2>LaTeX Instructions</h2>
      <p>
        Please use the latest version of the{" "}
        <a href="https://authors.acm.org/proceedings/production-information/overleaf">
          LaTeX template
        </a>{" "}
        to create your submission. You must the “manuscript” option with the{" "}
        <span className="latex-code">
          \documentclass[manuscript]
          {`{acmart}`}
        </span>{" "}
        command to generate the output in the single-column format which is
        required for camera-ready submission. Please see the{" "}
        <a href="https://texdoc.org/serve/acmart.pdf/0">LaTeX documentation</a>
        {" "} and <br />
        <a href="https://www.acm.org/publications/taps/latex-best-practices">
          ACM's LaTeX best practices guide
        </a>{" "}
        for further instructions.
      </p>

      <p>
        Please restrict the use of packages to the{" "}
        <a href="https://authors.acm.org/proceedings/production-information/accepted-latex-packages">
          whitelist of approved LaTeX packages
        </a>
        .
      </p>
      <p>
        Please{" "}
        <span style={{ fontWeight: 600 }}>do not enter the page numbers.</span>{" "}
      </p>

      <h1>Submission Instructions</h1>
      <ol>
        <li>
          Before submitting your paper ensure the following:
          <ol type="a">
            <li>
              Ensure your submission complies with the{" "}
              <a href="https://www.acm.org/publications/proceedings-template">
                ACM SIG proceedings templates and formatting.
              </a>
            </li>
            <li>
              Double-check that your title and abstract fields in the submission
              page match the text in your paper.
            </li>
            <li>
              Be sure that the title is in Initial Caps. Initial Caps Meaning
              First Letter of the Main Words Should be Made Capital Letters.
              Capitalize the First Letter of Main Words in the Title (Most
              Nouns), except a, an, the, conjunctions (and, but, or, for, …),
              and prepositions (of, to, in, on, …)
            </li>
            <li>
              Double-check that the authors' names, affiliations, and emails are
              in the paper.
            </li>
            <li>Review your submission for clarity and typos.</li>
            <li>
              Ensure your paper meets the Accessibility Guidelines specified
              below
            </li>
          </ol>
        </li>
        <li>
          Authors should submit the following material as a ZIP file as part of
          their camera ready submission:
          <ol type="a">
            <li>
              A PDF of the final draft of your manuscript in the official
              format. The file should be named “surname_1234.pdf”, replacing
              “surname” as the family name of the first author and “1234” with
              the paper’s number on EasyChair (marked by #).
            </li>
            <li>
              A folder containing ALL your source files (e.g., *.tex, *.bib,
              *.sty, and all figures for Latex Users or the .docx file for Word
              users).
            </li>
          </ol>
        </li>
        <li>
          Authors of accepted submissions have the option of having their
          submissions published separately in a joint workshop proceedings
          through CEUR. You can find an example of this format here: <br />
          <a href="https://ceur-ws.org/Vol-2903/">CEUR Example</a>
        </li>
      </ol>

      <h1>Accessibility Guidelines</h1>
      <p>
        While working on your final document, please keep the following in mind:
      </p>
      <ol>
        <li>
          Published papers must follow the accessibility guidelines presented by
          ACM on the ACM Templates page.
        </li>
        <li>
          All images and figures should have text descriptions (“alt text”)
          <ol type="a">
            <li>
              ACM provides general guidance on creating and adding figure
              descriptions on the <br />
              <a href="https://www.acm.org/publications/taps/describing-figures/">
                Describing Figures for ACM Publications page
              </a>
            </li>
            <li>
              You may also reference the{" "}
              <a href="https://www.sigaccess.org/welcome-to-sigaccess/resources/describing-figures/">
                SIGACCESS Guide on Describing Figures
              </a>{" "}
              for additional suggestions regarding figure descriptions.
            </li>
          </ol>
        </li>
      </ol>

      <h1>Publication in the Proceedings</h1>
      <p>
        In order to include your paper in the planned workshop proceedings and
        participate in the workshop, at least one of the authors MUST register
        for the main conference. Further, at least one author MUST attend the
        workshop to present the work. Make sure to use your institutional email
        address when registering (the same email address used in your paper).
      </p>
    </div>
  );
}
export default CameraReadyInstructions;
