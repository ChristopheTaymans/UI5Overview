sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel" //add the JSON module
	],
	function (SAPUiComponent, JSONModel) {
		"use strict";
		/**
		 * @ui5.overview.routing2
		 * @author Christophe Taymans
		 * @license Infrabel Private
		 * @constructor
		 * @public
		 * @extends UIComponent
		 * @class
		 * Component definition
		 **/
		var oComponent = SAPUiComponent.extend("ui5.overview.routing2.Component", {

			metadata: {
				/// point toward manifest for component properties 		 
				/// in the manifest, the data source is defined toward the JSON file located in .models folder		    	
				manifest: "json"
			}
		});

		/**
		 * called at component initialisation
		 * @method init
		 * @public
		 * @instance
		 * @redefine
		 * @memberof ui5.overview.routing2.Component
		 * @author christophe Taymans
		 **/
		oComponent.prototype.init = function () {

            // call the init function of the parent
			SAPUiComponent.prototype.init.apply(this, arguments);

			// create a model at component level to store app info and settings
			var info = {
				"fullScreen": false
			};

			this.setModel(new JSONModel(info), "Info");

			// create the router				
			this.getRouter().initialize();		
			
		};

		return oComponent;
	});