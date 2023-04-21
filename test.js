 let a = '';
 let b = '';
let sign = '';
let finish = false;
const out = document.querySelector ('.content');
const arr = ['1','2','3','4','5','6','7','8','9','0','.']
const acts = ['+','-','x',':','=']


document.querySelector('#numbers').onclick =
function show(e) 
{

const key = e.target.textContent;
if (key === 'DL') return;

if (arr.includes(key))
{ 
  if (b === '' && sign === '')
 { a += key
  out.textContent = a
 }
 else 
 if (a !== '' && b !== '' && finish)
 {
     b = key;
     finish = false;
     out.textContent = b
 }
 
 else{
     b += key;
     out.textContent = b;
 }
} 

if (acts.includes(key))
{ sign = key;
  out.textContent = sign;
}
if (key === '=')
{   if (b === '') b = a;
   a =  (+a) + (+b);
    out.textContent = a;
    finish = true

} 
}










