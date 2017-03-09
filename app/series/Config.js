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
				title: "Integrale projecten",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "494ef6c8d56943919a70bbb85433a0e3",
				title: "Groenbeheer",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false			},
			{
				id: "8986d3c6c9c5499b9114d0f1ccacc3c0",
				title: "Fonteinen",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
},
			{
				id: "4361cd474e0d43c5bc8bfe683adcb17d",
				title: "Verkeer",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false

			},
			{
				id: "3693839a3d03436cb3fabbed80a37c33",
				title: "Riolering",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},
			{
				id: "4aba7a0fd588475d96a9e83ee6032e1d",
				title: "Leidingen en gemalen",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "IB meerjarenprogramma",
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