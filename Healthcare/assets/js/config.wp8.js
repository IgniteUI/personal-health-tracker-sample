var Healthcare = Healthcare || {};

// Define application configuration for Windows Phone 8
Healthcare.config = {
    resources: [{
        folder: "www/i18n",
        file: "resources.js"
    }, {
        folder: "www/data",
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
    appJsFileLocation: "www/assets/js/app.js",
    isWP: true,
    numberOfMedications: 8,
    numberOfAppointmentToDisplay: 6,
    numberOfRecentAppointments: 1

}