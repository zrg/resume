<script lang="ts">
  let { darkMode } = $props();
</script>

<div class="responsive-notice {darkMode ? 'dark' : ''}">
  Resize the browser or rotate your device!<br />This résumé is responsive!
</div>

<style lang="scss">
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

    &.dark {
      color: var(--bg-color);
      background-color: var(--font-color);
      font-size: 0.95em; /* monospace is just a bit bigger */
      width: 28em;
      left: -6em;
      bottom: 6em;
      letter-spacing: -0.04em;
    }

    @media print {
      display: none;
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
</style>
