var pagesData = [{
    name: "dashboard",
    title: "ダッシュボード"
}, {
    name: "dashboard",
    fakeName: "medications",
    title: "薬",
    isFake: true,
}, {
    name: "dashboard",
    fakeName: "health-indicators",
    title: "ヘルス インジケーター",
    isFake: true
}, {
    name: "dashboard",    
    fakeName: "appointments",
    title: "予定",
    isFake: true
}, {
    name: "patient",
    title: "患者プロファイル"
}, {
    name: "emergency",
    title: "救急"
}, {
    name: "about",
    title: "詳細情報"
}],
patientData = {
    fullName: "John Alexander Smith",
    imageUrl: "assets/images/john-alexander-smith.png",
    gender: "Male",
    dob: "23.12.1975",
    language: "English",
    maritalStatus: "Married",
    address: "1234 E Name St. Apt #201 A. Townville, ST 12345",
    phone: "(123) 456-7890",
    mobilePhone: "(123) 456-7890",
    email: "jsmith@gmail.com",
    allergies: [{
        name: "Pollen",
        value: 62.5,
        reaction: "Hives, Rash, Itchy skin, swelling."
    }, {
        name: "Peanuts and tree nuts",
        value: 37.5,
        reaction: "swelling, itching, shortness of breath."
    }],
    immunization: [{
        date: new Date(2000, 9, 10),
        information: "Tetanus and diphtheria toxoids"
    }, {
        date: new Date(2009, 11, 11),
        information: "Pneumococcal Vaccine"
    }, {
        date: new Date(2010, 9, 25),
        information: "Influenza virus vaccine, IM"
    }]
},

