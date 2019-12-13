export function normalizeColor(input, valueOffset = 0, absValue = false) {
  let [color, value] = input.split(' ')

  if ((color == 'white' || color == 'black') && valueOffset === 0) return color
  if (color == 'white' || color == 'black') color = 'gray'

  if (!value) value = 500

  value = Number(value)

  if (value > 500) value -= valueOffset
  else value += valueOffset

  if (absValue) value = valueOffset

  return `${color}-${value}`
}