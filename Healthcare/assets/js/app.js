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

// Define application helper module
Healthcare.createNS("Healthcare.Helpers");

Healthcare.Helpers.infoPopOver = function () {
    //private methods
    var $infopopup,
        hiddenClass = "hidden",
        timeBeforeShowing = 2000,
        timeOnScreen = 5000;

    var init = function () {
        var $infoPopUpTemplate = $("#information-popup-template");

        $infoPopUpTemplate.html = $.ig.tmpl($infoPopUpTemplate.html(), [{
            msg: Healthcare.Resources.dashboard.infoMsg
        }]);

        setTimeout(function () {
            $("#dashboard").append($infoPopUpTemplate.html);
            $infopopup = $("#information-popup");
            setTimeout(function () {
                $infopopup.addClass(hiddenClass);
            }, timeOnScreen);
        }, timeBeforeShowing);
    }

    init();
};

Healthcare.Helpers.loadIndicator = function (element, text) {
    var htmlTemplate = "<div class='overlay'>${text}</div>";
    this.overlaySelector = ".overlay";
    this.element = "#" + element;
    if ($([this.element, this.overlaySelector].join(" ")).length === 0) {
        $(this.element).addClass("relative");
        text = text || Healthcare.Resources.Helpers.LoadIndicator.Text;
        $(this.element).append($.ig.tmpl(htmlTemplate, {
            text: text
        }));
    }
};

Healthcare.Helpers.loadIndicator.prototype = function () {
    var destroy = function (thisObj, callback) {
        $([thisObj.element, thisObj.overlaySelector].join(" ")).remove();
        $(thisObj.element).removeClass("relative");

        if (callback) {
            callback();
        }
    };

    var destroyWhenTheComponentsAreLoaded = function (components, callback) {
        var that = this, isThereAnyComponentLeft = components.map(function (item) {
            return $([item.selector, item.className].join("")).length === 1;
        }).filter(function (item) {
            return item === false;
        });

        if (isThereAnyComponentLeft.length > 0) {
            setTimeout(function () {
                destroyWhenTheComponentsAreLoaded.call(that, components, callback);
            }, 100);
        } else {
            destroy(this, callback);
        }
    };
    return {
        destroyWhenTheComponentsAreLoaded: destroyWhenTheComponentsAreLoaded
    }
}();

