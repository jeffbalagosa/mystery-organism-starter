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
      const randomDnaIndex = Math.floor(Math.random() * this.dna.length);

      while (!this.dna === this.dna.splice(randomDnaIndex, 1, newBase)) {
        this.dna.splice(randomDnaIndex, 1, newBase);
      }

      return this.dna;
    },
    compareDNA(otherPAequor) {
      let count = 0;

      for (let i = 0; i < this.dna.length; i++) {
        const thisBase = this.dna[i];
        const otherBase = otherPAequor.dna[i];
        if (thisBase === otherBase) {
          count++;
        }
      }

      return console.log(
        `The total identical base count is ${count}. Specimen #1 and specimen #2 have ${(
          (count / this.dna.length) *
          100
        ).toFixed(2)}% DNA in common.`
      );
    },
  };
};

// Test
const subjectOne = pAequorFactory(1, mockUpStrand());
const subjectTwo = pAequorFactory(2, mockUpStrand());
console.log(subjectOne.compareDNA(subjectTwo));
