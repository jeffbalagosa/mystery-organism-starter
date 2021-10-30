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

      return `The total identical base count is ${count}. Specimen #1 and specimen #2 have ${(
        (count / this.dna.length) *
        100
      ).toFixed(2)}% DNA in common.`;
    },
    willLikelySurvive() {
      let count = 0;

      for (let i = 0; i < this.dna.length; i++) {
        const thisBase = this.dna[i];
        if (thisBase === "C" || thisBase === "G") {
          count++;
        }
      }

      if (count >= 9) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const createSurvivablePAequorArray = (amountToMake, startingSpecimenNum) => {
  let count = startingSpecimenNum;
  let array = [];
  while (count < amountToMake + startingSpecimenNum) {
    let newPAequor = pAequorFactory(count, mockUpStrand());
    if (newPAequor.willLikelySurvive()) {
      array.push(newPAequor);
      count++;
    }
  }
  return array;
};

let instances = createSurvivablePAequorArray(30, 101);
console.log(instances);