Healthcare.Helpers.chartsHelper = function () {
    var $homeDashboard = $("#dashboard-home"),
        $homeCharts = $homeDashboard.find(".indicator-chart"),
        $homeWeightChart = $homeDashboard.find("#weight-chart-home"),
        $homeBloodPressureChart = $homeDashboard.find("#blood-pressure-chart-home"),
        $homeCholesterolChart = $homeDashboard.find("#cholesterol-chart-home"),
        $tileManagerContainer = $("#dashboard-tile-manager"),
        $charts = $tileManagerContainer.find(".indicator-chart"),
        $heartRateChart = $tileManagerContainer.find("#heart-rate-chart"),
        $weightChart = $tileManagerContainer.find("#weight-chart"),
        $bloodPressureChart = $tileManagerContainer.find("#blood-pressure-chart"),
        $cholesterolChart = $tileManagerContainer.find("#cholesterol-chart"),
        homeWidth = "auto",
        homeHeight = "15%",
        maximizedWidth = "100%",
        maximizedHeight = "15%",
        hiddenClass = "hidden";

    var resizeCharts = function () {
        $homeCharts.igDataChart("option", "width", homeWidth);
    };

    var initCharts = function () {
        var heartRateChartOptions,
            weightChartOptions, 
            bloodPressureChartOptions,
            cholesterolChartOptions,
            weightChartLoadIndicator = new Healthcare.Helpers.loadIndicator($homeWeightChart.attr("id")),
            bloodPressureChartLoadIndicator = new Healthcare.Helpers.loadIndicator($homeBloodPressureChart.attr("id")),
            cholesterolChartLoadIndicator = new Healthcare.Helpers.loadIndicator($homeCholesterolChart.attr("id"));

        $.ig.loader({
            scriptPath: "igniteui/js/",
            cssPath: "igniteui/css/",
            resources: "igDataChart.Category.RangeCategory",
            ready: function () {
                // Heart Rate Options
                heartRateChartOptions = {
                    width: homeWidth,
                    height: homeHeight,
                    pixelScalingRatio: 2,
                    dataSource: dashboardData.indicatorsData,
                    plotAreaBackground: "rgba(153,153,153, 0)",
                    axes: [{
                        majorStroke: "rgba(153,153,153,0)",
                        name: "xAxis",
                        type: "categoryX",
                        label: "heartRate",
                        labelVisibility: "collapsed",
                        stroke: "transparent"
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        labelVisibility: "collapsed",
                        majorStroke: "rgba(153,153,153,0)",
                        stroke: "transparent",
                        minimumValue: 62 // The current min value in the data is 66 Heart Rate.
                    }],
                    series: [{
                        name: "series1",
                        type: "column",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "heartRate",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        outline: "none",
                        brush: "#0f6e5a"
                    }]
                };

                // Weight Options
                weightChartOptions = {
                    width: homeWidth,
                    height: homeHeight,
                    pixelScalingRatio: 2,
                    windowResponse: "immediate",
                    dataSource: dashboardData.indicatorsData,
                    axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        label: "Weight",
                        labelExtent: 30,
                        labelVisibility: "collapsed",
                        majorStroke: "rgba(153,153,153,0)",
                        stroke: "transparent"
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        labelExtent: 50,
                        labelVisibility: "collapsed",
                        majorStroke: "rgba(153,153,153,0)",
                        stroke: "transparent"
                    }],
                    series: [{
                        name: "series1",
                        type: "line",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "weight",
                        isTransitionInEnabled: true,
                        isHighlightingEnabled: true,
                        thickness: 2,
                        brush: "#0f6e5a"
                    }]
                };

                bloodPressureChartOptions = {
                    width: homeWidth,
                    height: homeHeight,
                    pixelScalingRatio: 2,
                    dataSource: dashboardData.indicatorsData,
                    axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        label: "Blood Pressure",
                        labelVisibility: "collapsed",
                        majorStroke: "rgba(153,153,153,0)",
                        stroke: "transparent"
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        labelVisibility: "collapsed",
                        majorStroke: "rgba(153,153,153,0)",
                        stroke: "transparent"
                    }],
                    series: [{
                        type: "rangeArea",
                        name: "series1",
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        lowMemberPath: "bloodPressureSystolic",
                        highMemberPath: "bloodPressureDiastolic",
                        brush: "#7EAFA5"
                    }, {
                        type: "point",
                        name: "series2",
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "bloodPressureSystolic",
                        markerType: "circle",
                        markerBrush: "#0F6E5A"
                    }, {
                        type: "point",
                        name: "series3",
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        valueMemberPath: "bloodPressureDiastolic",
                        markerType: "circle",
                        markerBrush: "#0F6E5A"
                    }],
                    circleMarkerTemplate: {
                        render: function (renderInfo) {
                            var ctx = renderInfo.context,
                                x = renderInfo.xPosition,
                                y = renderInfo.yPosition,
                                size = 3;

                            ctx.beginPath();
                            ctx.fillStyle = renderInfo.data.actualItemBrush().fill();
                            ctx.arc(x, y, size, 0, 2 * Math.PI);
                            ctx.fill();
                        }
                    }
                };

                cholesterolChartOptions = {
                    width: homeWidth,
                    height: homeHeight,
                    pixelScalingRatio: 2,
                    dataSource: dashboardData.indicatorsData,
                    axes: [{
                        name: "xAxis",
                        type: "categoryX",
                        labelVisibility: "collapsed",
                        label: "Cholesterol",
                        majorStroke: "rgba(153,153,153,0)",
                        stroke: "transparent"
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        labelVisibility: "collapsed",
                        majorStroke: "rgba(153,153,153,0)",
                        stroke: "transparent"
                    }],
                    series: [{
                        type: "rangeColumn",
                        name: "series1",
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        lowMemberPath: "cholesterolHDL",
                        highMemberPath: "cholesterolLDL",
                        outline: "none",
                        brush: "#0F6E5A"
                    }]
                };

                // Home charts
                $homeWeightChart.igDataChart($.extend(true, {}, weightChartOptions));
                $homeBloodPressureChart.igDataChart($.extend(true, {}, bloodPressureChartOptions));
                $homeCholesterolChart.igDataChart($.extend(true, {}, cholesterolChartOptions));

                // Tile manager charts
                $heartRateChart.igDataChart(
                    $.extend(true, {}, heartRateChartOptions, {
                        width: maximizedWidth,
                        heigh: maximizedHeight
                    })
                );

                $weightChart.igDataChart(
                    $.extend(true, {}, weightChartOptions, {
                        width: maximizedWidth,
                        heigh: maximizedHeight
                    })
                );

                $bloodPressureChart.igDataChart(
                    $.extend(true, {}, bloodPressureChartOptions, {
                        width: maximizedWidth,
                        heigh: maximizedHeight
                    })
                );

                $cholesterolChart.igDataChart(
                    $.extend(true, {}, cholesterolChartOptions, {
                        width: maximizedWidth,
                        heigh: maximizedHeight
                    })
                );

                // Load indicators
                bloodPressureChartLoadIndicator.destroyWhenTheComponentsAreLoaded([{
                    selector: "#" + $homeBloodPressureChart.attr("id"),
                    className: " .ui-chart-container"
                }]);

                weightChartLoadIndicator.destroyWhenTheComponentsAreLoaded([{
                    selector: "#" + $homeWeightChart.attr("id"),
                    className: " .ui-chart-container"
                }]);

                cholesterolChartLoadIndicator.destroyWhenTheComponentsAreLoaded([{
                    selector: "#" + $homeCholesterolChart.attr("id"),
                    className: " .ui-chart-container"
                }]);

                // IE10 Not rendering charts on load
                setTimeout(resizeCharts, 100);
            }
        });
    };

    return {
        initCharts: initCharts
    };
};

