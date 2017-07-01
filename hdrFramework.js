//Author: Hobie de Rue
//Author URL: https://www.hderue.nl/
//Author Email: hobiederue@gmail.com

var hdrContentbox = (function () {
  

  	// Default settings for the framework, they remain global because we need them in multiple functions
  	var hrSettings = {
		width:              50, 			//	The width for the contentbox in %
		opacity:            0.2, 			//	Opacity for the background shade
		speed:              500, 			//	Speed for the animation
		slideEffect:        'fromRight', 	// The direction the contentbox slides in
		closePosition:      'closeRight', 	// The position of the close button
		background:         '#e3e3e3',		//	Background of the contentbox
		ShadingBox:         'ShadingBox' 	//	Variable for the shading in CSS
	};

	//  If the user fills in custom settings in HTML they will override the default settings
	if(typeof(hrCustoms) !== 'undefined') {
    // Adds default settings to custom settings if not filled in, to make the styling complete
    $.extend(hrSettings, hrCustoms);
	}

	//Global variables for all functions
	var shade        =  $('#shade'),
		content      =  $('#hdr-content'),
		description  =  $('#hdr-description'),
		close        =  $('#hdr-close');
	
	
	var openContentbox = function()
	{
		// Add slide effect for the contentbox
		content.addClass(hrSettings.slideEffect).animate({
      	width: hrSettings.width+"%"
      	}, hrSettings.speed, function() {
      	});;

		// Place close button inside the contentbox
		close.addClass(hrSettings.closePosition);

		// Adds background to contentbox
		content.css("background-color", hrSettings.background);

		// Adds background to the close button
		close.css("background-color", hrSettings.background).fadeIn(500);

		// Adds the shading for the background
		shade.addClass(hrSettings.ShadingBox).fadeIn(500);;
   	
    	description.delay(500).fadeIn(500);   
	
    	var message = 'De contentbox is succesvol geopend';	
    	console.log(message); 
	};

	var closeContentbox = function()
	{
	 	content.animate({
      	width: -hrSettings.width+"%",
      	background: hrSettings.background
      	}, hrSettings.speed, function() {
      	});

    	shade.fadeOut(500);

    	description.fadeOut(500);
               
    	close.fadeOut(500);

    	var message = 'De contentbox is succesvol gesloten';
    	console.log(message); 
	};   

	var _loadText = function()
	{
		var jqxhr = $.getJSON('text.json', function(){
		      format: "json"
		 })
		.done (function(returnData, textStatus, jqXHR){
		// Deze code wordt uitgevoerd wanneer de data succecvol is opgehaald, de data is returnData (geformateerd als array)
		  $.each(returnData, function(i, article){
			// article.id
		    if (article.id == item.id) {
		    	alert ("deze data " + article.title + " mag geladen worden in de juist div");
		        //document.getElementById("beschrijving").innerHTML=data.firstName;
		    }
     	  });

		  })
		  .fail (function(jqXHR, textStatus, errorThrown){
		    // Deze code wordt uitgevoerd wanneer er iets misgegaan is met het JSON bestand ophalen
		    alert (errorThrown);

		  })
		  .always (function(jqXHROrData, textStatus, jqXHROrErrorThrown){
		    //  Deze code wordt altijd uitgevoerd, of het nu goed gaat of niet
		    alert (textStatus);
		  });

		  return false;
	};	  

	$(document).on("click", ".hdr-item", openContentbox)
			   .on("click", "#hdr-close", closeContentbox)
			   .on("click", "#shade", closeContentbox);






}());