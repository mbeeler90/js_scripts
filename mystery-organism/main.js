// @ts-check

// Returns a random DNA base.
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases.
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Return an object for the DNA string with all the information and functionality
// DNA strings have.
const pAecquorFactory = (specimenNum, dna) => {
	return {
		_specimenNum: specimenNum,
		get specimenNum() {
			return this._specimenNum
		},
		_dna: dna,
		set dna(newdna) {
			this._dna = newdna
		},
		mutate() {
			const index = Math.floor(Math.random() * 15)
			const cmp = this._dna[index]
			while (cmp === this._dna[index])
				this._dna[index] = returnRandBase()
			return this._dna
		},
		compareDNA(pAequor) {
			let count = 0
			for (let i = 0; i < 15; i++)
				if (pAequor._dna[i] === this._dna[i])
					count++
			console.log(Math.round(count / 15 * 100) + '% identical DNA')
		},
		willLikelySurvive() {
			let survive = 0
			for (let i = 0; i < 15; i++)
				if (this._dna[i] === 'C' || this._dna[i] === 'G')
					survive++
			return survive > 8
		}
	}
}

// create DNA strings until 2 are created that survive.
const arrayOfpAecquors = []
while (arrayOfpAecquors.length < 2) {
	let obj = pAecquorFactory(arrayOfpAecquors.length + 1, mockUpStrand())
	if (obj.willLikelySurvive())
		arrayOfpAecquors.push(obj)
}

const obj1 = arrayOfpAecquors[0]
const obj2 = arrayOfpAecquors[1]

// Print results to console.
console.log("Similarity before mutation:")
obj1.compareDNA(obj2)
for (let i = 0; i < 5; i++) {
	obj1.mutate()
	obj2.mutate()
}
console.log("\nSimilarity after mutation:")
obj1.compareDNA(obj2)
console.log("\nWill they still survive?")
console.log("DNA string 1: ", obj1.willLikelySurvive() ? "yes" : "no")
console.log("DNA string 2: ", obj2.willLikelySurvive() ? "yes" : "no")
