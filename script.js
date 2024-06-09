//your JS code here. If required.
let p=document.getElementById('counter');
let val=p.innerHTML;
function increment() {
	alert(val);
	val=parseInt(val)+1;
	p.innerHTML=val;
}