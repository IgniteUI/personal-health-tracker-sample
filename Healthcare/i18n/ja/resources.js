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
        Text: "読み込んでいます..."
    }
};

// Define application general resource strings
Healthcare.Resources.General = {
    title: "ヘルスケア アシスタント",
    panelMenu: "パネル メニュー",
    errorGettingLocale: "ロケールを取得するときにエラーが発生しました",
    am: "午前"
};

// Define application pages resource strings
Healthcare.Resources.patient = {
    patientTitleLabel: "患者プロファイル",
    patientImageAltLabel: "",
    genderLabel: "性別",
    dobLabel: "生年月日",
    languageLabel: "言語",
    maritalStatusLabel: "配偶者",
    allergiesTitleLabel: "アレルギー",
    immunizationsTitleLabel: "予防接種",
    reactionLabel: "予防接種反応",
    mildLabel: "マイルド",
    moderateLabel: "モデレート",
    severeLabel: "シビア"
};

Healthcare.Resources.emergency = {
    bloodTypeLabel: "血液型",
    organDonorLabel: "臓器提供者"
};

Healthcare.Resources.about = {
    aboutTheShowcaseTitle: "アプリケーションについて",
    aboutTheShowcaseLabel: "個人向けヘルス トラッカー サンプルは、PhoneGap アプリケーション フレームワークで Ignite UI を使用する方法を紹介します。この携帯電話アプリケーション サンプルは、アプリケーションのビューを動的に切り替えるためにタイル ビュー マネージャーを使用します。円チャート、データ チャート、テンプレート化、カスタマイズされたリスト ビュー コントロールで既往歴と次回の通院日を表示します。",
    controlUsedTitle: "Infragistics コントロール:",
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
    medication: "服用",
    pm: "午後",
    instructions: "使用方法",
    medications: "薬",
    weight: "体重",
    bloodPressure: "血圧",
    heartRate: "心拍数",
    lbs: "パウンド",
    mmHg: "mmHg",
    ldl: "ldl",
    hdl: "hdl",
    bpm: "bpm",
    cholesterol: "コレステロール",
    healthIndicators: "ヘルス インジケーター",
    appointment: "予定",
    appointmentShort: "予定",
    psychologist: "心理学者",
    recentVisits: "前回の通院",
    appointments: "予定",
    normalBp: "正常血圧",
    medicationDetailsView: {
        strengthLabel: "強さ",
        instructionsLabel: "使用方法",
        prescriptionInfoLabel: "処方箋の情報",
        refillsLeftLabel: "処方箋の残り",
        lastFillDateLabel: "最後の購入日",
        prescriberLabel: "医師",
        dosageLabel: "投薬量",
        frequencyLabel: "頻度",
        getRefillLabel: "処方箋を取得"
    },
    reminder: {
        title: "投薬の通知",
        snooze: "再通知",
        dismiss: "アラームを消す"
    },
    infoMsg: "セクションにクリックすると、詳細を表示します。"
};