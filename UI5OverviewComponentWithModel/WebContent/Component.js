sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel" //add the JSON module
	],
	function (SAPUiComponent, JSONModel) {
		"use strict";
		/**
		 * @ui5.overview.comp.model
		 * @author Christophe Taymans
		 * @license Infrabel Private
		 * @constructor
		 * @public
		 * @extends UIComponent
		 * @class
		 * Component definition
		 **/
		var oComponent = SAPUiComponent.extend("ui5.overview.comp.model.Component", {

			metadata: {
				rootView: "ui5.overview.comp.model.views.Main"
			}
		});

		/**
		 * called at component initialisation
		 * @method init
		 * @public
		 * @instance
		 * @redefine
		 * @memberof ui5.overview.comp.model.Component
		 * @author christophe Taymans
		 **/
		oComponent.prototype.init = function () {
			// create an empty JSON model for the component	named 'appData
			// This model is also available on all sub element of the component( view / controller)			
			this.setModel(new JSONModel(), "appData");

			// call the init function of the parent
			SAPUiComponent.prototype.init.apply(this, arguments);
		};
		
		/**
		 * called at component destruction
		 * @method destroy
		 * @public
		 * @instance
		 * @redefine
		 * @memberof ui5.overview.comp.model.Component
		 * @author christophe Taymans
		 **/
		oComponent.prototype.destroy = function () {
			// call the base component's destroy function
			SAPUiComponent.prototype.destroy.apply(this, arguments);
		}

		return oComponent;

	});