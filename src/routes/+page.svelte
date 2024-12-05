<script lang="ts">
  import '$lib/fonts.css';
  import jobs from '$lib/jobs';
  import Zrgqr2 from './zrgqr.svg?component';

  const formatDate = (yearMonth: string) => {
    return new Date(
      Number(yearMonth.substring(0, 4)),
      Number(yearMonth.substring(5)) - 1,
      1
    ).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
</script>

<div class="responsiveNotice">
  Resize the browser or rotate your device!<br />This résumé is responsive!
</div>
<div class="outerContainer">
  <header>
    <h1 class="resumeName">
      <span class="word">Zev</span> <span class="word">Goldberg</span>
      <span class="resumeTitle">Senior Software Engineer</span>
    </h1>
    <ul class="subheader">
      <li>
        <a href="tel:7738009384" aria-label="7 7 3. 8 0 0. Z E V G.">(773) 800-ZEVG</a>
      </li>
      <li>Evanston, IL 60203</li>
      <li aria-label="zev goldberg at G mail dot com">
        zevgoldberg@<span class="hidden">[remove this]</span>gmail.com
      </li>
      <li><a href="//zevgoldberg.com/resume-doc">Google Doc</a></li>
    </ul>
  </header>

  <main>
    <section class="resumeSection column" id="summary">
      <h2 class="sectionHeader">Summary</h2>
      <p>
        Thoughtful, thorough and inclusive. With more than 25 years of experience, I am looking to
        be a good citizen on the internet, building the next generation of web applications. I seek
        understanding of end-users, stakeholders, UX and Product teams to gather consensus to build
        interfaces that are perceivable, operable, understandable and robust. Noisemaker and
        Noisemaker-maker. Guitar FX Mad Scientist.
      </p>
    </section>
    <section class="resumeSection column" id="specialties">
      <h2 class="sectionHeader">Specialties</h2>
      <p>
        HTML, CSS, JavaScript, component frameworks, REST API, Single Page Applications, React.js,
        Next.js, Svelte, Node.js, Jest, Storybook, Chromatic, Universal Design, UX/UI,
        accessibility, responsive layout, guitar FX
      </p>
    </section>

    <section class="resumeSection" id="experience">
      <h2 class="sectionHeader">Experience</h2>
      <ul class="jobs">
        {#each jobs as { id, display, url, fullName, city, startMonth, endMonth, title, highlights }}
          {#if display}
            <li class="job column" {id}>
              <h3 class="job_header">
                {#if url}
                  <a href="//{url}" rel="nofollow">{fullName}</a>
                {:else}
                  {fullName}
                {/if}
              </h3>
              <div class="job_city">{city}</div>
              <div class="job_dates">
                {formatDate(startMonth)}<span class="visuallyHidden">
                  through
                </span>&ndash;{formatDate(endMonth)}
              </div>
              <div class="job_title">{title}</div>
              <ul class="job_highlights">
                {#each highlights as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
            </li>
          {/if}
        {/each}
      </ul>
    </section>

    <section class="resumeSection" id="education">
      <h2 class="sectionHeader">Education</h2>

      <div class="school" id="ccc">
        <div class="tableader">
          <h3 class="school_header tableader_item">Columbia College Chicago</h3>
          <div class="school_city tableader_item">Chicago, IL</div>
        </div>
        <div class="tableader">
          <div class="school_concentration tableader_item">Computer Animation and Film</div>
          <div class="school_dates tableader_item">
            1994<span class="visuallyHidden"> through </span>&ndash;1998
          </div>
        </div>
      </div>

      <div class="school" id="uic">
        <div class="tableader">
          <h3 class="school_header tableader_item">University of Illinois at Chicago</h3>
          <div class="school_city tableader_item">Chicago, IL</div>
        </div>
        <div class="tableader">
          <div class="school_concentration tableader_item">Computer Science</div>
          <div class="school_dates tableader_item">
            1993<span class="visuallyHidden"> through </span>&ndash;1994
          </div>
        </div>
      </div>
    </section>

    <div class="qrContainer">
      <Zrgqr2 alt="zevgoldberg.com QR" />Scan this QR code to see this page on your phone
    </div>
  </main>
</div>

<style>
  :global(body) {
    line-height: 1.4;
    font-family: 'HeuristicaRegular', Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 12px;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #2525e3;
  }
  a:visited {
    color: #681091;
  }
  a:hover {
    text-decoration: underline;
  }

  .hidden {
    width: 0;
    display: inline-block;
    visibility: hidden;
    margin-top: -100em;
  }

  .visuallyHidden {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
  }

  .responsiveNotice {
    width: 30em;
    padding: 0.5em 0 0.7em;
    position: fixed;
    left: -9.5em;
    bottom: 3.5em;
    font-family: 'Yanone Kaffeesatz', 'Trebuchet MS', Geneva, Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.03em;
    text-align: center;
    background-color: #fcf50a;
    z-index: 2;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);

    opacity: 0;
    -webkit-animation: fadeOut 15s ease;
    -moz-animation: fadeOut 15s ease;
    -o-animation: fadeOut 15s ease;
    animation: fadeOut 15s ease;
  }
  @-webkit-keyframes fadeOut {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes fadeOut {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-o-keyframes fadeOut {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .outerContainer {
    padding: 1em;
    margin: 0 auto;
    background-color: #fbfcfc;
    text-align: left;
  }

  main {
    display: flex;
    flex-wrap: wrap;
  }

  .resumeName {
    font-family: 'Yanone Kaffeesatz', 'Trebuchet MS', Geneva, Arial, Helvetica, sans-serif;
    margin: 0;
    font-size: 3.4em;
    line-height: 1.2em;
  }
  .resumeName .word {
    display: inline-block;
  }
  .resumeName .word::first-letter {
    font-size: 1.2em;
  }
  .resumeTitle {
    display: block;
    color: #aaa;
    text-indent: 1em;
    font-size: 0.75em;
  }

  .subheader {
    font-size: 12px;
    text-align: right;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 2em;
  }

  .sectionHeader {
    border-top: 2px solid black;
    border-bottom: 1px solid gray;
    font-family: 'Yanone Kaffeesatz', 'Trebuchet MS', Geneva, Arial, Helvetica, sans-serif;
    font-size: 2em;
    font-weight: normal;
    letter-spacing: 2px;
    font-variant: small-caps;
  }

  .jobs {
    padding: 0;
    list-style: none;
    margin: 0;
  }

  .job,
  .school {
    margin: 0 0 1em;
    padding: 0;
    list-style: none;
  }

  .job_header {
    font-size: 1.5em;
  }
  .job_header,
  .school_header {
    margin: 0;
  }
  .job_city,
  .job_dates,
  .school_city,
  .school_dates {
    color: #666;
  }
  .job_title,
  .school_concentration {
    font-style: oblique;
  }
  .job_highlights {
    padding-left: 1em;
    margin-bottom: 2em;
    list-style: disc;
  }
  .job_highlights li {
    margin-bottom: 0.5em;
  }

  .qrContainer {
    display: none;
  }

  #education {
    flex-basis: 100%;
  }

  @media (min-width: 450px) {
    :global(body) {
      font-size: 16px;
    }
  }
  @media (min-width: 740px) {
    :global(body) {
      padding: 1.5% 0;
      /* http://www.colorzilla.com/gradient-editor/#ffffff+0,ddd8ca+100;Custom */
      background: #ddd8ca;
      background: linear-gradient(to bottom, #fff 0%, #ddd8ca 100%) fixed;
      background-position: fixed;
    }

    .outerContainer {
      width: 670px;
      padding: 2em;
      box-shadow: 4px 4px 16px #666;
      border: 1px solid #ddd;
    }
    .resumeTitle {
      display: inline;
      margin: 0;
    }
    .column {
      display: inline-block;
      width: 48%;
      vertical-align: top;
    }
    .column:nth-of-type(2n) {
      margin-left: 4%;
    }
    .job_city {
      float: right;
    }
    .job_city,
    .job_dates,
    .job_title {
      font-size: 0.85em;
    }

    .tableader {
      border-bottom: 2px dotted gray;
      text-align: right;
    }
    .tableader_item {
      display: inline-block;
      position: relative;
      top: 0.45em;
      padding-right: 0.5em;
      font-size: 1em;
      background-color: #fbfcfc;
    }
    .tableader_item + .tableader_item {
      padding: 0 0 0 0.5em;
    }
    .school_header,
    .school_concentration {
      float: left;
    }

    .qrContainer {
      display: flex;
      flex-basis: 100%;
      flex-direction: column;
      align-items: center;
      gap: 0.5em;
      margin-top: 1em;
    }
  }
</style>
