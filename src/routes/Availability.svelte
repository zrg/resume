<script lang="ts">
  import availability from '$lib/availability';

  let { darkMode = false, fontSizeLevel = 'small' } = $props();
</script>

{#if availability}
  <div class="container {darkMode ? 'dark' : ''} {fontSizeLevel}">
    <div class="available">AVAILABLE FOR HIRE!</div>
  </div>
{/if}

<style lang="scss">
  .container {
    float: left;
    color: #000;
    font-style: oblique;
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    letter-spacing: 1px;

    &.small {
      font-size: 18px;
    }
    &.medium {
      font-size: 20px;
    }
    &.large {
      font-size: 22px;
    }

    &.dark {
      float: none;
      font-style: normal;
      font-weight: bold;
      font-family: inherit;
      letter-spacing: 0;

      .available {
        $height: 2em;
        height: $height;
        line-height: $height;
        background-color: #0f0;
        border: none;
        border-radius: 0;
        width: 100%;
      }
    }
  }

  @media (width >= 700px) {
    .container {
      text-align: center;
      float: none;
      width: 100%;
    }
  }

  .available {
    $height: 3em;

    width: 16em;
    height: $height;
    line-height: $height;
    background-color: #fcf50a;
    border-radius: 47%;
    display: inline-block;
    text-align: center;
    border: 7px double;
    margin: 0 auto 1em;
  }
</style>
