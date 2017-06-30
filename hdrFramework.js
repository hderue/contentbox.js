var hdrContentbox = (function () {
  

  	// Default settings for the framework, they remain global because we need them in multiple functions
  	var hrSettings = {
		width:              50, //kies tussen 25 en 100 
		opacity:            0.2, //kies een opacity tussen 0.0 en 1.0
		speed:              500, // kies een snelheid voor de animatie
		slideEffect:        'fromRight', // kies tussen fromLeft of fromRight
		closePosition:      'closeRight', // kies tussen closeLeft en closeRight
		background:         '#e3e3e3',
		ShadingBox:         'ShadingBox'
	};

	//  If the user fills in custom settings in HTML they will override the default settings
	if(typeof(hrCustoms) !== 'undefined') {
    // Adds default settings to custom settings if not filled in, to make the styling complete
    $.extend(hrSettings, hrCustoms);
	}

	//Global variables for all functions
	var shade        =  $('#schaduw');
	var content      =  $('#content');
	var description  =  $('#beschrijving');
	var close        =  $('#close');
	
	
	var openContentbox = function()
	{
		// Voeg slide richting toe aan contentbox
		content.addClass(hrSettings.slideEffect).animate({
      	width: hrSettings.width+"%"
      	}, hrSettings.speed, function() {
      	});;

		// Plaats de close button binnen de contentbox
		close.addClass(hrSettings.closePosition);

		// Voeg background color toe aan contentbox
		content.css("background-color", hrSettings.background);

		// Voeg background color toe aan contentbox
		close.css("background-color", hrSettings.background).fadeIn(500);

		// Voegt de schaduw om de content heen
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

	$(document).on("click", ".item", openContentbox)
			   .on("click", "#close", closeContentbox);




}());