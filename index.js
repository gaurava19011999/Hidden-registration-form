function show(){
    const a = document.getElementById('form');
    a.className="form2";
    const b = document.getElementById('btn');
    b.style.display="none";
}
function hide(){
    const a = document.getElementById('form');
    a.className="form";
    const b = document.getElementById('btn');
    b.style.display="block";
}