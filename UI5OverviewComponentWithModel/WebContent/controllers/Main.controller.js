sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
	],
	function (SAPMVCController, JSONModel) {
		"use strict";
		/**
		 * @ui5.overview.comp.model
		 * @author Christophe Taymans
		 * @public
		 * @extends sap.ui.core.mvc.Controller
		 * @class
		 * Controller of view Main
		 **/
		var oController = SAPMVCController.extend("ui5.overview.comp.model.controllers.Main", {});

		/**
		 * called at controler initialisation
		 * @method onInit
		 * @public
		 * @instance
		 * @redefine 
		 * @memberof ui5.overview.comp.model.controllers.Main
		 * @author Christophe Taymans
		 **/
		oController.prototype.onInit = function () {

			// create a JSON model with product list				
			var Products = new JSONModel({
				"Products": [{
						"Id": "1",
						"Description": "product1",
						"Price": 10,
						"Currency": "EUR"
					},
					{
						"Id": "2",
						"Description": "product2",
						"Price": 25.3,
						"Currency": "EUR"
					},
					{
						"Id": "3",
						"Description": "product3",
						"Price": 2.4,
						"Currency": "YEN"
					},
					{
						"Id": "4",
						"Description": "product4",
						"Price": 1000,
						"Currency": "USD"
					}
				]
			});

			// set model of view named "viewData" with product list	
			this.getView().setModel(Products, "viewData");
		};
		/**
		 * called when data of view is submitted
		 * @method onSubmit
		 * @public
		 * @instance   
		 * @param    {sap.ui.base.Event}   oEvent 
		 * @memberof ui5.overview.comp.model.controllers.Main
		 * @author Christophe Taymans
		 **/
		oController.prototype.onSubmit = function (oEvent) {

			// get value in input field
			var key = oEvent.getSource().getSelectedKey();

			// get all products of the view model
			var Products = this.getView().getModel("viewData").getProperty('/Products');

			// get the selected product 
			var selectedProduct = Products.find(function (product) {
				return product.Id == key
			});

			// set the application model with the selected product
			this.getView().getModel('appData').setProperty("/Product", selectedProduct);

		};

		/**
		 * called when selection changed on combobox
		 * @method onSelectionChange
		 * @public
		 * @instance   
		 * @param    {sap.ui.base.Event}   oEvent 
		 * @memberof ui5.overview.comp.model.controllers.Main
		 * @author Christophe Taymans
		 **/
		oController.prototype.onSelectionChange = function (oEvent) {
			debugger;

			// Get the app data model (defined in component)
			var appModel = this.getView().getModel('appData');

			// get the selected item of comboBox 
			var selectedItem = oEvent.getParameter("selectedItem");

			// get the binding context of the seleted item
			var oBindingContext = selectedItem.getBindingContext("viewData");

			// get the path to retreive the record in the model
			var sPath = oBindingContext.getPath();

			// get selected product from the model vs path
			var selectedProduct = this.getView().getModel("viewData").getProperty(sPath);

			// //...or you can also get the product item directly from the binding context
			// selectedProduct = oBindingContext.getProperty();
			// selectedProduct = oBindingContext.getObject();

			// set the application model with the selected product
			appModel.setProperty("/Product", selectedProduct);

			// // shorter form :
			// this.getView().getModel('appData')
			// 				.setProperty("/Product", 
			// 							oEvent.getParameter("selectedItem")
			// 								.getBindingContext("viewData")
			// 									.getProperty());

		};

		return oController;

	});