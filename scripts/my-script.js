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