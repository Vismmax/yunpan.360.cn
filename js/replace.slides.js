function replace_slides() {
    var slides = document.querySelectorAll('.slide img');
    for (var j = 0; j < slides.length; j++) {
        slides[j].setAttribute('src', 'http://lorempixel.com/960/388/city/' + Math.floor(Math.random() * 10));
        //slides[j].parentNode.getElementsByClassName('btn')[0].style.background = 'none';
    }
}

