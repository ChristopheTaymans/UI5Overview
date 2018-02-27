sap.ui.controller("ui5.overview.MVC.controllers.Main", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     */
    onInit: function () {
        debugger;
    },

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     */
    onBeforeRendering: function () {
        debugger;
    },

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.   
     */
    onAfterRendering: function () {
        debugger;
    },

    /**
     * Called when the button is pressed.   
     */
    onButtonPress: function () {
        sap.m.MessageToast.show("Thank you !");
    }
});