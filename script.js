//your JS code here. If required.
let p=document.getElementById('counter');
let val=parseInt(p.innerHTML);
function increment() {
	alert(val);
	val=val+1;
	p.innerHTML=val;
}