const fibsRecursive = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const previous = fibsRecursive(n - 1);
  const nextValue = previous[previous.length - 1] + (previous[previous.length - 2] ?? 0);

  return [...previous, nextValue];
};

export default fibsRecursive;
