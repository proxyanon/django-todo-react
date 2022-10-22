export function getLteIndex(array: number[], value: number): number {
  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      return index;
    }

    if (array[index] >= value || value < array[index + 1]) {
      return index;
    }
  }

  return 0;
}
