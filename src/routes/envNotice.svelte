<script lang="ts">
  const { env } = $props();

  let bg = $state('');
  let fg = $state('');

  if (env === 'dev') {
    bg = '#f00';
    fg = '#fff';
  } else if (env === 'preview') {
    bg = '#ff0';
    fg = '#000';
  }
</script>

<code style:color={fg} style:background-color={bg}>{env}</code>

<style lang="scss">
  code {
    position: fixed;
    left: 120px;
    top: 0;
    z-index: 1;
    font-size: 20px;
    padding: 10px;
    border-radius: 0 0 10px 10px;
    text-transform: uppercase;
  }
</style>
