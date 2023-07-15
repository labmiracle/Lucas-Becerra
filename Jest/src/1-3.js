function baseCanonica(cadenaADN) {
    if (cadenaADN === "") {
      return "";
    }
    
    const canonicalBases = ["C", "T", "A", "G"];
    
    return cadenaADN.split("").filter(base => canonicalBases.includes(base)).join('');
  }
  
  module.exports = {baseCanonica};