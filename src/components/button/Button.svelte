<script>
import { normalizeColor } from '../../utils/color'

export let fab = false
export let tile = false
export let dense = false
export let outlined = false
export let text = false
export let color = 'blue'
export let textColor = 'white'
export let click = () => {}

const classes = [
  'r--button',
  fab && 'r--button--fab',
  tile && 'r--button--tile',
  dense && 'r--button--dense',
  outlined && 'r--button--outlined',
  text && 'r--button--text',
  outlined || text ? null : `bg-${normalizeColor(color)}`,
  outlined || text ? `hover:bg-${normalizeColor(color, 100, true)}` : `hover:bg-${normalizeColor(color, 100)}`,
  outlined || text ? `text-${normalizeColor(color)}` : `text-${normalizeColor(textColor)}`,
  outlined && `border-${normalizeColor(color)}`,
].filter(x => x).join(' ')

</script>

<style global>
.r--button {
  @apply inline-flex items-center justify-center;
  @apply py-2 px-4;
  @apply rounded;
  @apply font-bold;

  &.r--button--outlined {
    @apply border-2
  }

  &.r--button--dense {
    @apply py-1 px-2;
  }

  &.r--button--tile {
    @apply rounded-none;
  }

  &.r--button--fab {
    @apply rounded-full;

    &:not(.r--button--dense) {
      @apply h-12 w-12;
    }

    &.r--button--dense {
      @apply h-8 w-8;
    }
  }
}
</style>

<button class="{classes} {$$props['class'] || ''}" on:click={click}>
  <slot>Button</slot>
</button>