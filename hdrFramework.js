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

	var shade        =  $('#schaduw');
	var content      =  $('#content');
	var description  =  $('#beschrijving');
	var close        =  $('#close');

	var Style = function (){
		// Voeg slide richting toe aan contentbox
		content.addClass(hrSettings.slideEffect);

		// Plaats de close button binnen de contentbox
		close.addClass(hrSettings.closePosition);

		// Voeg background color toe aan contentbox
		content.css("background-color", hrSettings.background);

		// Voeg background color toe aan contentbox
		close.css("background-color", hrSettings.background);

		// Voegt de schaduw om de content heen
		shade.addClass(hrSettings.ShadingBox);
	};

	function openContentbox ()
	{
 		shade.fadeIn(500);

    content.animate({
      width: hrSettings.width+"%"
      }, hrSettings.speed, function() {
      });

    description.delay(500).fadeIn(500);


    close.fadeIn(500);
	};

	


$(document).on("click", ".item", openContentbox)

console.log(Style);


})();