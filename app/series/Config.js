define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "0ba86f62b67c4e0e9138d06e27e90df2",
				title: "Totale meerjarenplanning",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},				
			{
				id: "4112c1646c594718a4d579b762a101aa",
				title: "Civiele Kunstwerken",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "3fe26e5d39d449a2acd9c45a2f2f9190",
				title: "Groen",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "e171a0a354d34e1ba06b95d1b0d1631f",
				title: "Installaties",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "2b951ec14a564ca093dfc8d48f6ed30c",
				title: "Riolering",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "8a5dd201c72748feac9c6e9d9c993046",
				title: "Spelen",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "946f92656fa84353a0c01e4024a48b22",
				title: "Verkeer",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "Integrale projecten meerjarenprogramma",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			//subtitle: "",
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
