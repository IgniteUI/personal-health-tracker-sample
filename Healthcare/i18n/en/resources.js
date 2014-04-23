var Healthcare = Healthcare || {};

// create a general purpose namespace method
// this will allow us to create namespace a bit easier
Healthcare.createNS = function (namespace) {
    var nsparts = namespace.split("."),
        parent = Healthcare;

    // we want to be able to include or exclude the root namespace
    // So we strip it if it's in the namespace
    if (nsparts[0] === "Healthcare") {
        nsparts = nsparts.slice(1);
    }

    // loop through the parts and create 
    // a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has 
        // the namespace declared, if not create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element 
        // in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now completely constructed 
    // with empty namespaces and can be used.
    return parent;
};

// Define application configuration modules
Healthcare.createNS("Healthcare.Resources");

// Define application helper resource strings
Healthcare.Resources.Helpers = {
    LoadIndicator: {
        Text: "Loading..."
    }
};

// Define application general resource strings
Healthcare.Resources.General = {
    title: "Healthcare Assistant",
    panelMenu: "Panel Menu",
    errorGettingLocale: "Error getting locale",
    am: "am"
};

// Define application pages resource strings
Healthcare.Resources.patient = {
    patientTitleLabel: "Patient Profile",
    patientImageAltLabel: "",
    genderLabel: "Gender",
    dobLabel: "DOB",
    languageLabel: "Language",
    maritalStatusLabel: "Marital Status",
    allergiesTitleLabel: "Allergies",
    immunizationsTitleLabel: "Immunizations",
    reactionLabel: "Reaction",
    mildLabel: "MILD",
    moderateLabel: "MODERATE",
    severeLabel: "SEVERE"
};

Healthcare.Resources.emergency = {
    bloodTypeLabel: "Blood Type",
    organDonorLabel: "Organ Donor"
};

Healthcare.Resources.about = {
    aboutTheShowcaseTitle: "About The Showcase",
    aboutTheShowcaseLabel: "The Personal Health Tracker sample shows using Ignite UI within the PhoneGap app framework. This mobile phone app sample uses the tile view manager to dynamically switch between views in the app. The pie chart, data chart, templating, and customized list view controls help users to see and keep track of their personal health history as well as upcoming doctor appointments.",
    controlUsedTitle: "Controls Used",
    tileManager: "Tile Manager",
    chart: "Chart",
    listView: "List View",
    templating: "Templating",
    linearGauge: "Linear Gauge",
    igniteui: "Ignite UI",
    infragistics: "Infragistics"
};

Healthcare.Resources.dashboard = {
    nextMedication: "Next Medication",
    nextAppointment: "Next Appointment",
    doctorAppointments: "Doctor's Appointments",
    medication: "Medication",
    pm: "pm",
    instructions: "Instructions",
    medications: "Medications",
    weight: "Weight",
    bloodPressure: "Blood Pressure",
    heartRate: "Heart Rate",
    lbs: "lbs",
    mmHg: "mmHg",
    ldl: "ldl",
    hdl: "hdl",
    bpm: "bpm",
    cholesterol: "Cholesterol",
    healthIndicators: "Health Indicators",
    appointment: "Appointment",
    appointmentShort: "Appt",
    psychologist: "Psychologist",
    recentVisits: "Recent Visits",
    appointments: "Appointments",
    normalBp: "Normal BP",
    medicationDetailsView: {
        strengthLabel: "Strength",
        instructionsLabel: "Instructions",
        prescriptionInfoLabel: "Prescription Info",
        refillsLeftLabel: "Refills Left",
        lastFillDateLabel: "Last Fill Date",
        prescriberLabel: "Prescriber",
        dosageLabel: "Dosage",
        frequencyLabel: "Frequency",
        getRefillLabel: "Get Refill"
    },
    reminder: {
        title: "Medication Reminder",
        snooze: "Snooze",
        dismiss: "Dismiss"
    },
    infoMsg: "Click on a section to see details view !"
};