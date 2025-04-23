const languages = {
    en: "English",
    fr: "Français",
}


const lang = document.querySelector("#lang");

// languages.forEach((language) => {
// const option = document.createElement("option");
// option.value = language;
// option.textContent = languages[language];
// lang.appendChild(option);
// }
// );

for (const [key, value] of
    Object.entries(languages)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;
    lang.appendChild(option);
    console.log(`${key}: ${value}`)
}
