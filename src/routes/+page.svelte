<script lang="ts">
  import type { Action } from 'svelte/action';
  import jobs from '$lib/jobs';
  import summary from '$lib/summary';
  import Zrgqr from './zrgqr.svg?component';

  const formatDate = (yearMonth: string) => {
    return new Date(
      Number(yearMonth.substring(0, 4)),
      Number(yearMonth.substring(5)) - 1,
      1
    ).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const mailto: Action = (node) => {
    node.setAttribute('href', 'mailto:zevgoldberg@gmail.com');
  };
</script>

<svelte:head>
  <title>Zev Goldberg's Résumé: Senior Software Engineer | Guitar FX Mad Scientist</title>
  <meta
    name="description"
    content="{summary}"
  />
</svelte:head>

<div class="responsiveNotice">
  Resize the browser or rotate your device!<br />This résumé is responsive!
</div>
<div class="outerContainer">
  <header>
    <h1 class="resumeName">
      <span class="word">Zev</span> <span class="word">Goldberg</span>
      <span class="resumeTitle"
        ><span>Senior Software Engineer</span><span>Guitar FX Mad Scientist</span></span
      >
    </h1>
    <ul class="subheader">
      <li>
        <a href="tel:7738009384" aria-label="7 7 3. 8 0 0. Z E V G.">(773) 800-ZEVG</a>
      </li>
      <li aria-label="zev goldberg at G mail dot com">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" use:mailto>zevgoldberg@<span aria-hidden="true">[remove this]</span>gmail.com</a
        >
      </li>
      <li>Evanston, IL 60203</li>
      <li><a href="../Zev Goldberg - Resume 20241205_03.pdf">PDF Format</a></li>
    </ul>
  </header>

  <main>
    <section class="resumeSection column" id="summary">
      <h2 class="sectionHeader">Summary</h2>
      <p>{summary}</p>
    </section>
    <section class="resumeSection column" id="specialties">
      <h2 class="sectionHeader">Specialties</h2>
      <p>
        HTML, CSS, JavaScript, Node.js, component frameworks, REST API, Single Page Applications,
        React.js, Next.js, Svelte, Typescript, SCSS/Sass, Jest, Storybook, Chromatic, Webpack,
        Universal Design, UX/UI, accessibility, responsive layout, guitar FX, and skronky bloopy
        noises.
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
                  <a href="//{url}" rel="nofollow">{fullName.toUpperCase()}</a>
                {:else}
                  {fullName.toUpperCase()}
                {/if}
              </h3>
              <div class="job_title">{title.toUpperCase()}</div>
              <div class="job_dates">
                {formatDate(startMonth).toUpperCase()}<span class="visuallyHidden">
                  through
                </span>&ndash;{formatDate(endMonth).toUpperCase()}
              </div>
              <div class="job_city">{city.toUpperCase()}</div>
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
      <Zrgqr alt="zevgoldberg.com QR" />Scan this QR code to see this page on your phone
    </div>
  </main>
</div>

<style>
  :global(body) {
    line-height: 1.4;
    font-family: 'Merriweather', serif;
    font-size: 12px;
    text-align: center;
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

  [aria-hidden] {
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
    left: -8.5em;
    bottom: 4.5em;
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    font-size: 1.2em;
    letter-spacing: 0.03em;
    text-align: center;
    background-color: #fcf50a;
    z-index: 2;
    transform: rotate(45deg);
    opacity: 0;
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
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    margin: 0;
    font-size: 3em; /* 36/12px */
    line-height: 1.2;
    font-weight: 800;
  }
  .resumeName .word {
    display: inline-block;

    &::first-letter {
      font-size: 1.30555556em; /* 47/36 */
    }
  }

  .resumeTitle {
    color: #aaa;
    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 0.43055556em; /* 15.5/36px */
    line-height: 2;

    span {
      display: block;
      line-height: 1.2;
      text-align: right;
    }
  }

  .subheader {
    font-family: 'Merriweather', serif;
    font-weight: 500;
    font-size: 0.91666667em; /* 11/12px */
    text-align: right;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sectionHeader {
    border-top: 2px solid black;
    border-bottom: 1px solid gray;
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    font-size: 1.1875em; /* 19/16px */
    font-weight: 700;
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
    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 1.25em; /* 15/12px */
  }
  .job_header,
  .school_header {
    margin: 0.25em 0;
  }
  .job_city,
  .job_dates,
  .school_city,
  .school_dates {
    color: #666;
    font-weight: 300;
    line-height: 2;
  }
  .job_title,
  .school_concentration {
    font-style: oblique;
  }
  .job_highlights {
    padding-left: 1em;
    margin: 1em 0;
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

  @media (width >= 450px) {
    :global(body) {
      font-size: 16px;
    }
  }

  @media (width >= 740px) {
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
      display: block;

      span {
        display: inline;

        &:not(:first-child):before {
          content: '|';
          position: relative;
          margin: 0 0.15em;
        }
      }
    }
    .subheader {
      display: flex;
      flex-wrap: nowrap;
      gap: 1em;

      li {
        white-space: nowrap;

        &:not(:first-child):before {
          content: '|';
          position: relative;
          left: -0.5em;
        }
      }
    }
    .column {
      display: inline-block;
      width: 48%;
      vertical-align: top;
    }
    .column:nth-of-type(2n) {
      margin-left: 4%;
    }
    .job_dates {
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
      top: 0.8em;
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