Healthcare.Helpers.tileManagerHelper = function () {
    var $window = $(window),
        $tileManagerContainer = $("#dashboard-tile-manager"),
        $healthIndTile = $(".health-indicators-tile"),
        $tiles = $tileManagerContainer.children(".tile"),
        $charts = $tileManagerContainer.find(".indicator-chart"),
        mainHeaderSelector = ".ui-header",
        tileInnContSelector = ".ui-igtile-inner-container",
        initialStateSelector = ".initial-state",
        innerContainerSelector = ".ui-igtile-inner-container",
        menuPanelOpenedSelector = ".ui-panel-open",
        hiddenClass = "hidden",
        cursorClass = "cursor-pointer",
        mainPanelSelector = ".ui-panel-content-wrap",
        minimizedStateSelector = ".minimized-state",
        maximizedStateSelector = ".maximized-state",
        detalsOverlaySelector = ".details-overlay",
        appointmentDetailsSelector = "#appointment-details",
        medicationDetailsSelector = "#medication-details",
        overflowHiddenClass = "overflow-hidden",
        showHomeClass = "showHome",
        showTileManagerClass = "showTileManager",
        animDur = 500,
        healthIndLRPadding = 20,
        tilesCount = 3;

    var closeMenu = function () {
        var $menuPanelOpened = $(menuPanelOpenedSelector);
        if ($menuPanelOpened.length) {
            // Close the menu panel
            $menuPanelOpened.panel("close");
        }
    };

    var showHomePage = function () {
        var $mainPanel = $(mainPanelSelector);

        $mainPanel
            .addClass(showHomeClass)
            .removeClass(showTileManagerClass);
    };

    var showTileManager = function (index) {
        var $mainPanel = $(mainPanelSelector);
        
        if (index !== undefined && index !== null) {
            $tileManagerContainer
                .igTileManager("option", "animationDuration", 0)
                .igTileManager("maximize", $tileManagerContainer.find("[data-index='" + index + "']"))
                .igTileManager("option", "animationDuration", animDur);
        }

        $mainPanel
            .addClass(showTileManagerClass)
            .removeClass(showHomeClass);
    };

    var createTileManager = function (tileIndex) {
        var items;
        
        // Remove the initial tile's styling
        $tiles.each(function () {
            $this = $(this).outerHeight("100%");
            initialStateTiles = $this.children(initialStateSelector);
            initialStateTiles.removeClass(cursorClass);
            $this.children().not(initialStateTiles).removeClass(hiddenClass);
        });

        // Create configuration based on the tile clicked
        // The clicked tile should be the maximized one in the new configuration
        switch (tileIndex) {
        case 0:
            items = [{ rowIndex: 0, colIndex: 0, rowSpan: 4, colSpan: 2 },
                { rowIndex: 4, colIndex: 0, rowSpan: 1, colSpan: 1 },
                { rowIndex: 4, colIndex: 1, rowSpan: 1, colSpan: 1 }];
            break;
        case 1:
            items = [{ rowIndex: 4, colIndex: 0, rowSpan: 1, colSpan: 1 },
                { rowIndex: 0, colIndex: 0, rowSpan: 4, colSpan: 2 },
                { rowIndex: 4, colIndex: 1, rowSpan: 1, colSpan: 1 }];
            break;
        case 2:
            items = [{ rowIndex: 4, colIndex: 0, rowSpan: 1, colSpan: 1 },
                { rowIndex: 4, colIndex: 1, rowSpan: 1, colSpan: 1 },
                { rowIndex: 0, colIndex: 0, rowSpan: 4, colSpan: 2 }];
            break;
        default:
            break;
        }

        $tileManagerContainer.igTileManager({
            height: $window.height() - $(mainHeaderSelector).outerHeight(true),
            items: items,
            minimizedState: minimizedStateSelector,
            maximizedState: maximizedStateSelector,
            maximizedTileIndex: tileIndex,
            tileMaximizing: function (evt, ui) {
                var $appDetails = $(appointmentDetailsSelector),
                    $medDetails = $(medicationDetailsSelector),
                    $detailsOverlay = $(detalsOverlaySelector);
                
                closeMenu();

                ui.tile.find(innerContainerSelector)
                    .addClass(overflowHiddenClass);

                if (ui.tile.data("index") === 1) {
                    // Hide charts during the animation
                    $charts.addClass(hiddenClass);
                };

                if ($appDetails.length) {
                    $appDetails.remove();
                    $detailsOverlay.remove();
                }

                if ($medDetails.length) {
                    $medDetails.remove();
                    $detailsOverlay.remove();
                }
            },
            tileMaximized: function (evt, ui) {
                ui.tile.find(innerContainerSelector)
                    .removeClass(overflowHiddenClass);

                if (ui.tile.data("index") === 1) {
                    // Show the charts after the animation
                    $charts.removeClass(hiddenClass);
                };
            }
        });
    };

    var reflowNoAnim = function () {
        // Reflow with animation 0.
        // Return the animation to its original value after the reflow.
        $tileManagerContainer.igTileManager("option", "animationDuration", 0);
        $tileManagerContainer.igTileManager("reflow", true);
        $tileManagerContainer.igTileManager("option", "animationDuration", animDur);
    };

    return {
        createTileManager: createTileManager,
        showHomePage: showHomePage,
        showTileManager: showTileManager,
        closeMenu: closeMenu,
        reflowNoAnim: reflowNoAnim
    };
};

Healthcare.Helpers.historyHelper = function () {
    var history,
        backButtonPress = false,
        dashboardHome = "dashboard home",
        dashboardTileManager = "dashboard tile manager",
        patient = "patient",
        emergency = "emergency",
        about = "about",
        prototype = Healthcare.Helpers.historyHelper.prototype;

    // Singelton history
    if (prototype._history === undefined) {
        prototype._history = [];
    }  

    history = prototype._history;

    var addAction = function (action) {
        history.push(action);
    };

    var removeLastAction = function () {
        return history.pop();
    };

    var isBackButtonPress = function () {
        return backButtonPress;
    };

    var setBackButtonPress = function (value) {
        backButtonPress = value;
    };

    var isEmpty = function () {
        return history.length === 0;
    };

    return {
        addAction: addAction,
        removeLastAction: removeLastAction,
        isBackButtonPress: isBackButtonPress,
        setBackButtonPress: setBackButtonPress,
        isEmpty: isEmpty,
        actions: {
            dashboardHome: dashboardHome,
            dashboardTileManager: dashboardTileManager,
            patient: patient,
            emergency: emergency,
            about: about
        }
    };
};

