window.addEventListener("scroll", function() {
    
  var scroll = window.scrollX; 
  var windowWidth = window.innerWidth; 

  document.querySelectorAll('section').forEach((section, index) => {
    
    let start = windowWidth * index;
    let end = windowWidth * (index+1);

    const info = section.querySelector('.info');

    if(scroll>=start && scroll<=end){
       info.style.opacity = '1';
    }
    else{
        info.style.opacity = '0';
    }
  });
});