/**
 * UI5 Overview component
 * 
 * @author		Christophe Taymans
 * @memberOf	ui5.overview.simplest.component
 */
sap.ui.define(
	[
	 	"sap/ui/core/UIComponent"
	],
	function(SAPUiComponent){
		"use strict";		
	
    /**
     * @ui5.overview.simplest.component
     * @author Christophe Taymans
     * @license Infrabel Private
     * @constructor
     * @public
     * @extends UIComponent
     * @class
     * Component definition
     **/
		var oComponent = SAPUiComponent.extend("ui5.overview.simplest.component.Component", {			
		    metadata : {
					rootView: "ui5.overview.simplest.component.views.Main"
				}									
		});
		
		return oComponent;
	}
);