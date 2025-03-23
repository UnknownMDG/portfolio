const translations = {
    en: {
        welcomeMessage: "Hello World, it's <em class='kronos-text'>Kronos</em>",
        welcomeText: "Welcome to my portfolio. I am a <strong><em>web developer apprentice</em></strong> passionate about creating websites and web applications. I would like to specialize in front-end and back-end development. I am also passionate about new technologies and design. I am always looking for new projects and ideas. Feel free to contact me if you have a project or an idea to propose."
    },
    fr: {
        welcomeMessage: "Hello World, c'est <em class='kronos-text'>Kronos</em>",
        welcomeText: "Bienvenue sur mon portfolio. Je suis un <strong><em>apprenti développeur</em></strong> web passionné par la création de sites web et d'applications web. Je voudrais me spécialisé dans le développement front-end et back-end. Je suis également un passionné de nouvelles technologies et de design. Je suis toujours à la recherche de nouveaux projets et de nouvelles idées. N'hésitez pas à me contacter si vous avez un projet ou une idée à me proposer."
    }
};

function setLanguage(language) {
    document.getElementById('welcome-message').innerHTML = translations[language].welcomeMessage;
    document.getElementById('welcome-text').innerHTML = translations[language].welcomeText;

    // Mettre à jour l'état actif des boutons de langue
    document.getElementById('btn-fr').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById(`btn-${language}`).classList.add('active');
}