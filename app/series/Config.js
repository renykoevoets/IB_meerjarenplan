define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "voeg hier het arcgisid van kaart 1 in",
				title: "voeg hier de titel in",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
                        {
				id: "voeg hier het arcgisid van kaart 2 in",
				title: "voeg hier de titel in",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
                       {
				id: "voeg hier het arcgisid van kaart 3 in",
				title: "voeg hier de titel in",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "voeg hier het arcgisid van kaart 4 in",
				title: "voeg hier de titel in",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
		
			{			
				id: "voeg hier het arcgisid van kaart 5 in",
				title: "voeg hier de titel in",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "Stadsuitbreiding",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "Leiden kent een lange geschiedenis. In de tabbladen hieronder leest u meer over de ontwikkeling van de stad.",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: false,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "https://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "https://www.arcgis.com/sharing/rest/content/items"
		}
	}
);