let str = "dsdADFsd";

function cap(s){
      let ss = s.substring(1 , s.length);
      ss=ss.toLowerCase();
      let char = s[0];
      char=char.toUpperCase();
     return char+ss;
}
console.log(cap(str));