Healthcare.Helpers.formatMinutes = function (date) {
    var result = "";
    if (date.getMinutes() === 0) {
        result += "00"
    } else {
        result += date.getMinutes();
    }

    return result
};

// Define application models
Healthcare.createNS("Healthcare.Models");

Healthcare.Models.pages = function (pages) {
    // private vars
    var menuItemPrefix = "menu-item-";

    // private methods
    var getMenuPages = function () {
        return pages.slice(1, pages.length);
    };

    var notFakePages = $.grep(pages, function (page) {
        return !page.isFake;
    });

    // public methods
    var getAllPages = function () {
        return $.map(notFakePages, function (page) {
            return page.name;
        });
    };

    var getHomePage = function () {
        return pages[0].name;
    };

    var getHomePageTitle = function () {
        return pages[0].title;
    };

    var getMenuItems = function () {
        return $.map(getMenuPages(), function (page) {
            var menuItem = {};

            menuItem.icon = page.name;
            menuItem.href = "#" + page.name;
            menuItem.title = page.title;

            menuItem.class = menuItemPrefix;
            if (page.isFake) {
                menuItem.class += page.fakeName;
            } else {
                menuItem.class += page.name;
            }

            return menuItem;
        });
    };

    // public API
    return {
        getAllPages: getAllPages,
        getHomePage: getHomePage,
        getHomePageTitle: getHomePageTitle,
        getMenuItems: getMenuItems
    };
};

Healthcare.Models.patientProfile = function (patientProfile) {
    var getUpdatedImmunizationsData = function () {
        return $.map(patientProfile.immunization, function (single) {

            single.day = single.date.getDate(); // to escape the fact that day starts from 0);

            single.month = single.date.getMonth() + 1; // to escape the fact that month starts from 0);

            single.year = single.date.getFullYear();

            return single;
        });
    };

    // public methods
    var getFullName = function () {
        return patientProfile.fullName;
    };

    // public methods
    var getPatientProfileData = function () {
        patientProfile.immunization = getUpdatedImmunizationsData();
        return patientProfile;
    };

    // public API
    return {
        getFullName: getFullName,
        getPatientProfileData: getPatientProfileData
    };
};

Healthcare.Models.dashboard = function (dashboard) {
    //private methods
    var getRecentAppointments = function (numberOfRecentAppointments) {
        var indexOfFirstRecentAppointment = dashboard.appointmensData.length - numberOfRecentAppointments;
        return dashboard.appointmensData.slice(indexOfFirstRecentAppointment, dashboard.appointmensData.length);
    };

    var getUpdatedMedications = function (numberOfMedications) {
        var indexOfFirstMeication = dashboard.medicationsData.length - numberOfMedications;
        return dashboard.medicationsData.slice(indexOfFirstMeication, dashboard.medicationsData.length);
    };

    var getUpdatedAppoinmentData = function (numberOfAppointmentToDisplay) {
        var indexOfFirstRecentAppointment = dashboard.appointmensData.length - numberOfAppointmentToDisplay;

        dashboard.appointmensData = dashboard.appointmensData.slice(indexOfFirstRecentAppointment, dashboard.appointmensData.length);

        return $.map(dashboard.appointmensData, function (single) {
            var minutes = Healthcare.Helpers.formatMinutes(single.date);
            single.hour = "";
            single.hour += single.date.getHours() + ":" + minutes + Healthcare.Resources.General.am;

            single.dayOfMonth = "";
            single.dayOfMonth += (single.date.getDay() + 1); // to escape the fact that day starts from 0);

            return single;
        });
    };

    // public methods
    var getDashboardData = function () {

        dashboard.recentAppointments = getRecentAppointments(Healthcare.config.numberOfRecentAppointments);
        dashboard.appointmensData = getUpdatedAppoinmentData(Healthcare.config.numberOfAppointmentToDisplay);
        dashboard.medicationsData = getUpdatedMedications(Healthcare.config.numberOfMedications);
        return dashboard;
    };

    // public API
    return {
        getDashboardData: getDashboardData
    };
};

// Define application core
Healthcare.createNS("Healthcare.Core");

Healthcare.Core.reminder = function (delayBeforeShowingInMiliseconds, snoozeDelayInMiliseconds) {
    //private methods



    var $medicationReminder,
        $dismissButton,
        $snoozeButton,
        hiddenClass = "hidden";

    var bindEvents = function () {
        $snoozeButton.on("click", function () {
            $medicationReminder.addClass(hiddenClass);
            setTimeout(function () {
                $medicationReminder.removeClass(hiddenClass);
            }, snoozeDelayInMiliseconds);
        });

        $dismissButton.on("click", function () {
            $medicationReminder.remove();
        });
    };

    var init = function () {
        var $medicationReminderTemplate = $("#medication-reminder-template");

        $medicationReminderTemplate.html = $.ig.tmpl($medicationReminderTemplate.html().trim(), [{
            reminderView: Healthcare.Resources.dashboard.reminder,
            name: dashboardData.medicationsData[0].name,
            dosage: dashboardData.medicationsData[0].dosage

        }]);

        setTimeout(function () {
            $("#dashboard").append($medicationReminderTemplate.html);
            $medicationReminder = $("#medication-reminder");
            $dismissButton = $("#dismiss-button");
            $snoozeButton = $("#snooze-button");
            bindEvents();
        }, delayBeforeShowingInMiliseconds);
    };

    init();
};

Healthcare.createNS("Healthcare.Core.Pages");

