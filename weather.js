$(document).ready(function(){
	$('#submitWeather').click(function(){
		
		var city= $("#city").val();
		
		if(city=='moscow','London','Mumbai','Delhi','Lucknow','Pune','Kochi','Kanpur','Bhopal','Jaipur','Ahmedabad','Vadodara','Agra','Jammu','karachi','Lahore','Mecca','Madina','Goa','Kerala','Surat','colombo','sydney','California','New Jersey','Texas','Georgia','Washington','Hawai','Virginia','florida','Arizona','Alaska','Alabama','thane')
		{
			
			$.ajax({
				url:'https://api.openweathermap.org/data/2.5/weather?q='+ city +"&units=metric"+
				"&APPID=5b0e198b57a1c8cf665801228e6d82ba",
				type:"GET",
				dataType:'jsonp',
				success:function(data){
					var widget = show(data);
					$("#show").html(widget);
					$("#city").val('');
				}
				 
				});		
		}
});
});

function show(data){
 return "<h2 > Current Weather for" + data. name + " , "+ data.sys.country +"</h2>"+
        "<h3><strong>Weather</strong>:"+data.weather[0].main +"</h3>"+
        "<h3><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+data.weather[0].description +"</h3>"+
        "<h3><strong>Temperature</strong>:"+data.main.temp + "&deg;C</h3>"+
		"<h3><strong>Pressure</strong>:"+data.main.pressure + "hPa</h3>"+
		"<h3><strong>Humidity</strong>:"+data.main.humidity + "%</h3>"+
		"<h3><strong>Wind Speed</strong>:"+data.wind.speed + "m/s</h3>"+
		"<h3><strong>Wind Direction</strong>:"+data.wind.direction + "&deg;</h3>"
		
}


