sap.ui.define(
    ["ui5/overview/routing2/controllers/BaseController",
        "sap/ui/model/json/JSONModel"
    ],
    function (BaseController, SAPJsonModel) {
        "use strict";
        /**
         * @ui5.overview.routing2
         * @author Christophe Taymans
         * @public
         * @extends sap.ui.core.mvc.Controller
         * @class
         * Controller for master view
         **/
        var oController = BaseController.extend("ui5.overview.routing2.controllers.Master");

        /**
         * called at controler initialisation
         * @method onInit
         * @public
         * @instance
         * @redefine 
         * @memberof ui5.overview.routing2.controllers.Master
         * @author Christophe Taymans
         **/
        oController.prototype.onInit = function () {
            this.getRouter().getRoute("initialRoute").attachPatternMatched(this.onInitialRouteMatched, this);
        };

        /**
         * called at Initial route pattern match 
         * @method onInitialRouteMatched
         * @public
         * @instance
         * @memberof ui5.overview.routing2.controllers.Master
         * @param    {sap.ui.base.Event}   oEvent * 
         * @author Christophe Taymans
         **/
        oController.prototype.onInitialRouteMatched = function (oEvent) {
           this.byId("idProductsTable").removeSelections(true);
        };

        /**
         * called when an item is seletd in the master list 
         * @method _onItemPress
         * @private
         * @instance
         * @memberof ui5.overview.routing2.controllers.Master
         * @param    {sap.ui.base.Event}   oEvent * 
         * @author Christophe Taymans
         **/
        oController.prototype._onItemPress = function (oEvent) {
            // get the binding context of the selected item in the list
            var oBindingContext = oEvent.getParameter("listItem").getBindingContext("ProductSet");
            //  get the model path of the selected item 
            var path = encodeURIComponent(oBindingContext.sPath);
            // trigger a navigation to detail screen
            this.getRouter().navTo(
                "detailRoute", {
                    path: path
                }
            )
        };
    });