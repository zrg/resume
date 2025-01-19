<script lang="ts">
  import type { Action } from 'svelte/action';
  import { browser } from '$app/environment';
  import { env } from '$env/dynamic/public';

  import '$lib/global.scss';
  import availability from '$lib/availability';
  import jobs from '$lib/jobs';
  import schools from '$lib/schools';
  import summary from '$lib/summary';
  import Zrgqr from './zrgqr.svg?component';
  import IconDark from './icon-dark.svg?component';
  import IconLight from './icon-light.svg?component';
  import VisuallyHidden from './VisuallyHidden.svelte';

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

{#if env.PUBLIC_ENV === 'dev'}<code
    style="position:absolute;left:120px;top:0;background:red;color:white;z-index:1;font-size:20px;padding:10px;border-radius:0 0 10px 10px"
    >LOCAL</code
  >{/if}
<div class="outer-container {fontSizeLevel}">
  <aside class="responsive-notice no-print">
    Resize the browser or rotate your device!<br />This résumé is responsive!
  </aside>
  <div class="inner-container">
    <div class="controls no-print">
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <label class="theme-switcher" tabindex="0" aria-roledescription="checkbox">
        <input type="checkbox" class="theme-switcher__dark-mode-toggle" bind:checked={darkMode} />
        {#if darkMode}
          <IconDark />
        {:else}
          <IconLight />
        {/if}
      </label>
      <label class="font-sizer">
        <select class="font-sizer__control" bind:value={fontSizeLevel}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </label>
    </div>
    <header>
      <h1 class="resume-name-title">
        <div class="resume-name-title__name">
          <span class="resume-name-title__word">Zev</span>
          <span class="resume-name-title__word">Goldberg</span>
        </div>
        <span class="resume-name-title__title"
          ><span>Senior Software Engineer</span><span>Guitar FX Mad Scientist</span></span
        >
      </h1>
      {#if availability}
        <aside class="availability no-print">
          <div>AVAILABLE FOR HIRE!</div>
        </aside>
      {/if}
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
        <li class="no-print"><a href="../Zev Goldberg - Resume 20250115.pdf">PDF Format</a></li>
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
                  {formatDate(startMonth).toUpperCase()}<VisuallyHidden>
                    through
                  </VisuallyHidden>&ndash;{formatDate(endMonth).toUpperCase()}
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
        <ul class="schools">
          {#each schools as { id, display, fullName, city, concentration, startYear, endYear }}
            {#if display}
              <li class="school" {id}>
                <div class="tab-leader">
                  <h3 class="school__header tab-leader__item">{fullName}</h3>
                  <span class="tab-leader__dots"></span>
                  <div class="school__city tab-leader__item">{city}</div>
                </div>
                <div class="tab-leader">
                  <div class="school__concentration tab-leader__item">{concentration}</div>
                  <span class="tab-leader__dots"></span>
                  <div class="school__dates tab-leader__item">
                    {startYear}<VisuallyHidden>through</VisuallyHidden>&ndash;{endYear}
                  </div>
                </div>
              </li>
            {/if}
          {/each}
        </ul>
      </section>

      <div class="qrContainer">
        <Zrgqr />Scan this QR code to see this page on your phone
      </div>
    </main>
  </div>
</div>

<style lang="scss">
  $dark: '.outer-container:has(.theme-switcher__dark-mode-toggle:checked)';

  @media not print {
    #{$dark} {
      --font-family: Inconsolata, monospace;
      --font-family-secondary: var(--font-family);
      --font-size: 17px;
      --font-size-wide: 19px;
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

  .outer-container {
    line-height: 1.4;
    text-align: center;
    color: var(--font-color);
    background: var(--body-bg-color);
    font-family: var(--font-family);
    font-size: var(--font-size);

    @media (width >=450px) {
      font-size: var(--font-size-wide);
    }

    @media (width >= 740px) {
      padding: 1.5% 0;
      background: var(--body-bg-color);
      background: var(--body-bg);
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

    #{$dark} & {
      color: var(--bg-color);
      background-color: var(--font-color);
      font-size: 0.95em; /* monospace is just a bit bigger */
      width: 28em;
      left: -6em;
      bottom: 6em;
      letter-spacing: -0.04em;
    }
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

    .medium & {
      font-size: 1.2em;
    }
    .large & {
      font-size: 1.4em;
    }

    @media (width >= 740px) {
      position: relative;
      width: 670px;
      padding: 2em;
      box-shadow: 4px 4px 16px #666;
      border: 1px solid #ddd;
    }
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

    @media (width >= 1160px) {
      .small & {
        position: fixed;
      }
    }

    @media (width >= 1280px) {
      .medium & {
        position: fixed;
      }
    }

    @media (width >= 1360px) {
      .large & {
        position: fixed;
      }
    }
  }

  .theme-switcher {
    &__dark-mode-toggle {
      display: none;
    }

    &::before {
      content: 'Color Mode:';
      margin-right: 0.4em;
      text-decoration: underline dotted;
    }
  }

  .font-sizer {
    &__control {
      background-color: var(--body-bg-color);
      color: var(--font-color);
      border: none;
      font-size: 0.8em;
      font-family: var(--font-family-secondary);
      cursor: pointer;
    }

    &::before {
      content: 'Text Size:';
      margin-right: 0.4em;
      text-decoration: underline dotted;
    }
  }

  .resume-name-title {
    font-family: var(--font-family-secondary);
    margin: 0.8em 0 0;
    font-size: 3em; /* 36/12px */
    line-height: 1.2;
    font-weight: 900;

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
      margin: 1em 0 0.6em;

      span {
        display: block;
        margin-bottom: 0.3em;
        line-height: 1.2;
        text-align: right;
      }
      @media (width >= 700px) {
        $spacer-width: 15px;
        $spacer-line-width: 3px;

        margin: 10px 0 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 0.25em ($spacer-width * 2);
        overflow: hidden;

        span {
          display: inline;
          white-space: nowrap;
          margin: 0;

          &:not(:first-child) {
            margin-left: (-1 * $spacer-width);

            &::before {
              content: ' ';
              display: inline-block;
              height: 1em;
              vertical-align: middle;
              box-sizing: border-box;

              width: $spacer-width;
              border-left: $spacer-line-width solid var(--font-color);
            }
          }
        }
      }
    }

    @media (width >= 740px) {
      margin-top: 0;
    }
  }

  .availability {
    float: left;
    color: #000;
    font-style: oblique;
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    letter-spacing: 1px;
    width: 14em;

    > div {
      $height: 3em;
      width: 100%;
      max-width: 16em;
      height: $height;
      line-height: $height;
      background-color: #fcf50a;
      border-radius: 47%;
      display: inline-block;
      text-align: center;
      border: 7px double;
      margin: 0 auto 1em;
    }

    @media (width >= 700px) {
      text-align: center;
      float: none;
      width: 100%;
    }

    #{$dark} & {
      float: none;
      font-style: normal;
      font-weight: 900;
      font-family: inherit;
      letter-spacing: 0;
      width: 100%;
      font-variation-settings: 'wdth' 150;

      > div {
        $height: 2em;
        height: $height;
        line-height: $height;
        background-color: #0f0;
        border: none;
        border-radius: 0;
        max-width: 100%;
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

    li {
      margin-bottom: 8px;
    }

    @media (width >= 700px) {
      $spacer-width: 11px;
      $spacer-line-width: 2px;

      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.25em ($spacer-width * 2);
      overflow: hidden;

      li {
        white-space: nowrap;
        margin-bottom: 0;

        &:not(:first-child) {
          margin-left: (-1 * $spacer-width);

          &::before {
            content: ' ';
            display: inline-block;
            height: 1em;
            vertical-align: middle;
            box-sizing: border-box;

            width: $spacer-width;
            border-left: $spacer-line-width solid var(--font-color);
          }
        }
      }
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
  }

  .resume-section-header {
    border-top: 2px solid var(--border-color);
    border-bottom: 1px solid var(--border-color-secondary);
    font-family: var(--font-family-secondary);
    font-size: 1.1875em; /* 19/16px */
    font-weight: 700;
  }

  #education {
    flex-basis: 100%;
  }

  .jobs,
  .schools {
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

    @media (width >= 740px) {
      &__dates {
        float: right;
      }
      &__city,
      &__dates,
      &__title {
        font-size: 0.85em;
      }
    }
  }

  .job__title,
  .school__concentration {
    font-style: italic;
  }

  .qrContainer {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    margin-top: 1em;

    // best guess for a device that reads QR codes with a camera (e.g., a phone)
    @media only screen and (width <= 450px),
      only screen and (pointer: coarse) and (width <= 800px) and (height <= 450px) {
      display: none;
    }
  }

  @media (width >= 740px) {
    .column {
      display: inline-block;
      width: 48%;
      vertical-align: top;

      &:nth-of-type(2n) {
        margin-left: 4%;
      }
    }

    .tab-leader {
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

  @media not print {
    #{$dark} {
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
      .resume-name-title__name {
        font-weight: 100;
      }

      .resume-name-title__word {
        &::first-letter {
          font-size: inherit;
        }
      }
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
    .no-print {
      display: none;
    }
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
