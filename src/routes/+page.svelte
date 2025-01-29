<script lang="ts">
  import { browser } from '$app/environment';
  import { env } from '$env/dynamic/public';

  import '$lib/global.scss';
  import { availability, jobs, schools, summary, title } from '$lib/constants';
  import { getRandomFont } from '$lib/fontRandom';
  import { getStoredDarkMode, getStoredFontSizeLevel } from '$lib/getStoredValues';
  import { formatDate } from '$lib/formatDate.js';
  import { testId } from '$lib/testId';

  import Mailto from './Mailto.svelte';
  import Zrgqr from './zrgqr.svg?component';
  import IconDark from './icon-dark.svg?component';
  import IconLight from './icon-light.svg?component';
  import VisuallyHidden from './VisuallyHidden.svelte';
  import EnvNotice from './envNotice.svelte';

  const pdfLink = '../Zev%20Goldberg%20-%20Resume%20202501231105.pdf';

  let randomFont = getRandomFont(null, null);
  let {
    filename: darkModeNameFontFilename,
    fontFamily: dmnFontFamily,
    fontSize: dmnFontSize,
    letterSpacing: dmnLetterSpacing,
    textTransform: dmnTextTransform,
    lineHeight: dmnLineHeight,
    colorFamily: dmcf,
  } = $state(randomFont);

  let assumedFontSizeLevel = 'small';
  let assumedDarkMode = false;

  if (browser) {
    const browserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    assumedDarkMode = getStoredDarkMode() ?? browserDarkMode;
    assumedFontSizeLevel = getStoredFontSizeLevel() ?? assumedFontSizeLevel;
  }

  let fontSizeLevel = $state(assumedFontSizeLevel);
  let darkMode = $state(assumedDarkMode);

  const darkModeUserSelect = () => {
    // at the time of function call, darkMode is not yet toggled
    localStorage.setItem('darkMode', darkMode ? '0' : '1');

    if (darkMode) {
      // I'm guessing people will click light/dark mode more than once
      // so we'll change the dark mode font when light mode is showing
      // so it loads in the background
      randomFont = getRandomFont(darkModeNameFontFilename, dmcf?.name ?? null);
      darkModeNameFontFilename = randomFont.filename;

      dmnFontFamily = randomFont.fontFamily;
      dmnFontSize = randomFont.fontSize;
      dmnLetterSpacing = randomFont.letterSpacing;
      dmnTextTransform = randomFont.textTransform;
      dmnLineHeight = randomFont.lineHeight;
      dmcf = randomFont.colorFamily;
    }
  };

  const storeFontSize = () => {
    localStorage.setItem('fontSizeLevel', fontSizeLevel);
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={summary} />
  {#if browser}<link rel="stylesheet" href="/fonts/{darkModeNameFontFilename}.css" />{/if}
</svelte:head>

{#if env.PUBLIC_ENV}
  <EnvNotice env={env.PUBLIC_ENV} />
{/if}

<div
  class="outer-container {fontSizeLevel}"
  style:--dm-color-1={dmcf?.shades[0]}
  style:--dm-color-2={dmcf?.shades[1]}
  style:--dm-color-3={dmcf?.shades[2]}
  style:--dm-color-4={dmcf?.shades[3]}
  style:--dm-color-5={dmcf?.shades[4]}
>
  <aside class="responsive-notice no-print">
    Resize the browser or rotate your device!<br />This résumé is responsive!
  </aside>
  <div class="inner-container">
    <div class="controls no-print">
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <label class="theme-switcher" tabindex="0" aria-roledescription="checkbox">
        <input
          type="checkbox"
          class="theme-switcher__dark-mode-toggle"
          bind:checked={darkMode}
          onclick={darkModeUserSelect}
        />
        {#if darkMode}
          <IconDark />
        {:else}
          <IconLight />
        {/if}
      </label>
      <label class="font-sizer">
        <select class="font-sizer__control" bind:value={fontSizeLevel} onchange={storeFontSize}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </label>
    </div>
    <header>
      <h1 class="resume-name-title">
        <div
          class="resume-name-title__name"
          style:--dmn-font-family={dmnFontFamily}
          style:--dmn-font-size={dmnFontSize}
          style:--dmn-letter-spacing={dmnLetterSpacing}
          style:--dmn-text-transform={dmnTextTransform}
          style:--dmn-line-height={dmnLineHeight}
        >
          <span class="resume-name-title__word">Zev</span>
          <span class="resume-name-title__word">Goldberg</span>
        </div>
        <ul class="resume-name-title__title">
          <li>Senior Software Engineer</li>
          <li>Guitar FX Mad Scientist</li>
        </ul>
      </h1>
      {#if availability}
        <aside class="no-print availability" data-testid={testId('availability')}>
          <Mailto><span class="availability__inner">AVAILABLE FOR HIRE!</span></Mailto>
        </aside>
      {/if}
      <ul class="subheader" data-testid={testId('subheader')}>
        <li>
          <a href="tel:7738009384" aria-label="7 7 3. 8 0 0. Z E V G.">(773) 800-ZEVG</a>
        </li>
        <li aria-label="zev goldberg at G mail dot com">
          <Mailto>zevgoldberg@<span aria-hidden="true">[remove this]</span>gmail.com</Mailto>
        </li>
        <li>Evanston, IL 60203</li>
        <li class="no-print"><a href={pdfLink}>PDF Format</a></li>
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
      --font-family: 'VT323', monospace;
      --font-family-secondary: var(--font-family);
      --font-size: 18px;
      --font-size-wide: 20px;
      --font-color: var(--dm-color-1);
      --link-color: #0cf;
      --link-color-visited: #d270ff;
      --jobs-color: var(--dm-color-2);
      --bg-color: #282828;
      --body-bg-color: var(--bg-color);
      --body-bg: #000;
      --inner-bg: rgba(0, 0, 0, 0.5);
      --border-color: var(--font-color);
      --border-color-secondary: var(--dm-color-3);
    }
    :global(body:has(.theme-switcher__dark-mode-toggle:checked)) {
      background-color: #000;
      color: var(--dm-color-1);
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
      background: var(--body-bg-color);
      background: var(--body-bg);
      padding: calc(100vw - 750px) 0;
    }

    @media (width >= 760px) {
      padding: 1.5% 0;
    }
  }

  .responsive-notice {
    position: fixed;
    width: 600px;
    bottom: 90px;
    padding: 9.6px 0 13px;
    font-family: var(--font-family-secondary);
    font-size: 1.2em;
    letter-spacing: 0.03em;
    text-align: center;
    color: var(--font-color);
    background-color: #fcf50a;
    z-index: 2;
    transform: rotate(45deg);
    box-shadow: 12px 3px 5px var(--font-color);

    opacity: 0;
    left: -99999px;
    animation: fade-out 15s ease;

    #{$dark} & {
      color: var(--bg-color);
      background-color: var(--dm-color-2);
      letter-spacing: -0.04em;
      box-shadow: 0 0 16px inset;
    }
  }

  @keyframes fade-out {
    0%,
    99% {
      opacity: 0;
      left: -169px;
    }
    5%,
    90% {
      opacity: 1;
    }
    100% {
      left: -99999px;
    }
  }

  .inner-container {
    transition:
      background-color 0.6s,
      width 0.8s,
      padding 0.8s,
      margin 0.8s,
      font-size 0.8s;
    padding: 16px 20px 20px;
    margin: 0 auto;
    text-align: left;
    background: var(--inner-bg);
    box-sizing: border-box;

    .medium & {
      font-size: 1.2em;
    }
    .large & {
      font-size: 1.4em;
    }

    @media (width >= 740px) {
      position: relative;
      width: min(100%, 45.5em);
      box-sizing: border-box;
      padding: 16px 36px 36px;
      box-shadow: 4px 4px 16px #666;
      border: 1px solid #ddd;
    }
  }

  .controls {
    float: right;
    color: var(--font-color);
    font-family: var(--font-family-secondary);
    margin-bottom: 16px;

    @media (width >= 740px) {
      margin-right: -20px;
    }

    label {
      cursor: pointer;
      display: block;
    }
  }

  .theme-switcher {
    &__dark-mode-toggle {
      display: none;
    }

    &::before {
      content: 'Light / Dark:';
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
    margin: 0;
    clear: both;
    font-family: var(--font-family-secondary);

    &__word {
      display: inline-block;

      &::first-letter {
        font-size: 1.30555556em; /* 47/36 */
      }
    }

    &__name {
      line-height: 1.2;
      font-size: min(1.5em, calc(15.8vw - calc(40px * 0.158)));
    }

    &__title {
      font-family: var(--font-family);
      font-weight: 300;
      font-size: 0.675em;
      display: block;
      margin: 0.2em 0 0.6em 10px;
      padding-left: 20px;

      li {
        margin-bottom: 0.3em;
        line-height: 1.2;
        list-style: circle;
      }

      @media (width >= 560px) {
        $spacer-width: 15px;
        $spacer-line-width: 3px;

        margin: 10px 0 20px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.25em ($spacer-width * 2);
        overflow: hidden;

        li {
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
  }

  .availability {
    text-align: center;
    transition: width 0.8s;
    font-weight: bold;
    font-size: min(1.5em, 6.8vw);
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    letter-spacing: min(4px, 0);
    display: block;
    width: 100%;
    line-height: 2;
    margin: 0 auto 1em;
    transform: skew(0deg);

    &__inner {
      transition:
        color 0.6s,
        background-color 0.6s;
      display: block;
      background-color: var(--font-color);
      color: var(--bg-color);

      &:hover {
        box-shadow: 0 0 16px inset;
        text-decoration: underline;
      }
    }

    @media (width >= 560px) {
      font-style: italic;
      transform: skew(-14deg);
      width: 71%;
    }

    #{$dark} & {
      font-style: normal;
      font-family: inherit;
      letter-spacing: 0;
      font-variation-settings: 'wdth' 150;
      line-height: 1.8;
      font-size: min(1.5em, 8vw);
      letter-spacing: 0.5vw;

      &__inner {
        background-color: var(--dm-color-1);
        color: var(--bg-color);
      }
    }
  }

  .subheader {
    font-weight: 500;
    font-size: 0.89em;
    margin: 0 0 0 10px;
    padding-left: 20px;

    li {
      list-style: circle;
      margin-bottom: 8px;
    }

    @media (width >= 560px) {
      $spacer-width: 11px;
      $spacer-line-width: 2px;

      padding: 0;
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.25em ($spacer-width * 2);
      overflow: hidden;

      li {
        list-style: none;
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

    @media (width >= 700px) {
      //  - 1st number allows font size to change with font-sizer control
      //  - 2nd number is targeted to take up 100% of the space and
      //    grow at the same rate as the viewport when viewport width is 700px > < 740px
      //    (see fontRandom.ts for math details)
      font-size: max(0.9em, calc(2.2vw - calc(40px * 0.022)));
    }
    @media (width >= 740px) {
      font-size: 0.9em;
    }

    #{$dark} & {
      font-size: 1.2em;

      @media (width >= 700px) {
        font-size: max(1em, calc(3.3vw - calc(40px * 0.033)));
      }

      @media (width >= 740px) {
        font-size: min(1.2em, calc(3.27vw - calc(72px * 0.0327)));
      }

      li {
        line-height: 1;
        list-style: square;

        @media (width >= 560px) {
          list-style: none;
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
      background: radial-gradient(var(--dm-color-4), black 120%) fixed;
      letter-spacing: -0.5px;
      text-shadow: 0 0 4px var(--dm-color-5);
      position: relative;
      line-height: 1.2;

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
        font-weight: normal;
        font-family: var(--dmn-font-family), 'VT323', monospace;
        text-transform: var(--dmn-text-transform);
        font-size: var(--dmn-font-size);
        line-height: var(--dmn-line-height);
      }

      .resume-name-title__title li {
        list-style: square;
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
          width: min(100%, 40em);
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
