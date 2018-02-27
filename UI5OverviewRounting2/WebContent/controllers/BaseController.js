/*global history */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	/**
	 * @ui5.overview.routing2
	 * @author Christophe Taymans
	 * @public
	 * @extends sap.ui.core.mvc.Controller
	 * @class
	 * base Controller for all view controllers
	 **/
	var baseController = Controller.extend("ui5.overview.routing2.controllers.BaseController");

	/**
	 * Convenience method for accessing the router in every controller of the application.
	 * @method getRouter
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @author Christophe Taymans		
	 * @returns {sap.ui.core.routing.Router} the router for this component
	 **/
	baseController.prototype.getRouter = function () {
		return this.getOwnerComponent().getRouter();
	};

	/**
	 * Convenience method to go back on the previous view 
	 * @method onNavButton
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @author Christophe Taymans		
	 **/
	baseController.prototype.onNavButton = function () {
		var oHistory = History.getInstance();
		var sPreviousHash = oHistory.getPreviousHash();
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.getRouter().navTo("initialRoute", true);
		}
	};

	/**
	 * Convenience method for getting the view model by name in every controller of the application.
	 * @method getModel 
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @param   {string}  {sName} the model name 
	 * @returns {sap.ui.model.Model} the model instance* 
	 * @author Christophe Taymans		
	 **/

	baseController.prototype.getModel = function (sName) {
		return this.getView().getModel(sName);
	};

	/**
	 * Convenience method for setting the view model in every controller of the application.
	 * @method setModel
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @param   {string}  {sName} the model name 
	 * @returns {sap.ui.model.Model} the model instance* 
	 * @author Christophe Taymans		* 
	 **/
	baseController.prototype.setModel = function (oModel, sName) {
		return this.getView().setModel(oModel, sName);
	};

	/**
	 * Convenience method for getting the resource bundle.
	 * @method getText
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @author Christophe Taymans		
	 * @param {string} fTextId the text id
	 * @param {collection} fArgs argument list
	 * @returns {string} the text from the resource bundle.
	 */
	baseController.prototype.getText = function (fTextId, fArgs) {
		return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(fTextId, fArgs);
	};
	/**
	 * Convenience method to set the busy status
	 * @method setBusy
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @param   {string}  bState busy status
	 * @author Christophe Taymans	
	 **/
	baseController.prototype.setBusy = function (bState) {
		this.getView().setBusy(bState);
	};
	/**
	 * Convenience method to set info in the info model
	 * @method setInfo 
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @param   {string}  sProperty property path to settled
	 * @param   {string}  sValue value for the property 
	 * @author Christophe Taymans	
	 **/
	baseController.prototype.setInfo = function (sProperty, sValue) {
		this.getOwnerComponent().getModel("Info").setProperty("/" + sProperty, sValue);
	};
	/**
	 * Convenience method to get info from the info model
	 * @method getInfo 
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController
	 * @param   {string}  sProperty property path to settled
	 * @return  {string}   value of the property 
	 * @author Christophe Taymans	
	 **/
	baseController.prototype.getInfo = function (sProperty) {
		return this.getOwnerComponent().getModel("Info").getProperty("/" + sProperty);
	};

	/**
	 * formatter method to get the status Vs weight
	 * @method weightState 
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController	
	 * @param   {string}  fMeasure weight valued	
	 * @param   {string}  sUnit weight unit 
	 * @return  {string}   status 
	 * @author Christophe Taymans	
	 **/

	baseController.prototype.weightState = function (fMeasure, sUnit) {

		// Boarder values for different status of weight
		var fMaxWeightSuccess = 1;
		var fMaxWeightWarning = 5;
		var fAdjustedMeasure = parseFloat(fMeasure);

		// if the value of fMeasure is not a number, no status will be set
		if (isNaN(fAdjustedMeasure)) {
			return "None";
		} else {

			if (sUnit === "G") {
				fAdjustedMeasure = fMeasure / 1000;
			}

			if (fAdjustedMeasure < 0) {
				return "None";
			} else if (fAdjustedMeasure < fMaxWeightSuccess) {
				return "Success";
			} else if (fAdjustedMeasure < fMaxWeightWarning) {
				return "Warning";
			} else {
				return "Error";
			}
		}
	};

	/**
	 * formatter method to get the status Vs stock quantity
	 * @method stockStatus
	 * @public
	 * @instance		 
	 * @memberof ui5.overview.routing2.controllers.BaseController	
	 * @param   {string}  sStock stock quantity	
	 * @return  {string}   status 
	 * @author Christophe Taymans	
	 **/
	baseController.prototype.stockStatus = function (sStock) {
		if (sStock > 5) {
			return 'Success'
		} else if (sStock > 2) {
			return 'Warning'
		} else return 'Error'
	}
	return baseController;

});