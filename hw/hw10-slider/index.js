

 function myTest(e){
    const siblings = Array.prototype.slice.call(e.target.parentNode.children);

    for (var i = siblings.length; i--;) {
      if (siblings[i] === e.target) {
        siblings.splice(i, 1);
        break;
      }
    }
  

    siblings.map(e => 
        e.classList.remove('active')
        )

if(e.target.className){
    e.target.className = e.target.className + ' active';
}else{
    e.target.classList.remove('active')
}


    }
