<script lang="ts">
  let { children } = $props();
</script>

<span class="visually-hidden">{@render children?.()}</span>

<style>
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
</style>
