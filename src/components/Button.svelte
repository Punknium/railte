<script>
import { normalizeColor } from '../utils/color'

export let dense = false
export let tile = false
export let color = 'blue'
export let textColor = 'white'
export let click = () => {}

const classes = [
  `bg-${normalizeColor(color)}`,
  `hover:bg-${normalizeColor(color, 200)}`,
  `text-${normalizeColor(textColor)}`,
  'font-bold',
  dense ? 'py-1' : 'py-2',
  dense ? 'px-2' : 'px-4',
  !tile && 'rounded',
].filter(x => x).join(' ')

</script>

<button class="{classes}" on:click={click}>
  <slot>Button</slot>
</button>