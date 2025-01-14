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
    border-radius: 47%;
    color: #000;
    background-color: #fcf50a;
    display: inline-block;
    text-align: center;
    letter-spacing: 1px;
    border: 7px double;
    font-style: oblique;
    margin: 0 auto 1em;
  }
</style>
