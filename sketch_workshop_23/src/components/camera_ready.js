function CameraReadyInstructions() {
  return (
    <div className="description">
      <h1>Submission Instructions</h1>
      <ol>
        <li>
          Before submitting your paper ensure the following:
          <ol type="a">
            {/* <li>
              Ensure your submission complies with the{" "}
              <a href="https://www.acm.org/publications/proceedings-template">
                ACM SIG proceedings templates and formatting.
              </a>
            </li> */}
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
            {/* <li>
              Ensure your paper meets the Accessibility Guidelines specified
              below
            </li> */}
            <li>
              All images and figures should have text descriptions (“alt text”)
              <ol type="i">
                <li>
                  ACM provides general guidance on creating and adding figure
                  descriptions on the{" "}
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
        </li>
        <li>
          Authors should submit the following material as a ZIP file as part of
          their camera ready submission:
          <ol type="a">
            <li>
              A PDF of the final draft of your manuscript in the official
              format. The file should be named “surname_1234.pdf”, replacing
              “surname” as the family name of the first author and “1234” with
              the paper's number on EasyChair (marked by #).
            </li>
            <li>
              A folder containing ALL your source files (e.g., *.tex, *.bib,
              *.sty, and all figures.)
              {/* for Latex Users or the .docx file for Word users). */}
            </li>
          </ol>
        </li>
        <li>
          Authors of accepted submissions have the option of having their
          submissions published separately in a joint workshop proceedings
          through CEUR. You can find an example of this format here:{" "}
          <a href="https://ceur-ws.org/Vol-2903/">CEUR Example</a>
        </li>
      </ol>
      <h1>CEUR Instructions</h1>
      <p>
        <ol>
          <li>
            Camera-ready submissions should be formatted according to the
            <span style={{ fontWeight: 600 }}>
              {" "}
              CEUR template as described in the CEUR submission instructions:{" "}
            </span>
            <a href="http://ceur-ws.org/HOWTOSUBMIT.html">CEUR How To Submit</a>
            .
          </li>
          <li>Please use the two-column format.</li>
          <li>
            Include the following copyright block in your camera-ready
            submission:
            <p style={{ marginLeft: "5%" }}>
              "Copyright © 2023 for this paper by its authors. Use permitted
              under Creative Commons License Attribution 4.0 International (CC
              BY 4.0)."
            </p>
          </li>
          <li>
            Update the ACM reference format to:
            <p style={{ marginLeft: "5%" }}>
              "FirstName Surname, FirstName Surname and FirstName Surname. 2023.
              Insert Your Title Here: Insert Subtitle Here. In Joint Proceedings
              of the ACM IUI 2023 Workshops. Sydney, Australia, N pages."
            </p>
          </li>
          <li>
            Similarly, you should update the page header to: "Joint Proceedings
            of the ACM IUI Workshops 2023, March 2023, Sydney, Australia"
          </li>
          <li>
            Please also fill out the paper release form (author agreement) as
            detailed at <br />{" "}
            <a href="http://ceur-ws.org/HOWTOSUBMIT.html">CEUR How To Submit</a>{" "}
            (under Author Agreement Variants)
            <ol type="a">
              <li>
                For editors: please use Alison Smith-Renner and Paul Taele
              </li>
              <li>
                Please print, sign, and upload your form (digital signature is
                not allowed!)
              </li>
            </ol>
          </li>
        </ol>
      </p>
      <h1> CEUR Tips</h1>
      <p>
        <span style={{ fontWeight: 600 }}>
          Tips for formatting the CEUR template and copyright block in LaTeX:
        </span>{" "}
        </p>
      {/* <h2>
        Tips for formatting the CEUR template and copyright block in LaTeX:
      </h2> */}
      <p>
        First, make sure you are using the CEUR template, as described in the
        CEUR submission instructions:{" "}
        <a href="http://ceur-ws.org/HOWTOSUBMIT.html">CEUR How To Submit</a>. We
        recommend{" "}
        <a href="http://ceur-ws.org/Vol-XXX/CEURART.zip">
          downloading the CEUR template
        </a>{" "}
        and manually adding the <span className="latex-code">ceurart.cls</span>,{" "}
        <span className="latex-code">ceur-ws-logo.pdf</span>, and{" "}
        <span className="latex-code">cc-by.pdf</span> files to your project.
      </p>
      <p>
        Next, set the documentclass in your LaTeX document. Make sure to use the
        two-column format.{" "}
      </p>{" "}
      <p>
        <span className="latex-code">
          %% The first command in your LaTeX source must be the \documentclass
          command. <br />
          %% <br />
          %% Options: <br />
          %% twocolumn : Two column layout. <br />
          %% hf: enable header and footer. <br />
          \documentclass[ <br />
          twocolumn, <br />% hf,
          <br /> ]{`{ceurart}`}
        </span>{" "}
      </p>
      <p>
        {" "}
        Finally, include the following commands after the documentclass to
        display the correct conference & copyright information.{" "}
      </p>
      <p>
        <span className="latex-code">
          %% <br />
          %% Rights management information. <br />
          %% CC-BY is default license.
          <br />
          \copyrightyear{2023}
          <br />
          \copyrightclause
          {`{Copyright for this paper by its authors. Use permitted under Creative Commons License Attribution 4.0 International (CC BY 4.0).}`}
        </span>{" "}
        <br /> <br />
        <span className="latex-code">
          %% <br />
          %% This command is for the conference information \conference
          {`{Joint Proceedings of the ACM IUI Workshops 2023, March 2023, Sydney, Australia}`}
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 600 }}>
          A few tips for using the CEUR template:{" "}
        </span>
      </p>
      {/* <h2>A few tips for using the CEUR template:</h2> */}
      <p>
        {" "}
        <ol>
          <li>
            The{" "}
            <a href="http://ceur-ws.org/Vol-XXX/CEURART.zip">
              latest downloadable version
            </a>{" "}
            of the template is 0.4.0, but there is an Overleaf CEUR template
            that has a slightly older version of 0.3.4. One notable difference
            between the two versions is that in the 0.4.0 version of the
            template, including a Copyright symbol (©) or its textual equivalent
            (e.g. <span className="latex-code">\copyright</span> or{" "}
            <span className="latex-code">\textcopyright</span>) inside the{" "}
            <span className="latex-code">{`\\copyrightclause{}`}</span> causes
            LaTeX to throw unrecoverable errors.{" "}
          </li>
          <li>
            If you are converting your paper from the ACM template, note that
            the format for specifying keywords is different. The ACM template
            uses the <span className="latex-code">{`\\keywords{}`}</span>{" "}
            command, whereas CEUR expects{" "}
            <span className="latex-code">{`\\begin{keywords}`}</span> …{" "}
            <span className="latex-code">{`\\end{keywords}`}</span>. If you use{" "}
            <span className="latex-code">{`\\keywords{}`}</span> with the CEUR template, it will throw unrecoverable
            LaTeX errors.
          </li>{" "}
          <li>
            The way authors are defined in the CEUR template is very different
            than in the ACM template. Check the sample-1col.tex file for an
            example of how to list authors.{" "}
          </li>
        </ol>
      </p>
      <p>Thanks to Justin Weisz from the HAI-GEN workshop for these tips!</p>
      {/* <h1>Camera Ready Instructions</h1>
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
        <a href="https://texdoc.org/serve/acmart.pdf/0">LaTeX documentation</a>{" "}
        and <br />
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
      </p> */}
      {/* <h1>Accessibility Guidelines</h1>
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
      </ol> */}
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
