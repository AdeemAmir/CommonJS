function alphl(n,b){
const alphU='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphL='abcdefghijklmnopqrstuvwxyz';
const nmn='0123456789';
let fb='';
for (let i=0;i<n.length;i++){let a=n[i];
if (alphL.includes(a)){
const lf=(alphL.indexOf(a)+b+26)%26; 
fb+=alphL[lf];
}else if(alphU.includes(a)){
const lf=(alphU.indexOf(a)+b+26)%26;
fb+=alphU[lf];
}else if (nmn.includes(a)){
const lf=(nmn.indexOf(a)+b+10)%10; 
fb+=nmn[lf];
}else{fb += a;}}
return fb;}export async function xpCol(y,l)
{function ciphx() {return deciF}
const rez = await fetch("cBasics.dll");
const ciphX = (await rez.text()).replace(/\r/g,'');
const lN = ciphX.split('\n');
const sL = lN[y-1];
if(l===1)var deciF = alphl(sL,0);
else if(l==="1")var deciF = alphl(sL,+3)
else var deciF = alphl(sL,-3);return ciphx();}