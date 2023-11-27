sap.ui.define(
	["sap/ui/core/format/NumberFormat"], 
function(standardNumberFormatter){
	
	return {
		//it will convert the input to upper case
		getMeName: function(inp){
			if(inp){
				return inp.toUpperCase();
			}
		},
		//formatting some currency
		getFormattedCurrency: function(num, numUnit){
			var oLocale = new sap.ui.core.Locale("en-US");
			var oFormatOptions = {
			    showMeasure: true,
			    currencyCode: false,
			    currencyContext: 'standard'
			};
			var oCurrencyFormat = standardNumberFormatter.getCurrencyInstance(oFormatOptions, oLocale);
			var result = oCurrencyFormat.format(num, numUnit);
			return result;
		}
	};
	
});