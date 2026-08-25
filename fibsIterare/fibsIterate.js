const fibsIterate = (n) => {
  if (n <= 0) return [];

  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i += 1) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
};

export default fibsIterate;
