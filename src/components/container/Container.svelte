<script>
  export let fullWidth = false
</script>

<style global>
.r--container {
  @apply h-screen mx-auto px-4 py-2 overflow-y-auto border border-black;
}
</style>

<div class="container r--container">
  <slot></slot>
</div>