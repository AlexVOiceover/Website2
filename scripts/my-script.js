var container = document.getElementById('main-container');
container.addEventListener('scroll', function() {
    var scrollLeft = container.scrollLeft;
    document.querySelectorAll('section').forEach(function(section, i) {
        var img = section.querySelector('img');
        var title = section.querySelector('h2');
        var text = section.querySelector('p');

        // calculate the start and end boundaries of each section
        var sectionStart = img.width * i - img.width / 2;
        var sectionEnd = img.width * (i + 1) - img.width / 2;
     
        if (scrollLeft >= sectionStart && scrollLeft < sectionEnd) {
            // If the section is in the viewport, animate the title and text
            title.style.bottom = '70%';
            text.style.top = '30%';
            
        } else {
            // If the section is not in the viewport, reset the title and text position
            title.style.bottom = '-50%';
            text.style.top = '150%';
        }
    });
});

function scrollToNextSection(e) { 
    // Find the section that the arrow belongs to
    var section = e.target.parentElement.parentElement;
    // Find the next section 
    var nextSection = section.nextElementSibling;
    // If there is a next section, scroll to it
    if (nextSection) {
        container.scroll({
            left: nextSection.offsetLeft, 
            behavior: 'smooth' 
        });
    }
}

function scrollToPreviousSection(e) { 
    // Find the section that the arrow belongs to
    var section = e.target.parentElement.parentElement;
    // Find the previous section 
    var previousSection = section.previousElementSibling;
    // If there is a previous section, scroll to it
    if (previousSection) {
        container.scroll({
            left: previousSection.offsetLeft, 
            behavior: 'smooth' 
        });
    }
}

document.querySelectorAll('.arrow.right').forEach(function(arrowRight) {
    arrowRight.addEventListener('click', scrollToNextSection);
});

document.querySelectorAll('.arrow.left').forEach(function(arrowLeft) {
    arrowLeft.addEventListener('click', scrollToPreviousSection);
});