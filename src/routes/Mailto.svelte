<script lang="ts">
  import { mailto } from '$lib/mailto';

  let { children, ...rest } = $props();
</script>

<a {...rest} href={'#'} target="_blank" onfocus={mailto}>{@render children()}</a>
