<script>
export let flat = false

const classes = [
  'r--card',
  flat && 'r--card-flat',
].filter(x => x).join(' ')
</script>

<div class="{classes} {$$props['class'] || ''}">
  <slot></slot>
</div>