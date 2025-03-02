const padZero = (input: string) => {
  if (input.length === 1) return "0" + input;
  return input;
};

export default padZero;
