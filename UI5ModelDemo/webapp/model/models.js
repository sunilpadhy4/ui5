sap.ui.define(
	["sap/ui/model/json/JSONModel",
	 "sap/ui/model/xml/XMLModel",
	 "sap/ui/model/resource/ResourceModel"], 
	function(JSONModel, XMLModel, ResourceModel){
		
		return {
			
			createMyModel: function(sPath){
				//Step 1: Create a model object
				var oModel = new JSONModel();
				//Step 2: Set the data to model
				//oModel.setData();
				oModel.loadData(sPath);
				return oModel;
			},
			
			createMyXMLModel: function(sPath){
				var oModelXML = new XMLModel();
				oModelXML.loadData(sPath);
				return oModelXML;
			},
			createResourceModel: function(){
				var oResource = new ResourceModel({
					bundleUrl: "i18n/i18n.properties"
				});
				return oResource;
			}
			
		};
		
});