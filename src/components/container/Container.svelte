<style global>
.r--container {
  @apply h-screen mx-auto px-4 py-2 overflow-y-auto;
}
</style>

<div class="container r--container {$$props['class'] || ''}">
  <slot></slot>
</div>