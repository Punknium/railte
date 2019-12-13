<script>
import { normalizeColor } from '../../utils/color'

export let dense = false
export let tile = false
export let color = 'blue'
export let textColor = 'white'
export let click = () => {}

const classes = [
  'r--button',
  dense && 'r--button--dense',
  tile && 'r--button--tile',
  `bg-${normalizeColor(color)}`,
  `hover:bg-${normalizeColor(color, 200)}`,
  `text-${normalizeColor(textColor)}`,
].filter(x => x).join(' ')

</script>

<style global>
.r--button {
  @apply font-bold py-2 px-4 rounded;
  &.r--button--dense {
    @apply py-1 px-2;
  }
  &.r--button--tile {
    @apply rounded-none;
  }
}
</style>

<button class="{classes}" on:click={click}>
  <slot>Button</slot>
</button>