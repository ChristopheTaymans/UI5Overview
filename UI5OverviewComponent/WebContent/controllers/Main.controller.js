sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (MVCController, MessageToast) {
    "use strict";
    /**
     * @ui5.overview.simplest.component
     * @author Christophe Taymans
     * @public
     * @extends sap.ui.core.mvc.Controller
     * @class
     * Controller of view Main
     **/
    var oController = MVCController.extend("ui5.overview.simplest.component.controllers.Main", {});

    /**
     * called at controler initialisation
     * @method onInit
     * @public
     * @instance
     * @redefine 
     * @memberof ui5.overview.simplest.component.controllers.Main
     * @author Christophe Taymans
     **/
    // oController.prototype.onInit = function () {
        
    // };


    /**
     * * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * @method onBeforeRendering
     * @public
     * @instance
     * @redefine 
     * @memberof ui5.overview.simplest.component.controllers.Main
     * @author Christophe Taymans
     **/
    // oController.prototype.onBeforeRendering = function () {
        
    // };

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * @method onAfterRendering
     * @public
     * @instance
     * @redefine 
     * @memberof ui5.overview.simplest.component.controllers.Main
     * @author Christophe Taymans
     **/
    // oController.prototype.onAfterRendering = function () {
      
    // };

    /**
     * Called when button is pressed
     * @method onButtonPress
     * @public
     * @instance
     * @redefine 
     * @memberof ui5.overview.simplest.component.controllers.Main
     * @author Christophe Taymans
     **/
    oController.prototype.onButtonPress = function () {
        MessageToast.show("Thank you !");
    };

    return oController;

});