Healthcare.Core.Pages.dashboard = function () {
    var $medicationDetails,
        $appointmentDetails,
        $window = $(window),
        $document = $(document),
        $dashboard = $("#dashboard"),
        $homeDashboard = $("#dashboard-home"),
        $homeTiles = $homeDashboard.find(".tile"),
        $tileManagerContainer = $("#dashboard-tile-manager"),
        $tiles = $tileManagerContainer.children(".tile"),
        mainPanelSelector = ".ui-panel-content-wrap",
        medicationDetailsSelector = "#medication-details",
        appointmentDetailsSelector = "#appointment-details",
        appointmentsViewSelector = "#appointments-view",
        recentAppointmentsViewSelector = "#recent-appointments-view",
        medicationsViewSelector = "#medications-view",
        detailsOverlaySelector = ".details-overlay",
        mainHeaderSelector = ".ui-header",
        menuPanelSelector = ".menu-panel",
        homeBtnClass = "home-btn",
        medicationsMenuClass = "menu-item-medications",
        healthIndicatorsMenuClass = "menu-item-health-indicators",
        appointmentsMenuCLass = "menu-item-appointments",
        patientsMenuClass = "menu-item-patient",
        emergencyMenuClass = "menu-item-emergency",
        aboutMenuClass = "menu-item-about",
        nextMedicationTileClass = "next-medication-tile",
        healthIndicatorsTileClass = "health-indicators-tile",
        nextAppointmentsTileClass = "next-appointment-tile",
        showHomeClass = "showHome",
        showTileManagerClass = "showTileManager",
        dashboardPageId = "dashboard",
        tileManagerHelper = Healthcare.Helpers.tileManagerHelper(),
        chartsHelper = Healthcare.Helpers.chartsHelper(),
        historyHelper = Healthcare.Helpers.historyHelper(),
        tilesCount = 3;

    // Returns the screen height without the menu
    var freeScreenHeight = function () {
        return $window.height() - $(mainHeaderSelector).outerHeight(true);
    };

    var resizeHomeDashboard = function (height) {
        if (!height) {
            height = freeScreenHeight();
        }

        // Set home page sizes
        $homeDashboard.height(height);
        $homeTiles.outerHeight(height / tilesCount);
    };

    var backButtonHandler = function (e) {
        if (!historyHelper.isEmpty()) {
            var backCommand = historyHelper.removeLastAction(),
                actions = historyHelper.actions;

            switch (backCommand) {
            case actions.dashboardHome:
                tileManagerHelper.showHomePage();
                if (!$dashboard.is(':visible')) {
                    historyHelper.setBackButtonPress(true);
                    $.mobile.changePage($dashboard);
                }
                break;
            case actions.dashboardTileManager:
                tileManagerHelper.showTileManager();
                if (!$dashboard.is(':visible')) {
                    historyHelper.setBackButtonPress(true);
                    $.mobile.changePage($dashboard);
                }
                break;
            case actions.patient:
            case actions.emergency:
            case actions.about:
                historyHelper.setBackButtonPress(true);
                $.mobile.changePage($('#' + backCommand));
                break;
            default:
                break;
            }
        } else {
            navigator.app.exitApp();
        }
    };

    var detailsView = function () {
        var detailsCloseButtonSelector = ".details-close",
            detailsViewType = "undefined",
            dataIndex = -1,
            appointmentViewType = "appointments-view";

        // Functions
        var bindEvents = function () {

            document.addEventListener('backbutton', backButtonHandler);

            $dashboard.on("click", ".appointment", function () {
                dataIndex = $(this).attr("data-idx");
                detailsViewType = "appointment";
                appointmentViewType = $(this).parent().attr("id");
                openDetailsView();
            });

            $dashboard.on("click", ".medication", function () {
                dataIndex = $(this).attr("data-idx");
                detailsViewType = "medication";
                openDetailsView();
            });

            $document.on("click", detailsCloseButtonSelector, function () {
                if (detailsViewType != "undefined" && detailsViewType == "medication") {
                    $(medicationDetailsSelector).remove();
                } else if (detailsViewType != "undefined" && detailsViewType == "appointment") {
                    $(appointmentDetailsSelector).remove();
                }

                $(detailsOverlaySelector).remove();
                detailsViewType = "undefined";
            });
        };

        var appendMedicationDetailsView = function () {
            var clickedMedication = dashboardData.medicationsData[dataIndex],
                $medicationDetailsTemplate = $(medicationDetailsSelector + "-template"),
                dosage = clickedMedication.dosage.split(" "),
                frequency = clickedMedication.frequency.split(" ");

            if ($(medicationDetailsSelector).length > 0) {
                $(medicationDetailsSelector).remove();
            }
            $medicationDetails = $(medicationDetailsSelector);

            $medicationDetailsTemplate.html = $.ig.tmpl($medicationDetailsTemplate.html().trim(), [{
                dosage: dosage,
                frequency: frequency,
                clickedMedicationData: clickedMedication,
                lastFillDate: clickedMedication.lastFillDate.toDateString(),
                medicationDetailsView: Healthcare.Resources.dashboard.medicationDetailsView
            }]);

            $dashboard.append($medicationDetailsTemplate.html);
            $medicationDetails = $(medicationDetailsSelector);
        };

        var appendAppointmentDetailsView = function () {
            var clickedAppointment,
                $appointmentDetailsTemplate = $(appointmentDetailsSelector + "-template");

            if (appointmentViewType === "appointments-view") {
                clickedAppointment = dashboardData.appointmensData[dataIndex];
            } else {
                clickedAppointment = dashboardData.recentAppointments[dataIndex];
            }

            if ($(appointmentDetailsSelector).length > 0) {
                $(appointmentDetailsSelector).remove();
            }

            $appointmentDetails = $(appointmentDetailsSelector);

            var formattedTime = clickedAppointment.date.toDateString() + " " + clickedAppointment.hour;

            $appointmentDetailsTemplate.html = $.ig.tmpl($appointmentDetailsTemplate.html().trim(), [{
                //Localize strings as well.
                time: formattedTime,
                clickedAppointmentData: clickedAppointment
            }]);

            $dashboard.append($appointmentDetailsTemplate.html);

            $appointmentDetails = $(appointmentDetailsSelector);
        };

        var openDetailsView = function () {
            if (detailsViewType != "undefined" && detailsViewType == "medication") {
                appendMedicationDetailsView();
            } else if (detailsViewType != "undefined" && detailsViewType == "appointment") {
                appendAppointmentDetailsView();
            }
        };

        var init = function () {
            bindEvents();
        };

        init();
    };

    var bindEvents = function () {
        // Resize home screen and tile manager
        $window.on("resize", function () {
            var height = freeScreenHeight();
            $tileManagerContainer.igTileManager("option", "height", height);
            resizeHomeDashboard(height);
        });

        $window.on("click", function (e) {

            // Close the menu when clicking outside it
            if (!$(e.target)
                    .parents()
                        .is(menuPanelSelector)) {
                tileManagerHelper.closeMenu();
            }
        });

        $(appointmentsViewSelector).on("iglistitemrendered", function (evt, ui) {
            ui.html = $.ig.tmpl('<li class="appointment ui-li-static ui-body-c{EXTRACSS}" data-idx="' + ui.index + '" data-id="${id}" data-theme="c">' +
                "<div class='appointments-left-section'>" +
                    "<div class='appointments-date'>" + ui.item.date.getDate() + "." + (ui.item.date.getMonth() + 1) + "." + ui.item.date.getFullYear() % 100 + "</div>" +
                    "<div class='appointments-day'>${day}</div>" +
                "</div>" +
                "<div class='appointments-right-section'>" +
                    "<div class='right-section-title'>${type}</div>" +
                    "<div><span class='right-section-hour right-section-subTitle'>${hour}</span> - <span class='right-section-subTitle'>${physician}</span></div>" +
                "</div>",
                [ui.item]);
        });

        $(recentAppointmentsViewSelector).on("iglistitemrendered", function (evt, ui) {
            ui.html = $.ig.tmpl('<li class="appointment ui-li-static ui-body-c{EXTRACSS}" data-idx="' + ui.index + '" data-id="${id}" data-theme="c">' +
                "<div class='appointments-left-section'>" +
                    "<div class='appointments-date'>" + ui.item.date.getDate() + "." + (ui.item.date.getMonth() + 1) + "." + ui.item.date.getFullYear() % 100 + "</div>" +
                    "<div class='appointments-day'>${day}</div>" +
                "</div>" +
                "<div class='appointments-right-section'>" +
                    "<div class='right-section-title'>${type}</div>" +
                    "<div><span class='right-section-hour right-section-subTitle'>${hour}</span> - <span class='right-section-subTitle'>${physician}</span></div>" +
                "</div>",
                [ui.item]);
        });

        $(medicationsViewSelector).on("iglistitemrendered", function (evt, ui) {
            ui.html = $.ig.tmpl('<li class="medication ui-li-static ui-body-c{EXTRACSS}" data-idx="' + ui.index + '" data-id="${id}" data-theme="c">' +
                "<div class='medications-left-section'>" +
                    "<div class='sprite-main medications-" + "${pictureClass}" + "'></div>" +
                "</div>" +
                "<div class='medications-right-section'>" +
                    "<div class='right-section-title'>${name}</div>" +
                    "<div class='right-section-subTitle'>${instructions}</div>" +
                "</div>",
                [ui.item]);
        });

        $document.on("pagebeforeshow", function (e, data) {
            var prevPage = data.prevPage,
                pageId = prevPage.attr('id'),
                skip = prevPage.hasClass(medicationsMenuClass) ||
                    prevPage.hasClass(healthIndicatorsMenuClass) ||
                    prevPage.hasClass(appointmentsMenuCLass);

            if (pageId && !skip) {
                if (historyHelper.isBackButtonPress()) {
                    historyHelper.setBackButtonPress(false);
                } else {
                    if (pageId === dashboardPageId) {
                        if ($dashboard.find(mainPanelSelector)
                                .hasClass(showTileManagerClass)) {
                            historyHelper.addAction(
                                historyHelper.actions.dashboardTileManager);
                        } else {
                            historyHelper.addAction(
                                historyHelper.actions.dashboardHome);
                        }
                    } else {
                        historyHelper.addAction(pageId);
                    }
                }
            }
        });

        // Bind events after the tileManagerContainer variable is initialized
        $document.on("pagebeforechange", function (e, data) {
            // Pagebeforechange is fired twice for each page change.
            // Handle the event only once
            if (typeof data.toPage !== 'string' && $tileManagerContainer !== undefined) {
                var index,
                    link = data.options.link,
                    fromPage = data.options.fromPage,
                    toPage = data.toPage,
                    $mainPanel = $(mainPanelSelector);

                if (link) {
                    if (link.hasClass(homeBtnClass)) {
                        if ($mainPanel.hasClass(showTileManagerClass)) {
                            tileManagerHelper.showHomePage();

                            // Navigation from tile manager to home on dashboard page
                            if (toPage.is($dashboard) && fromPage.is($dashboard)) {
                                historyHelper.addAction(
                                    historyHelper.actions.dashboardTileManager);
                            }
                        }
                    } else {

                        if (link.hasClass(medicationsMenuClass)) {
                            index = 0;
                        } else if (link.hasClass(healthIndicatorsMenuClass)) {
                            index = 1;
                        } else if (link.hasClass(appointmentsMenuCLass)) {
                            index = 2;
                        }

                        if (index != undefined && !$(":animated").length) {
                            if (fromPage.is('#dashboard') && $mainPanel.hasClass(showTileManagerClass)) {
                                $tileManagerContainer.igTileManager(
                                    "maximize", $tileManagerContainer.find("[data-index='" + index + "']"));
                            } else {
                                tileManagerHelper.showTileManager(index);
                            }
                        }
                    }

                    if ($(appointmentDetailsSelector).length > 0) {
                        $(appointmentDetailsSelector).remove();
                        $(detailsOverlaySelector).remove();
                    } else if ($(medicationDetailsSelector).length > 0) {
                        $(medicationDetailsSelector).remove();
                        $(detailsOverlaySelector).remove();
                    }
                }
            }
        });

        $document.on("pagechange", function (e, data) {
            var $fromPage = data.options.fromPage,
                $toPage = data.toPage;

            // Reflow the tile manager when changing to its page
            if ($toPage.is($dashboard) &&
                $dashboard.find(mainPanelSelector)
                    .hasClass(showTileManagerClass)) {
                tileManagerHelper.reflowNoAnim();
            }

            if ($fromPage.is($dashboard) && $toPage.is($dashboard)) {
                // Close the menu on transition between the dashboard states
                tileManagerHelper.closeMenu();
            }
        });

        $homeTiles.click(function () {
            var index,
                $this = $(this);

            historyHelper.addAction(historyHelper.actions.dashboardHome);

            if ($this.hasClass(nextMedicationTileClass)) {
                index = 0;
            } else if ($this.hasClass(healthIndicatorsTileClass)) {
                index = 1;
            } else if ($this.hasClass(nextAppointmentsTileClass)) {
                index = 2;
            }

            tileManagerHelper.showTileManager(index);
        });
    };

    var createUI = function () {
        chartsHelper.initCharts();
        // Resize the home dashboard after the page header is rendered.
        resizeHomeDashboard();
        tileManagerHelper.createTileManager(0);
        Healthcare.Helpers.infoPopOver();
    };

    var init = function () {
        bindEvents();
        setTimeout(createUI, 0);
        detailsView();
        // Pre resize the dashboard to have better layout
        // transition after the page header is rendered.
        resizeHomeDashboard();
    };

    init();
};

