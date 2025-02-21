const formatNumber = (num: number) => {
  if (num > 10000) {
    if (num > 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num;
};

export { formatNumber };
