/**
 * Created by dasz on 06/11/16.
 */
window.onload = function () {
    var mapHtml = document.getElementById('map');
    console.log(mapHtml);
    initMap(mapHtml);
    initSearching(map);

    //var btn = document.getElementById("searchPlaces");
	var btn = document.getElementById("testBtn");
	var disp = document.getElementById("testDisp");
	var infowindow //= new google.maps.InfoWindow();
	var type
	
    btn.onclick = function () {
		/*if (e.keyCode == 13) { 
			e.preventDefault(); 
		}*/
		var targetLoc=averageCoords(ownLocation,parentLocation,map);
		infowindow = new google.maps.InfoWindow();
		type=document.getElementById("sel1").value
        //findRoute(map);
        getPlaces(targetLoc, 2000, [type], map);
		map.setZoom(20);
		map.setCenter(targetLoc)
    }

}