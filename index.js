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
    let sent = sentence.split(' ')
    let newCapArr = sent.map(word => {
      if(!wordsToIgnore.includes(word)) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
return newCapArr.join(' ').replace(/^./g, this.capitalize )
  } 
       



}
 