Healthcare.Core.Pages.patient = function () {
    var init = function () {
        var $allergies = $(".allergies");

        $.ig.loader({
            resources: "igLinearGauge",
            ready: function () {
                $allergies.igLinearGauge({
                    height: "28px",
                    width: "100%",
                    minimumValue: 0,
                    maximumValue: 75,
                    value: 0,
                    scaleEndExtent: 0.9,
                    fontBrush: "#333333",
                    font: "10px Open Sans",
                    backingBrush: "transparent",
                    backingOutline: "transparent",
                    tickBrush: "transparent",
                    minorTickBrush: "transparent",
                    tickStartExtent: 0.02,
                    tickEndExtent: 0.2,
                    needleShape: "rectangle",
                    // Outer part of liner gauge needle
                    needleOuterExtent: .7,
                    needleOuterBaseWidth: .5,
                    needleOuterPointWidth: .5,
                    // Middle part of liner gauge needle
                    needleOuterPointExtent: .6,
                    needleInnerPointExtent: .1,
                    needleOuterPointWidth: .3,
                    needleInnerPointWidth: .3,
                    // Inner part of liner gauge needle
                    needleInnerPointExtent: .1,
                    needleInnerExtent: 0,
                    needleInnerPointWidth: .3,
                    needleInnerBaseWidth: .1,
                    // Needle design
                    needleBrush: "#5D696E",
                    needleOutline: "white",
                    needleStrokeThickness: 2,
                    needleBreadth: 100,
                    interval: 12.5,
                    labelsPostInitial: 12.5,
                    formatLabel: function (ui, args) {
                        switch (args.label) {
                            case "12.5":
                                args.label = Healthcare.Resources.patient.mildLabel;
                                break;
                            case "37.5":
                                args.label = Healthcare.Resources.patient.moderateLabel;
                                break;
                            case "62.5":
                                args.label = Healthcare.Resources.patient.severeLabel;
                                break;
                            case "25":
                            case "50":
                            case "75":
                                args.label = "";
                                break;
                        }
                    },
                    ranges: [{
                        name: "bad",
                        startValue: 0,
                        endValue: 25,
                        brush: "#749F1A",
                        outline: "transparent"
                    }, {
                        name: "acceptable",
                        startValue: 25,
                        endValue: 50,
                        brush: "#EDC951",
                        outline: "transparent"
                    }, {
                        name: "good",
                        startValue: 50,
                        endValue: 75,
                        brush: "#CC333F",
                        outline: "transparent"
                    }]
                });

                $($allergies[0]).igLinearGauge("option", "value", patientData.allergies[0].value);
                $($allergies[1]).igLinearGauge("option", "value", patientData.allergies[1].value);
            }
        });
    };

    setTimeout(init, 100);
};