dashboardData = {
    /*------------------------------START of Medications Data--------------------------------------*/
    medicationsData: [{
        pictureClass: "disabled",
        name: "Ibuprofen",
        strength: "800mg",
        dosage: "1 Tablet",
        frequency: "3 time(s) a day",
        instructions: "Take 800mg for soreness and stiffness",
        refillsLeft: 5,
        lastFillDate: new Date(2013, 2, 10),
        prescriber: "Carolans Medical Center"
    }, {
        pictureClass: "clock",
        name: "Atorvastatin",
        strength: "20mg",
        dosage: "1 Tablet",
        frequency: "1 time(s) a day",
        instructions: "Take one tablet at supper",
        refillsLeft: 1,
        lastFillDate: new Date(2013, 5, 25),
        prescriber: "Evans Clinic"
    }, {
        pictureClass: "clock",
        name: "Glipizide",
        strength: "5mg",
        dosage: "1 Tablet",
        frequency: "1 time(s) a day",
        instructions: "Take one tablet daily by mouth with breakfast",
        refillsLeft: 0,
        lastFillDate: new Date(2013, 7, 9),
        prescriber: "Charleston Health Center"
    }, {
        pictureClass: "check",
        name: "Ciprodex OTIC",
        strength: "1%",
        dosage: "1 Tablet",
        frequency: "2 time(s) a day",
        instructions: "Instill four drops to affected ear twice a day for 7 days as directed",
        refillsLeft: 4,
        lastFillDate: new Date(2013, 11, 12),
        prescriber: "Charleston Medical Center"
    }, {
        pictureClass: "check",
        name: "Lipitor",
        strength: "10mg",
        dosage: "1 Tablet",
        frequency: "1 time(s) a day",
        instructions: "Take one tablet at bedtime as directed",
        refillsLeft: 2,
        lastFillDate: new Date(2013, 0, 12),
        prescriber: "Edmonton Clinic"
    }, {
        pictureClass: "clock",
        name: "Nicotrol Inhaler",
        strength: "10mg",
        dosage: "1 Inhalation",
        frequency: "4 time(s) a day",
        instructions: "Use as necessary as directed",
        refillsLeft: 0,
        lastFillDate: new Date(2013, 4, 15),
        prescriber: "St Josephine Memorial Hospital"
    }, {
        pictureClass: "disabled",
        name: "Triatec",
        strength: "2.5g",
        dosage: "1 Capsule",
        frequency: "1 time(s) a day",
        instructions: "Take one capsule in the morning by mouth",
        refillsLeft: 1,
        lastFillDate: new Date(2013, 10, 24),
        prescriber: "Evans Clinic"
    }, {
        pictureClass: "clock",
        name: "Metformin XR",
        strength: "500mg",
        dosage: "2 Tablet",
        frequency: "1 time(s) a day",
        instructions: "Take 2 tablets daily by mouth with meal",
        refillsLeft: 0,
        lastFillDate: new Date(2013, 8, 8),
        prescriber: "Evans Clinic"
    }, {
        pictureClass: "check",
        name: "Hydrocodone",
        strength: "5mg",
        dosage: "1-2 Tablet(s)",
        frequency: "3-4 time(s) a day",
        instructions: "Take 1 to 2 tablets by mouth every 4 to 6 hours as needed for pain",
        refillsLeft: 0,
        lastFillDate: new Date(2013, 6, 22),
        prescriber: "Edmonton Clinic"
    }, {
        pictureClass: "check",
        name: "Indomethacin",
        strength: "25mg",
        dosage: "1-2 Capsule(s)",
        frequency: "2-3 time(s) a day",
        instructions: "Take 1 to 2 capsules 2 or 3 times a day",
        refillsLeft: 1,
        lastFillDate: new Date(2013, 8, 8),
        prescriber: "St. Josephine Memorial Hospital"
    }, {
        pictureClass: "clock",
        name: "Naproxen",
        strength: "500mg",
        dosage: "1 Tablet",
        frequency: "3 time(s) a day",
        instructions: "Take 1 tablet 3 times a day by mouth",
        refillsLeft: 3,
        lastFillDate: new Date(2013, 5, 12),
        prescriber: "Evans Clinic"
    }, {
        pictureClass: "check",
        name: "Clonazepam",
        strength: "0.5mg",
        dosage: "1 Tablet",
        frequency: "1-3 time(s) a day",
        instructions: "Take 1 tablet 1 to 3 times a day by mouth with meals",
        refillsLeft: 3,
        lastFillDate: new Date(2013, 7, 18),
        prescriber: "Charleston Medical Center"
    }, {
        pictureClass: "check",
        name: "Hydrochlorothiazide",
        strength: "12.5mg",
        dosage: "1 Tablet",
        frequency: "1 time(s) a day",
        instructions: "Take 1 tablet by mouth each morning",
        refillsLeft: 2,
        lastFillDate: new Date(2013, 8, 6),
        prescriber: "Evans Clinic"
    }, {
        pictureClass: "clock",
        name: "Clarithromycin",
        strength: "500mg",
        dosage: "1 Tablet",
        frequency: "1 time(s) a day",
        instructions: "Take one tablet daily by mouth before meals",
        refillsLeft: 2,
        lastFillDate: new Date(2013, 11, 12),
        prescriber: "Charleston Medical Center"
    }, {
        pictureClass: "check",
        name: "Amoxicillin",
        strength: "500mg",
        dosage: "1 Capsule",
        frequency: "3 time(s) a day",
        instructions: "Take one capsule by mouth 3 times daily for 10 days until all taken",
        refillsLeft: 0,
        lastFillDate: new Date(2013, 18, 15),
        prescriber: "St. Josephine Memorial Hospital"
    }, {
        pictureClass: "check",
        name: "Metformin HCL",
        strength: "1000mg",
        dosage: "1 Tablet",
        frequency: "1 time(s) a day",
        instructions: "Take one tablet daily by mouth",
        refillsLeft: 5,
        lastFillDate: new Date(2013, 12, 6),
        prescriber: "Edmonton Clinic"
    }],
    /*------------------------------END OF Medications Data--------------------------------------*/

    /*------------------------------START of Appointmens Data--------------------------------------*/
    appointmensData: [{
        type: "Annual Physical Exam",
        physician: "Dr. Joe Barnser",
        day: "Monday",
        date: new Date(2013, 8, 2, 9, 0),
        month: "September",
        place: "Evans Clinic",
        address: "2 Plainsboro road, Township, NJ 08540",
        telephone: "609 853 700",
        notes: "It is required not to take any food within 12 hours prior to the appointment.Water is allowed.Report to Internal Medicine Department on arrival. IM is on the fifth floor, Section B."
    }, {
        type: "Psychologist Appointment",
        physician: "Dr. Billy Dean",
        day: "Tuesday",
        date: new Date(2013, 8, 10, 8, 0),
        month: "September",
        place: "Princeton Health Center",
        address: "150 N.Dean Street,Englewood, NJ 07631",
        telephone: "605 332 468",
        notes: "Report to the Phsychology Department on arrival on the second floor, Section D."
    }, {
        type: "Ophthalmologist",
        physician: "Dr. Gabriel White",
        day: "Wednesday",
        date: new Date(2013, 8, 18, 8, 30),
        month: "September",
        place: "Princeton Health Center",
        address: "150 N.Dean Street,Englewood, NJ 07631",
        telephone: "605 332 468",
        notes: "Arrive 15 minutes before for previous eye checkups. Do not wear any eye make up that may cause inflammation."
    }, {
        type: "Primary Care physician",
        physician: "Dr. Joe Barnser",
        day: "Thursday",
        date: new Date(2013, 8, 26, 9, 30),
        month: "September",
        place: "Eaglewood Medical Center",
        address: "2650 U.S. 130, Cranbury, NJ 08512",
        telephone: "609 123 789",
        notes: "Report to Internal Medicine Department on arrival. IM is on the fifth floor, Section B."
    }, {
        type: "Ophthalmologist",
        physician: "Dr. Gabriel White",
        day: "Tuesday",
        date: new Date(2013, 9, 8, 10, 0),
        month: "October",
        place: "Evans Clinic",
        address: "2 Plainsboro road, Township, NJ 08540",
        telephone: "609 853 700",
        notes: "Arrive 15 minutes before for previous eye checkups. Do not wear any eye make up that may cause inflammation.",
    }, {
        type: "Blood Pressure Check",
        physician: "Nurse Edna Adams",
        day: "Friday",
        date: new Date(2013, 9, 18, 11, 0),
        month: "October",
        place: "Eaglewood Medical Center",
        address: "2650 U.S. 130, Cranbury, NJ 08512",
        telephone: "609.123.789",
        notes: "It is required not to take any food within 12 hours prior to the appointment.Water is allowed.Report to Internal Medicine Department on arrival. IM is on the fifth floor, Section B.",
    }, {
        type: "Gastroentorologist",
        physician: "Dr. John Connors",
        day: "Tuesday",
        date: new Date(2013, 10, 5, 9, 0),
        month: "November",
        place: "Princeton Health Center",
        address: "150 N. Dean Street, Englewood, NJ 07631",
        telephone: "605.332.468",
        notes: "It is not recommended to eat heavy meals before the appointment. Avoid fried food, fat and soda drinks."
    }, {
        type: "Dentist Appointment",
        physician: "Dr. Franklin Walker",
        day: "Wednesday",
        date: new Date(2013, 10, 13, 9, 30),
        month: "November",
        place: "Eaglewood Medical Center",
        address: "2650 U.S. 130, Cranbury, NJ 08512",
        telephone: "609.123.789",
        notes: "It is required to brush your teeth thoroughly before every appointment. You may also use mouth wash.It is not recommended the use of floss right before the appointment as it may cause gum inflammation."
    }, {
        "ID": 9,
        type: "Nutritionist Appointment",
        physician: "Ms Amy Garner",
        day: "Thursday",
        date: new Date(2013, 10, 21, 8, 45),
        month: "November",
        place: "St Josephine Memorial Hospital",
        address: "29th St. & Avenue E., Bayonne, NJ 08536",
        telephone: "607.864.789",
        notes: "Report to the Department of Nutrition on arrival on the second floor."
    }, {
        type: "Psychologist Appointment",
        physician: "Dr. Billy Dean",
        day: "Friday",
        date: new Date(2013, 11, 6, 9, 45),
        month: "December",
        place: "Princeton Health Center",
        address: "150 N.Dean Street,Englewood,NJ 07631",
        telephone: "605.332.468",
        notes: "Report to the Phsychology Department on arrival on the second floor, Section D."
    }, {
        type: "Psychologist Appointment",
        physician: "Dr. Billy Dean",
        day: "Wednesday",
        date: new Date(2014, 1, 19, 10, 30),
        month: "February",
        place: "Princeton Health Center",
        address: "150 N.Dean Street,Englewood,NJ 07631",
        telephone: "605.332.468",
        notes: "Report to the Phsychology Department on arrival on the second floor, Section D."
    }, {
        type: "Dentist Appointment",
        physician: "Dr. Franklin Walker",
        day: "Wednesday",
        date: new Date(2014, 0, 8, 7, 0),
        month: "January",
        place: "Evans Clinic",
        address: "2 Plainsboro road, Township, NJ 08540",
        telephone: "609.853.700",
        notes: "It is required to brush your teeth thoroughly before every appointment. You may also use mouth wash.It is not recommended the use of floss right before the appointment as it may cause gum inflammation."
    }, {
        type: "Dentist Appointment",
        physician: "Dr. Franklin Walker",
        day: "Wednesday",
        date: new Date(2014, 3, 2, 8, 30),
        month: "April",
        place: "Evans Clinic",
        address: "2 Plainsboro road, Township, NJ 08540",
        telephone: "609.853.700",
        notes: "It is required to brush your teeth thoroughly before every appointment. You may also use mouth wash.It is not recommended the use of floss right before the appointment as it may cause gum inflammation."
    }, {
        type: "Primary Care physician",
        physician: "Dr. Joe Barnser",
        day: "Monday",
        date: new Date(2014, 3, 21, 9, 30),
        month: "April",
        place: "Evans Clinic",
        address: "2 Plainsboro road, Township, NJ 08540",
        telephone: "609.853.700",
        notes: "Report to Internal Medicine Department on arrival. IM is on the fifth floor, Section B."
    }, {
        type: "Cardiologist Appointment",
        physician: "Dr. Richard Bridges",
        day: "Tuesday",
        date: new Date(2014, 0, 14, 10, 0),
        month: "January",
        place: "St Josephine Memorial Hospital",
        address: "29th St. & Avenue, Bayonne, NJ 08536",
        telephone: "607.864.789",
        notes: "Report to the Department of Cardiology on the fifth floor, Section A."
    }, {
        type: "Cholesterol Test",
        physician: "Nurse Emilia Olson",
        day: "Thursday",
        date: new Date(2014, 0, 23, 9, 0),
        month: "January",
        place: "Eaglewood Medical Center",
        address: "2650 U.S. 130, Cranbury, NJ 08512",
        telephone: "609.123.789",
        notes: "It is required not to take any food within 12 hours prior to the appointment.Water is allowed.Report to Internal Medicine Department on arrival. IM is on the fifth floor, Section B."
    }, {
        type: "Chiropractor",
        physician: "Dr. Oliver Gray",
        day: "Tuesday",
        date: new Date(2014, 1, 11, 9, 30),
        month: "February",
        place: "Evans Clinic",
        address: "2 Plainsboro road, Township, NJ 08540",
        telephone: "609.853.700",
        notes: "Report to General Medicine Department on arrival on the 1st floor."
    }, {
        type: "Nutritionist Appointment",
        physician: "Dr. George Samson",
        day: "Thursday",
        date: new Date(2014, 1, 27, 11, 0),
        month: "February",
        place: "St Josephine Memorial Hospital",
        address: "29th St. & Avenue E., Bayonne, NJ 08536",
        telephone: "607.864.789",
        notes: "Report to the Psychiatric Department on arrival on the second floor, Section D."
    }, {
        type: "Ophthalmologist",
        physician: "Dr. Gabriel White",
        day: "Friday",
        date: new Date(2014, 2, 7, 9, 15),
        month: "March",
        place: "Eaglewood Medical Center",
        address: "2650 U.S. 130, Cranbury, NJ 08512",
        telephone: "609.123.789",
        notes: "Arrive 15 minutes before for previous eye checkups. Do not wear any eye make up that may cause inflammation."
    }, {
        type: "Dental Radiography",
        physician: "Dr. Franklin Walker",
        day: "Friday",
        date: new Date(2014, 3, 11, 11, 15),
        month: "April",
        place: "St Josephine Memorial Hospital",
        address: "29th St. & Avenue E., Bayonne, NJ 08536",
        telephone: "607.864.789",
        notes: "It is required to brush your teeth thoroughly before every appointment. You may also use mouth wash.It is not recommended the use of floss right before the appointment as it may cause gum inflammation.Do not wear any metal elements from the neck up."
    }],

    recentAppointments: [],

    /*------------------------------END Of Appointmens Data--------------------------------------*/

    indicatorsData: [
        { weight: 142, heartRate: 76, bloodPressureSystolic: 132, bloodPressureDiastolic: 90, cholesterolHDL: 52, cholesterolLDL: 133 },
        { weight: 141, heartRate: 73, bloodPressureSystolic: 121, bloodPressureDiastolic: 80, cholesterolHDL: 48, cholesterolLDL: 121 },
        { weight: 145, heartRate: 75, bloodPressureSystolic: 128, bloodPressureDiastolic: 81, cholesterolHDL: 59, cholesterolLDL: 162 },
        { weight: 139, heartRate: 75, bloodPressureSystolic: 135, bloodPressureDiastolic: 90, cholesterolHDL: 50, cholesterolLDL: 131 },
        { weight: 141, heartRate: 73, bloodPressureSystolic: 126, bloodPressureDiastolic: 82, cholesterolHDL: 58, cholesterolLDL: 153 },
        { weight: 142, heartRate: 80, bloodPressureSystolic: 146, bloodPressureDiastolic: 101, cholesterolHDL: 54, cholesterolLDL: 143 },
        { weight: 143, heartRate: 72, bloodPressureSystolic: 124, bloodPressureDiastolic: 79, cholesterolHDL: 52, cholesterolLDL: 129 },
        { weight: 144, heartRate: 76, bloodPressureSystolic: 133, bloodPressureDiastolic: 88, cholesterolHDL: 47, cholesterolLDL: 116 },
        { weight: 142, heartRate: 76, bloodPressureSystolic: 138, bloodPressureDiastolic: 96, cholesterolHDL: 42, cholesterolLDL: 93 },
        { weight: 139, heartRate: 75, bloodPressureSystolic: 130, bloodPressureDiastolic: 85, cholesterolHDL: 44, cholesterolLDL: 105 },
        { weight: 145, heartRate: 75, bloodPressureSystolic: 125, bloodPressureDiastolic: 84, cholesterolHDL: 49, cholesterolLDL: 121 },
        { weight: 144, heartRate: 71, bloodPressureSystolic: 121, bloodPressureDiastolic: 70, cholesterolHDL: 48, cholesterolLDL: 123 },
        { weight: 139, heartRate: 78, bloodPressureSystolic: 134, bloodPressureDiastolic: 92, cholesterolHDL: 58, cholesterolLDL: 158 },
        { weight: 140, heartRate: 76, bloodPressureSystolic: 127, bloodPressureDiastolic: 85, cholesterolHDL: 43, cholesterolLDL: 100 },
        { weight: 143, heartRate: 72, bloodPressureSystolic: 126, bloodPressureDiastolic: 78, cholesterolHDL: 46, cholesterolLDL: 117 },
        { weight: 143, heartRate: 75, bloodPressureSystolic: 135, bloodPressureDiastolic: 92, cholesterolHDL: 59, cholesterolLDL: 152 },
        { weight: 144, heartRate: 75, bloodPressureSystolic: 136, bloodPressureDiastolic: 92, cholesterolHDL: 43, cholesterolLDL: 96 },
        { weight: 145, heartRate: 76, bloodPressureSystolic: 138, bloodPressureDiastolic: 98, cholesterolHDL: 45, cholesterolLDL: 108 },
        { weight: 139, heartRate: 77, bloodPressureSystolic: 141, bloodPressureDiastolic: 89, cholesterolHDL: 51, cholesterolLDL: 124 },
        { weight: 141, heartRate: 69, bloodPressureSystolic: 125, bloodPressureDiastolic: 82, cholesterolHDL: 60, cholesterolLDL: 158 },
        { weight: 141, heartRate: 78, bloodPressureSystolic: 141, bloodPressureDiastolic: 91, cholesterolHDL: 54, cholesterolLDL: 136 },
        { weight: 140, heartRate: 78, bloodPressureSystolic: 135, bloodPressureDiastolic: 93, cholesterolHDL: 47, cholesterolLDL: 115 },
        { weight: 139, heartRate: 75, bloodPressureSystolic: 131, bloodPressureDiastolic: 88, cholesterolHDL: 42, cholesterolLDL: 95 },
        { weight: 141, heartRate: 70, bloodPressureSystolic: 117, bloodPressureDiastolic: 79, cholesterolHDL: 44, cholesterolLDL: 100 },
        { weight: 143, heartRate: 77, bloodPressureSystolic: 139, bloodPressureDiastolic: 96, cholesterolHDL: 54, cholesterolLDL: 135 },
        { weight: 142, heartRate: 73, bloodPressureSystolic: 128, bloodPressureDiastolic: 78, cholesterolHDL: 47, cholesterolLDL: 117 },
        { weight: 142, heartRate: 73, bloodPressureSystolic: 133, bloodPressureDiastolic: 80, cholesterolHDL: 45, cholesterolLDL: 105 },
        { weight: 145, heartRate: 73, bloodPressureSystolic: 136, bloodPressureDiastolic: 92, cholesterolHDL: 61, cholesterolLDL: 158 },
        { weight: 144, heartRate: 71, bloodPressureSystolic: 120, bloodPressureDiastolic: 74, cholesterolHDL: 59, cholesterolLDL: 152 },
        { weight: 141, heartRate: 74, bloodPressureSystolic: 130, bloodPressureDiastolic: 89, cholesterolHDL: 44, cholesterolLDL: 103 }],
    appointmentRightSectionMonth: "Feb",
},
emergencyData = {
    name: "Emergency",
    bloodType: "A+",
    organDonor: "Yes",
    contacts: [{
        id: 1,
        title: "Family Contact",
        name: "Beth Smith (spouse)",
        address: "6789 W Name St. A Townville, ST 12345",
        phone: "(123) 456-7890",
        mobilePhone: "(123) 456-7890",
        email: "bsmith@gmail.com"
    }, {
        id: 2,
        title: "Primary Doctor",
        name: "Dr. Phil Andersen",
        address: "29th St. & Avenue E., Bayonne, NJ 08536",
        phone: "(123) 456-7890",
        mobilePhone: "(123) 456-7890",
        email: "pandersen@gmail.com"
    }, {
        id: 3,
        title: "Insurance",
        name: "Aetna Inc.",
        phone: "(123) 456-7890",
        address: "151 Farmington Avenue, Hartford, CT 06156",
        email: "info@aetna.com"
    }]
};