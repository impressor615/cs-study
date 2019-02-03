function naiveStringSearch(longString, shortString) {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      const currentLongString = longString[i + j];
      const currnetShortString = shortString[j];
      if (currentLongString !== currnetShortString) break;
      if (j === (shortString.length - 1)) count+= 1;
    }
  }

  return count;
}


naiveStringSearch('amgamg', 'amg'); // return 2
naiveStringSearch('asdfweamgdwsamgasdwdsamg', 'amg') // return 3
naiveStringSearch('akjdhwludh', 'amg') // return 0
