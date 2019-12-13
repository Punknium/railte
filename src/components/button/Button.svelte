<script>
import { normalizeColor } from '../../utils/color'

export let fab = false
export let tile = false
export let dense = false
export let color = 'blue'
export let textColor = 'white'
export let click = () => {}

const classes = [
  'r--button',
  fab && 'r--button--fab',
  tile && 'r--button--tile',
  dense && 'r--button--dense',
  `bg-${normalizeColor(color)}`,
  `hover:bg-${normalizeColor(color, 200)}`,
  `text-${normalizeColor(textColor)}`,
].filter(x => x).join(' ')

</script>

<style global>
.r--button {
  @apply inline-flex items-center justify-center;
  @apply py-2 px-4;
  @apply rounded;
  @apply font-bold;

  &.r--button--dense {
    @apply py-1 px-2;
  }

  &.r--button--tile {
    @apply rounded-none;
  }

  &.r--button--fab {
    @apply rounded-full h-12 w-12;

    &:not(.r--button--dense) {
      @apply h-12 w-12;
    }

    &.r--button--dense {
      @apply h-8 w-8;
    }
  }
}
</style>

<button class="{classes}" on:click={click}>
  <slot>Button</slot>
</button>