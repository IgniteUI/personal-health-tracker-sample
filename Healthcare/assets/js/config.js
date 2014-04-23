var Healthcare = Healthcare || {};

// Define application configuration
Healthcare.config = {
    resources: [{
        folder: "i18n",
        file: "resources.js"
    }, {
        folder: "data",
        file: "data.js"
    }],
    language: {
        defaultLanguage: "en",
        supportedLanguages: ["en", "ja"]
    },
    reminder: {
        snoozeDelayInMiliseconds: 30000,
        delayBeforeShowingInMiliseconds: 30000
    },
    appJsFileLocation: "assets/js/app.js",
    isWP: false,
    numberOfMedications: 14,
    numberOfAppointmentToDisplay: 10,
    numberOfRecentAppointments: 3
}