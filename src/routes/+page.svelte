<script lang="ts">
  import type { Action } from 'svelte/action';
  import { browser } from '$app/environment';
  import jobs from '$lib/jobs';
  import summary from '$lib/summary';
  import Zrgqr from './zrgqr.svg?component';
  import IconDark from './icon-dark.svg?component';
  import IconLight from './icon-light.svg?component';

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

  let darkMode = $state(false);
  let fontSizeLevel: 'small' | 'medium' | 'large' = $state('small');

  if (browser) {
    darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
</script>

<svelte:head>
  <title>Zev Goldberg's Résumé: Senior Software Engineer | Guitar FX Mad Scientist</title>
  <meta name="description" content={summary} />
</svelte:head>

<div class="outer-container {fontSizeLevel}">
  <div class="responsive-notice no-print">
    Resize the browser or rotate your device!<br />This résumé is responsive!
  </div>
  <div class="inner-container">
    <div class="controls">
      <label class="theme-switcher no-print">
        <input type="checkbox" class="theme-switcher__dark-mode-toggle" bind:checked={darkMode} />
        {#if darkMode}
          <IconDark />
        {:else}
          <IconLight />
        {/if}
      </label>
      <label class="font-sizer no-print">
        <select class="font-sizer__control" bind:value={fontSizeLevel}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </label>
    </div>
    <header>
      <h1 class="resume-name">
        <span class="resume-name__word">Zev</span> <span class="resume-name__word">Goldberg</span>
        <span class="resume-name__title"
          ><span>Senior Software Engineer</span><span>Guitar FX Mad Scientist</span></span
        >
      </h1>
      <ul class="subheader">
        <li>
          <a href="tel:7738009384" aria-label="7 7 3. 8 0 0. Z E V G.">(773) 800-ZEVG</a>
        </li>
        <li aria-label="zev goldberg at G mail dot com">
          <!-- svelte-ignore a11y_invalid_attribute -->
          <a href="#" use:mailto
            >zevgoldberg@<span aria-hidden="true">[remove this]</span>gmail.com</a
          >
        </li>
        <li>Evanston, IL 60203</li>
        <li class="no-print"><a href="../Zev Goldberg - Resume 20241209.pdf">PDF Format</a></li>
        <li class="no-print"><a href="https://github.com/zrg/resume">Source</a></li>
      </ul>
    </header>

    <main>
      <section class="column" id="summary">
        <h2 class="resume-section-header">Summary</h2>
        <p>{summary}</p>
      </section>
      <section class="column" id="specialties">
        <h2 class="resume-section-header">Specialties</h2>
        <p>
          HTML, CSS, JavaScript, Node.js, component frameworks, REST API, Single Page Applications,
          React.js, Next.js, Svelte, Typescript, SCSS/Sass, Jest, Storybook, Chromatic, Webpack,
          Rollup, Universal Design, UX/UI, accessibility, responsive layout, guitar FX, and skronky
          bloopy noises.
        </p>
      </section>

      <section id="experience">
        <h2 class="resume-section-header">Experience</h2>
        <ul class="jobs">
          {#each jobs as { id, display, url, fullName, city, startMonth, endMonth, title, highlights }}
            {#if display}
              <li class="job column" {id}>
                <h3 class="job__header">
                  {#if url}
                    <a href="//{url}" rel="nofollow">{fullName.toUpperCase()}</a>
                  {:else}
                    {fullName.toUpperCase()}
                  {/if}
                </h3>
                <div class="job__title">{title.toUpperCase()}</div>
                <div class="job__dates">
                  {formatDate(startMonth).toUpperCase()}<span class="visually-hidden">
                    through
                  </span>&ndash;{formatDate(endMonth).toUpperCase()}
                </div>
                <div class="job__city">{city.toUpperCase()}</div>
                <ul class="job__highlights">
                  {#each highlights as highlight}
                    <li>{highlight}</li>
                  {/each}
                </ul>
              </li>
            {/if}
          {/each}
        </ul>
      </section>

      <section id="education">
        <h2 class="resume-section-header">Education</h2>

        <div class="school" id="ccc">
          <div class="tableader">
            <h3 class="school__header tableader__item">Columbia College Chicago</h3>
            <span class="tableader__dots"></span>
            <div class="school__city tableader__item">Chicago, IL</div>
          </div>
          <div class="tableader">
            <div class="school__concentration tableader__item">Computer Animation and Film</div>
            <span class="tableader__dots"></span>
            <div class="school__dates tableader__item">
              1994<span class="visually-hidden"> through </span>&ndash;1998
            </div>
          </div>
        </div>

        <div class="school" id="uic">
          <div class="tableader">
            <h3 class="school__header tableader__item">University of Illinois at Chicago</h3>
            <span class="tableader__dots"></span>
            <div class="school__city tableader__item">Chicago, IL</div>
          </div>
          <div class="tableader">
            <div class="school__concentration tableader__item">Computer Science</div>
            <span class="tableader__dots"></span>
            <div class="school__dates tableader__item">
              1993<span class="visually-hidden"> through </span>&ndash;1994
            </div>
          </div>
        </div>
      </section>

      <div class="qrContainer">
        <Zrgqr />Scan this QR code to see this page on your phone
      </div>
    </main>
  </div>
</div>

<style lang="scss">
  :global(:root) {
    --font-family: 'Merriweather', serif;
    --font-family-secondary: 'Encode Sans Semi Condensed', sans-serif;
    --font-color: #000;
    --link-color: #2525e3;
    --link-color-visited: #681091;
    --jobs-color: #575757;
    --bg-color: #fbfcfc;
    --body-bg-color: #ddd8ca;
    --inner-bg: var(--bg-color);
    --body-bg: linear-gradient(to bottom, #fff 0%, #ddd8ca 100%) fixed;
    --border-color: var(--font-color);
    --border-color-secondary: #868686;
  }

  @media not print {
    .outer-container:has(.theme-switcher__dark-mode-toggle:checked) {
      --font-family: monospace;
      --font-family-secondary: var(--font-family);
      --font-color: #0f0;
      --link-color: #0cf;
      --link-color-visited: #d270ff;
      --jobs-color: #00bd00;
      --bg-color: #333;
      --body-bg-color: var(--bg-color);
      --body-bg: #000;
      --inner-bg: rgba(0, 0, 0, 0.5);
      --border-color: var(--font-color);
      --border-color-secondary: #090;
    }

    // Doesn't appear to be a sensible way to use css vars above where they are declared without using global
    // Using actual values to eliminate the white background when you "bounce" the page by pulling it down.
    :global(body:has(.theme-switcher__dark-mode-toggle:checked)) {
      background-color: #000;
      color: #0f0;
    }
  }

  :global(body) {
    margin: 0;
  }

  .outer-container {
    line-height: 1.4;
    font-size: 12px;
    text-align: center;
    color: var(--font-color);
    background: var(--body-bg-color);
    font-family: var(--font-family);

    &.small {
      font-size: 1em;
    }
    &.medium {
      font-size: 1.2em;
    }
    &.large {
      font-size: 1.4em;
    }
  }
  a {
    text-decoration: none;
    color: var(--link-color);

    &:visited {
      color: var(--link-color-visited);
    }
    &:hover {
      text-decoration: underline;
    }
  }

  @media print {
    a,
    a:visited,
    a:hover {
      color: var(--font-color);
    }
    .no-print {
      display: none;
    }
  }

  [aria-hidden] {
    width: 0;
    display: inline-block;
    visibility: hidden;
    margin-top: -100em;
  }

  .visually-hidden {
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

  .controls {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--font-color);
    font-family: var(--font-family-secondary);

    label {
      cursor: pointer;
      display: block;
    }

    .theme-switcher {
      &__dark-mode-toggle {
        display: none;
      }

      &::before {
        content: 'Color Mode:';
      }
    }

    .font-sizer {
      &__control {
        background-color: var(--body-bg-color);
        color: var(--font-color);
        border: none;
        font-size: 0.8em;
        font-family: var(--font-family-secondary);
      }

      &::before {
        content: 'Text Size: ';
      }
    }
  }

  .responsive-notice {
    width: 30em;
    padding: 0.5em 0 0.7em;
    position: fixed;
    left: -8.5em;
    bottom: 4.5em;
    font-family: var(--font-family-secondary);
    font-size: 1.2em;
    letter-spacing: 0.03em;
    text-align: center;
    color: var(--font-color);
    background-color: #fcf50a;
    z-index: 2;
    transform: rotate(45deg);
    opacity: 0;
    animation: fade-out 15s ease;
  }

  @keyframes fade-out {
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

  .inner-container {
    padding: 1em;
    margin: 0 auto;
    text-align: left;
    background: var(--inner-bg);
  }

  main {
    display: flex;
    flex-wrap: wrap;
  }

  .resume-name {
    font-family: var(--font-family-secondary);
    margin: 1em 0 0;
    font-size: 3em; /* 36/12px */
    line-height: 1.2;
    font-weight: 800;

    &__word {
      display: inline-block;

      &::first-letter {
        font-size: 1.30555556em; /* 47/36 */
      }
    }

    &__title {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 0.43055556em; /* 15.5/36px */
      line-height: 2;
      display: block;
      margin-top: 1em;

      span {
        display: block;
        line-height: 1.2;
        text-align: right;
      }
    }
  }

  .subheader {
    font-weight: 500;
    font-size: 0.91666667em; /* 11/12px */
    text-align: right;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .resume-section-header {
    border-top: 2px solid var(--border-color);
    border-bottom: 1px solid var(--border-color-secondary);
    font-family: var(--font-family-secondary);
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

    &__header {
      margin: 0.25em 0;
    }
    &__city,
    &__dates {
      color: var(--jobs-color);
      font-weight: 300;
      line-height: 2;
    }
  }

  .job {
    &__header {
      font-weight: 300;
      font-size: 1.25em; /* 15/12px */
    }

    &__highlights {
      padding-left: 1em;
      margin: 1em 0;
      list-style: disc;

      li {
        margin-bottom: 0.5em;
      }
    }
  }

  .job__title,
  .school__concentration {
    font-style: oblique;
  }

  .qrContainer {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    margin-top: 1em;
  }

  // best guess for a device that reads QR codes with a camera (e.g., a phone)
  @media only screen and (width <= 450px),
    only screen and (pointer: coarse) and (width <= 800px) and (height <= 450px) {
    .qrContainer {
      display: none;
    }
  }

  #education {
    flex-basis: 100%;
  }

  @media (width >= 450px) {
    .outer-container {
      font-size: 16px;
    }
  }

  @media (width >= 700px) {
    .resume-name {
      margin-top: 0;

      &__title {
        margin-top: 0;

        span {
          display: inline;

          &:not(:first-child):before {
            content: '|';
            position: relative;
            margin: 0 0.15em;
          }
        }
      }
    }
    .subheader {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5em 1em;
      overflow: hidden;

      li {
        white-space: nowrap;

        &:not(:last-child) {
          margin-right: 0.5em;
        }
        &:not(:first-child) {
          margin-left: -0.5em;

          &::before {
            content: '|';
            position: relative;
            left: -0.5em;
          }
        }
      }
    }
  }

  @media (width >= 740px) {
    .outer-container {
      padding: 1.5% 0;
      background: var(--body-bg-color);
      background: var(--body-bg);
    }
    .inner-container {
      position: relative;
      width: 670px;
      padding: 2em;
      box-shadow: 4px 4px 16px #666;
      border: 1px solid #ddd;
    }
    .column {
      display: inline-block;
      width: 48%;
      vertical-align: top;
    }
    .column:nth-of-type(2n) {
      margin-left: 4%;
    }
    .job {
      &__dates {
        float: right;
      }
      &__city,
      &__dates,
      &__title {
        font-size: 0.85em;
      }
    }

    .tableader {
      display: flex;
      margin-bottom: 0.5em;
      gap: 0.5em;

      &__item {
        white-space: nowrap;
        font-size: 1em;
        line-height: 1;
        margin: 0;
      }

      &__dots {
        flex-basis: 100%;
        background: linear-gradient(
            90deg,
            var(--font-color),
            var(--font-color) 2px,
            transparent 2px
          )
          bottom/6px 2px repeat-x;
      }
    }
  }

  @media (width >= 1100px) {
    .small .controls {
      position: fixed;
    }
  }
  @media (width >= 1150px) {
    .medium .controls {
      position: fixed;
    }
  }
  @media (width >= 1200px) {
    .large .controls {
      position: fixed;
    }
  }
  @media not print {
    .outer-container:has(.theme-switcher__dark-mode-toggle:checked) {
      background: radial-gradient(rgba(0, 150, 0, 0.75), black 120%) fixed;
      letter-spacing: -0.5px;
      text-shadow: 0 0 4px rgba(0, 255, 0, 0.3);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: repeating-linear-gradient(
          0deg,
          rgba(black, 0.3),
          rgba(black, 0.3) 1px,
          transparent 1px,
          transparent 2px
        );
        pointer-events: none;
      }

      .inner-container {
        border-color: var(--border-color);
        box-shadow: none;
      }

      .responsive-notice {
        color: var(--bg-color);
        background-color: var(--font-color);
        font-size: 0.95em; /* monospace is just a bit bigger */
        width: 28em;
        left: -6em;
        bottom: 6em;
        letter-spacing: -0.04em;
      }

      .resume-name,
      .resume-section-header {
        font-weight: normal;
      }

      @media (width >= 740px) {
        .inner-container {
          border-radius: 20px;
          border-width: 4px;
        }
      }
    }
  }

  @media print {
    .outer-container {
      background: none;
    }
    .inner-container {
      background: none;
      border: none;
      box-shadow: none;
    }
  }
</style>
