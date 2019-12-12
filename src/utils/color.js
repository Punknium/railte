export function normalizeColor(input, valueOffset = 0) {
  let [color, value] = input.split(' ')

  if (color == 'white' || color == 'black') return color

  if (!value) value = 500

  value = Number(value)

  if (value > 500) value -= valueOffset
  else value += valueOffset

  return `${color}-${value}`
}