sap.ui.define(
	["ui5/overview/routing2/controllers/BaseController",
		"sap/ui/model/Context",
		"sap/ui/core/routing/History"
	],
	function (BaseController, ContextBinding, History) {
		"use strict";
		/**
		 * @ui5.overview.routing2
		 * @author Christophe Taymans
		 * @public
		 * @extends sap.ui.core.mvc.Controller
		 * @class
		 * Controller for master view
		 **/
		var oController = BaseController.extend("ui5.overview.routing2.controllers.Detail");

		/**
		 * called at controler initialisation
		 * @method onInit
		 * @public
		 * @instance
		 * @redefine 
		 * @memberof ui5.overview.routing2.controllers.Detail
		 * @author Christophe Taymans
		 **/
		oController.prototype.onInit = function () {			
			this.getRouter().getRoute("detailRoute").attachPatternMatched(this.onDetailRouteMatched, this);
			this.getRouter().getRoute("fullScreenRoute").attachPatternMatched(this.onDetailRouteMatched, this);
					};

		/**
		 * call the full screen mode
		 * @method _goToFullScreen
		 * @public
		 * @instance			
		 * @memberof ui5.overview.routing2.controllers.Detail
		 * @author Christophe Taymans
		 **/
		oController.prototype._goToFullScreen = function () {

			var oBindingContext = this.getView().getBindingContext("ProductSet");

			var path = encodeURIComponent(oBindingContext.sPath);

			this.setInfo('fullScreen', true);

			this.getRouter().navTo(
				"fullScreenRoute", {
					path: path
				}
			)
		};


		/**
		 * called at Initial route pattern match 
		 * @method onInitialRouteMatched
		 * @public
		 * @instance
		 * @memberof ui5.overview.routing2.controllers.Master
		 * @param    {sap.ui.base.Event}   oEvent 
		 * @author Christophe Taymans
		 **/
		oController.prototype.onDetailRouteMatched = function (oEvent) {
            // get the named Model ProductSet
			var oModel = this.getModel("ProductSet");

			// get URL argument "path" given by the router and that hold the model path of the selected item in master view
			var sPath = decodeURIComponent(oEvent.getParameter("arguments").path);

			// create a new binding context on the selected item
			var oDetailBindingCtx = new ContextBinding(oModel, sPath);
			// assign the binding context to the view
			this.getView().setBindingContext(oDetailBindingCtx, "ProductSet"); //since the model is named, always give the name to the view
		};

		/**
		 * Convenience method to go back on the previous view 
		 * @method onNavButton
		 * @public
		 * @instance	
		 * @redefine	 
		 * @memberof ui5.overview.routing2.controllers.BaseController
		 * @author Christophe Taymans		
		 **/
		oController.prototype.onNavButton = function () { ///redefined function from basecontroller

			this.setInfo('fullScreen', false);

		// call the parent function            	 
			BaseController.prototype.onNavButton.apply();
		}
	});