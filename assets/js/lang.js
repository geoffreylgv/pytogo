
function changeLanguage(lang) {

    localStorage.setItem('selectedLanguage', lang);

   
    document.documentElement.lang = lang;

   
    const allLangElements = document.querySelectorAll('[data-lang]');
    allLangElements.forEach(el => {
        el.style.display = 'none';
    });

   
    const selectedLangElements = document.querySelectorAll(`[data-lang="${lang}"]`);
    selectedLangElements.forEach(el => {
        el.style.display = 'block';
    });
}




document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';


    document.getElementById('language-selector').value = savedLanguage;

  
    changeLanguage(savedLanguage);
});