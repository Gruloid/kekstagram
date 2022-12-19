function randomizer(min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function checkCommit(str, value = 140) {
  return str.length <= value;
}

