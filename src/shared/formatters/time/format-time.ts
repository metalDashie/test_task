export const formatTime = (inputSeconds: number) => {
  const minutes = Math.floor(inputSeconds / 60).toString();
  const seconds = (inputSeconds % 60).toString();

  return `${minutes}:${seconds.padStart(2, '0')}`;
};
