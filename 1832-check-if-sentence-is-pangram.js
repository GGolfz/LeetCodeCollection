var checkIfPangram = function(sentence) {
  let key = {}
  for(let i of sentence) key[i] = 0;
  return Object.keys(key).length == 26
};
