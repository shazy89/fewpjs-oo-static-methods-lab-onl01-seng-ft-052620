class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9\s'-]/g, '' )
  }

  static titleize(sentence){
    let wordsToIgnore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = sentence.split(" ")
    let capitalized = array.map(word => {
      if(!wordsToIgnore.includes(word)){
        return this.capitalize(word)
      }
      else {return word}
    })
    capitalized[0] = this.capitalize(capitalized[0])
    return capitalized.join(" ")
 
  }
       



}
 