Healthcare.Core.Pages.emergency = function () {
    var bindEvents = function () {
        $("#contacts-list-view").on("iglistitemrendered", function (evt, ui) {
            ui.html = $.ig.tmpl(
                '<li class="emergency-info-container ui-li-static ui-body-c{EXTRACSS}" data-idx="' +
                ui.index + '" data-id="${id}" data-theme="c">' +
                '<div class="subpage-header"><h2 class="ui-li-heading subpage-header"><span class="page-header-icon"></span>${title}</h2></div>' +
                '<h3>${name}</h3>' +
                "<div class='emergency-regular-text'><span class='sprite-main patient-icon-adr'></span>${address}</div>" +
                "<span class='sprite-main patient-icon-phone'></span><span class='emergency-regular-text'>${phone}</span>" +
                "<span class='sprite-main patient-icon-mobile'></span><span class='emergency-regular-text'>${mobilePhone}</span>" +
                "<div class='emergency-regular-text'><span class='sprite-main patient-icon-email'></span>${email}</div></li>", [ui.item]);
        });
    };

    var init = function () {
        bindEvents();
    };

    init();
};

Healthcare.Core.Pages.manager = function (context) {
    // private methods
    var init = function () {
        var url,
            pageTemplateHtml = $("#page-template").html().trim(),
            $newPage,
            $menuPanel,
            $currentPageTemplate,
            compliedPageTemplate,
            compliedCurrentPageTemplate,
            menuPanelTemplateHtml = "<ul>" +
            "{{each ${menuItems} }}<li><a href='${menuItems.href}' class=${menuItems.class} data-role='button' data-icon='${menuItems.icon}'>${menuItems.title}</a></li>{{/each}}" +
            "</ul>",
            compliedMenuPanelTemplate,
            menuPanelPrefixSelector = "#menu-panel-",
            pageTemplatePrefixSelector = "#page-template-",
            pageContentSelector = "div[data-role='content']",
            currentPageTemplateData;

        $.each(context.allPages, function (index, page) {
            var i,
                len,
                medication;
            
            // Prepare the page structure
            compliedPageTemplate = $.ig.tmpl(pageTemplateHtml, [{
                title: context.resources.General.title,
                subtitle: context.subtitle,
                homePage: context.homePage,
                homePageText: context.homePageTitle,
                menuPanelText: context.resources.General.panelMenu,
                page: page
            }]);

            $newPage = $(compliedPageTemplate);

            compliedMenuPanelTemplate = $.ig.tmpl(menuPanelTemplateHtml, [{
                menuItems: context.menuItems
            }]);

            $menuPanel = $(compliedMenuPanelTemplate);

            $newPage.find(menuPanelPrefixSelector + page).append($menuPanel);

            $currentPageTemplate = $(pageTemplatePrefixSelector + page);
            if ($currentPageTemplate.length > 0) {
                currentPageTemplateData = {};

                // Get localization resources for specific page
                if (context.resources[page] !== undefined) {
                    $.extend(currentPageTemplateData, context.resources[page]);
                }

                // Get data for specific page
                if (window[page + "Data"] !== undefined) {
                    $.extend(currentPageTemplateData, window[page + "Data"]);
                }

                // Convert medications lastFillDate to string
                // Adds lastFillDateStr property
                if (page === "dashboard") {
                    len = currentPageTemplateData.medicationsData &&
                        currentPageTemplateData.medicationsData.length;
                    for (i = 0; i < len; i++) {
                        medication = currentPageTemplateData.medicationsData[i];
                        medication.lastFillDateStr = medication.lastFillDate.toDateString();
                    }
                }

                compliedCurrentPageTemplate = $.ig.tmpl($currentPageTemplate.html().trim(), [
                    currentPageTemplateData
                ]);

                $currentPageTemplate = $(compliedCurrentPageTemplate);

                $newPage.find(pageContentSelector).append($currentPageTemplate);
            }

            // Append the new page into pageContainer
            $newPage.appendTo($.mobile.pageContainer);

            // Use this to init components 
            $("#" + page).on("pagecreate", function (ev) {
                var pageReference = Healthcare.Core.Pages[page];

                if (pageReference !== undefined) {
                    pageReference();
                }

                setTimeout(function () {
                    $("a[href='#" + context.homePage + "']").removeClass("ui-btn-left");
                }, 100);
            });
        });

        if (Healthcare.config.isWP) {
            url = window.location.href;
            url = url.split("#").pop().split("?").pop();
            url = url.replace(url.substring(url.lastIndexOf("/") + 1), "index.html#" + context.homePage);
        } else {
            url = "#" + context.homePage;
        }

        $.mobile.changePage(url, {
            transition: "none",
            reloadPage: false,
            changeHash: false
        });
    };

    init();
};

// Define entry point for application
Healthcare.init = function () {
    var $title = $("title"),
        core = Healthcare.Core,
        res = Healthcare.Resources,
        patientProfileModel = Healthcare.Models.patientProfile(patientData),
        pagesModel = Healthcare.Models.pages(pagesData),
        dashboardModel = Healthcare.Models.dashboard(dashboardData);

    dashboardData = dashboardModel.getDashboardData();
    patientData = patientProfileModel.getPatientProfileData();

    $title.text(res.General.title);

    core.Pages.manager({
        allPages: pagesModel.getAllPages(),
        menuItems: pagesModel.getMenuItems(),
        homePage: pagesModel.getHomePage(),
        homePageTitle: pagesModel.getHomePageTitle(),
        subtitle: patientProfileModel.getFullName(),
        resources: res
    });

    core.reminder(Healthcare.config.reminder.delayBeforeShowingInMiliseconds,
        Healthcare.config.reminder.snoozeDelayInMiliseconds);
};