document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcherLinks = document.querySelectorAll('.dropdown-item');
    const contents = document.querySelectorAll('.content-language');

    const updateContent = (language) => {
        contents.forEach(content => {
            if (content.getAttribute('data-language') === language) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    };

    languageSwitcherLinks.forEach(link => {
        link.addEventListener('click', function() {
            const selectedLanguage = this.getAttribute('data-language');
            updateContent(selectedLanguage);
            localStorage.setItem('language', selectedLanguage);
        });
    });

    // Set the initial content based on saved language
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateContent(savedLanguage);
});
