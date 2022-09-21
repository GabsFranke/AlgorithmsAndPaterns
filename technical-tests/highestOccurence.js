function findHighestOccurence(list) {
  let highestOccurence = 0;
  let highestOccurenceElement = null;
  for (let i = 0; i < list.length; i++) {
    let currentOccurence = 0;
    for (let j = 0; j < list.length; j++) {
      if (list[i] === list[j]) {
        currentOccurence++;
      }
    }
    if (currentOccurence > highestOccurence) {
      highestOccurence = currentOccurence;
      highestOccurenceElement = list[i];
    }
  }
  return highestOccurenceElement;
}

console.log(
  findHighestOccurence(["a", "b", "c", "d", "a", "b", "c", "d", "a"])
);
