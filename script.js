let inputBox =document.getElementById('input-text');
let listBox =document.getElementById('list');

function addText (){
    if (inputBox.value === ""){
        alert('Please write Your list');
    }
    else {
        let li =document.createElement('li');
        li.innerHTML=inputBox.value ;
        listBox.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value ='' ;
    saveData ();

}
listBox.addEventListener('click' ,function(e){
   if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    saveData ()
   }
   else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove()
    saveData ()
   }
},false)

function saveData (){
    localStorage.setItem('data',listBox.innerHTML) ;
}
function showData (){
    listBox.innerHTML=localStorage.getItem('data');
}
showData ()