function TxtType(el, toRotate, period, language) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.language = language;
    this.isDeleting = false;
    this.tick();
}

TxtType.prototype.stop = function() {
    clearTimeout(this.timeout);
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '&nbsp;</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    this.timeout = setTimeout(() => {
        this.tick();
    }, delta);
};

document.addEventListener('DOMContentLoaded', function() {
    initTypewrite('en');  // Initialize with English by default
});

function initTypewrite(language) {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type-' + language);
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            // Clear existing typewrite instance if any
            if (elements[i].typewriteInstance) {
                elements[i].typewriteInstance.stop();
            }
            elements[i].typewriteInstance = new TxtType(elements[i], JSON.parse(toRotate), period, language);
        }
    }
}

// Add click event listener to a specific element
document.getElementById('languageDropdownItem').addEventListener('click', initTypewrite);