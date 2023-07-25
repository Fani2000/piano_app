export const useTruncate = (string) => {
  return string.length > 20 ? string.substring(0, 20).concat("...") : string;
};
