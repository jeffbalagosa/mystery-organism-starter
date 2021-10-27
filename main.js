// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaArray) => {
  return {
    specimentNum: num,
    dna: dnaArray,
    mutate() {
      const newBase = returnRandBase();
      const dnaIndex = dnaArray.indexOf(
        Math.floor(Math.random() * dnaArray.length)
      );
      if (dnaIndex !== -1) {
        dnaArray[dnaIndex] = newBase;
      }
      return dnaArray;
    },
  };
};

console.log(pAequorFactory(1, mockUpStrand()));
