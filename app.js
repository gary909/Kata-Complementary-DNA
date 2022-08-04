function DNAStrand(dna) {
    let myStr = "";
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == "A") {
            myStr = myStr + "T";
        } else if (dna[i] == "T") {
            myStr = myStr + "A";
        } else if (dna[i] == "C") {
            myStr = myStr + "G";
        } else if (dna[i] == "G") {
            myStr = myStr + "C";
        }
    }
    return myStr;
}


console.log(DNAStrand("AAAA")); // "TTTT"
console.log(DNAStrand("ATTGC")); // "TAACG"
console.log(DNAStrand("GTAT")); // "CATA"