export default function hasValuesFormArray(set, array) {
  return array.every(element => set.has(element));
}
