///////////////////////////////////////////////////////////////////////////////////
// DNA to RNA Conversion
///////////////////////////////////////////////////////////////////////////////////

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

///////////////////////////////////////////////////////////////////////////////////

// Method
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// Arrow
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// Method
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// Arrow
const DNAtoRNA = (dna) => dna.split("T").join("U");

// For Loop
function DNAtoRNA(dna) {
  let finalString = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      finalString += "U";
    } else {
      finalString += dna[i];
    }
  }
  return finalString;
}

// For Loop Ternary
function DNAtoRNA(dna) {
  let finalString = "";
  for (let i = 0; i < dna.length; i++) {
    finalString += dna[i] === "T" ? "U" : dna[i];
  }
  return finalString;
}
