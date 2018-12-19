import capitalize from './capitalize'

export default function parser(string){
  string = string.split(' ')
  if (string.length === 1){
    string = string[0].split('')
    string[0] = string[0].toLowerCase()
    return string.join('')
  } else if (string.length > 1) {
    string = string.map((string, index) => {
       return index !== 0 ? capitalize(string) : string.toLowerCase()
    })
    return string.join('')
  }
}
