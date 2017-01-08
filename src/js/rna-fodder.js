/*
Write a program that, given a DNA strand, returns its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and thymine (**T**).

The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and uracil (**U**).

Given a DNA strand, its transcribed RNA strand is formed by replacing
each nucleotide with its complement:

* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`
*/

/*
Your ECMAScript solution for Rna Transcription has been submitted. View it here:
http://exercism.io/submissions/2a6b1574256f407b8366b04cb18e56b4

See related solutions and get involved here:
http://exercism.io/tracks/ecmascript/exercises/rna-transcription
*/

class Transcriptor {

  toRna(dna) {
    let dnaArray = Array.from(dna);
    let rna = [];
    let mapOut = dnaArray.map(function(nucleotide){
      if(nucleotide == 'G') rna.push('C')
      else if(nucleotide == 'C') rna.push('G')
      else if(nucleotide == 'T') rna.push('A')
      else rna.push('U')
    });
    return rna.join('');
  }

}

export default Transcriptor;


/*
Rna Transcription solution submitted by  leonelgalan 31 December 2016 at 2:20 AEDT
- nice RegExp
*/
const DNA = 'GCTA'
const RNA = 'CGAU'

class Transcriptor {
  toRna(strand) {
    if (strand.match(/[^GCTA]+/)) {
      throw new Error('Invalid input DNA.');
    }
    return strand.split('').map(nucleotid => RNA[DNA.indexOf(nucleotid)]).join('');
  }
}

export default Transcriptor;


/*
Rna Transcription solution submitted by cover about 13 hours ago
- Object.keys!
*/
const DNA_TO_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

class Transcriptor {
  validateDna(dnaStrand) {
    const dnaNucleotides = Object.keys(DNA_TO_RNA)
    const invalidComplementsMatcher = new RegExp(`[^${dnaNucleotides.join('')}]`)
    if (invalidComplementsMatcher.test(dnaStrand)) {
      throw new Error('Invalid input DNA.')
    }
  }

  toRna(dnaStrand) {
    this.validateDna(dnaStrand)

    return dnaStrand.split('').map(nucleotide => DNA_TO_RNA[nucleotide]).join('')
  }
}

export default Transcriptor


/*
switch based solution from lindsc92
*/
class Transcriptor {

  toRna(dnaStrand) {
    let rnaComplement = "";

    for (let i = 0; i < dnaStrand.length; i++) {
      var dnaNucleotide = dnaStrand.charAt(i);

      switch (dnaNucleotide) {
        case "C":
          rnaComplement = rnaComplement.concat("G");
          break;
        case "G":
          rnaComplement = rnaComplement.concat("C");
          break;
        case "A":
          rnaComplement = rnaComplement.concat("U");
          break;
        case "T":
          rnaComplement = rnaComplement.concat("A");
          break;
        default:
          throw(new Error('Invalid input DNA.'));
      }
    }

  return rnaComplement;
  }
}

export default Transcriptor;


/*
submitted by  mwdeez 30 December 2016 at 3:15 AEDT
*/
class Transcriptor {
  toRna (strand) {
    const remap_pattern = {
      'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'
    }
    const invalidRegex = new RegExp(/[^ACGT]/)
    let returnedStrand = []

    // error on invalid input
    if (invalidRegex.test(strand)) { throw Error('Invalid input DNA.') }

    strand.split('').map((element) => { returnedStrand.push(remap_pattern[element]) })
    return returnedStrand.join('')
  }
}

module.exports = Transcriptor

// the keys can be strings in quotes... or not.
// use split('') and join('') if you are working with string inputs to convert to arrays - like single character DNA 'GCCTAAACCT'
let objectOne = {
  key1: 'value1',
  'key2': 'value2',
  key3: 'value3'
}

class KeyValueMapper {

  keyToValue(someArray) {
    return someArray.map(arrayItem => objectOne[arrayItem])
  }

}

let keyvaluemapper = new KeyValueMapper

let myArray = ['key1', 'key2', 'key3', 'key1', 'key1', 'key3']

console.log(keyvaluemapper.keyToValue(myArray));
// ["value1", "value2", "value3", "value1", "value1", "value3"]

// input validation with RegExp:
const inputValidation = new RegExp(/[^GCAT]/)
if(inputValidation.test(strand)) throw new Error('Invalid input DNA.')

// final submission for exercism.io rna-transcription:
const dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

class Transcriptor {

  toRna(strand) {

    const inputValidation = new RegExp(/[^GCAT]/)

    if(inputValidation.test(strand)) throw new Error('Invalid input DNA.')

    return strand.split('').map(nucleotide => dnaToRna[nucleotide]).join('')
  }

}

export default Transcriptor
