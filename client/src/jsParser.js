
export default function jsParser(string){
  return string.split(/(?=[A-Z])/).join(" ");
}
