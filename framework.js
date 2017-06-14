//If user uses custom settings
if(typeof(hrCustoms) !== 'undefined') {
    // Add default settings to custom hrCustoms to get a complete set.
    $.extend(hrSettings, hrCustoms);
}

var hrSettings = {

width:              70, //kies tussen 25 en 100 
opacity:            0.2, //kies een opacity tussen 0.0 en 1.0
speed:              500, // kies een snelheid voor de animatie
slideEffect:        'fromLeft', // kies tussen fromLeft of fromRight
closePosition:      'closeLeft', // kies tussen closeLeft en closeRight
background:         '#324634',
ShadingBox:         'ShadingBox'

};

// ----------------------------------------------------------------------------------------------------

// Voeg slide richting toe aan contentbox
$( "#content" ).addClass(hrSettings.slideEffect);

// Plaats de close button binnen de contentbox
$( "#close" ).addClass(hrSettings.closePosition);

// Voeg background color toe aan contentbox
$("#content").css("background-color", hrSettings.background);

// Voegt de schaduw om de content heen
$( "#schaduw").addClass(hrSettings.ShadingBox);

// ----------------------------------------------------------------------------------------------------

// Hieronder staat de code die aangeroepen worden.
// Hier zitten bovenstaan variabele in vewerkt en de HTML elementen
$(function(Box) 
{
// Dit is de functie wanneer een item geactiveerd wordt onClick
 
          $('.item').click(function (Open) {

                $('#schaduw').fadeIn('slow');

                $( "#content" ).animate({
                width: hrSettings.width+"%"
                }, hrSettings.speed, function() {
                });

                $('#beschrijving').fadeIn('slow');

                $('#close').fadeIn('slow');

                

           });
    
// Dit is de functie wanneer de close button geactiveerd wordt.

          $('#close').click(function(Closebutton){

                $( "#content" ).animate({
                width: -hrSettings.width+"%",
                background: hrSettings.background
                }
                , hrSettings.speed, function() {
                });

                $('#schaduw').fadeOut('slow');

                $('#beschrijving').fadeOut('slow');
               
                $('#close').fadeOut('slow');
          });
    
// Dit is de functie wanneer er buiten de contentslider geklikt wordt, dan sluit deze
  
          $('#schaduw').click(function(Closeoutside){

                $( "#content" ).animate({
                width: -hrSettings.width+"%",
                background: hrSettings.background
                }
                , hrSettings.speed, function() {
                });
                  
                $('#schaduw').fadeOut('slow');

                $('#beschrijving').fadeOut('slow');
                  
                $('#close').fadeOut('slow');
          });
    

});

function loadTekstueel(id) {
  var jqxhr =
  $.getJSON('text.json', function(){
      format: "json"
  })
  .done (function(returnData, textStatus, jqXHR){
    // Deze code wordt uitgevoerd wanneer de data succecvol is opgehaald, de data is returnData (geformateerd als array)
    $.each(returnData, function(i, article){
      // article.id
      if (article.id == id) {
        alert ("deze data " + article.title + " mag geladen worden in de juist div");
        //document.write("<h1>JSON with JavaScript example</h1>");

      }

    });

  })
  .fail (function(jqXHR, textStatus, errorThrown){
    // Deze code wordt uitgevoerd wanneer er iets misgegaan is met het JSON bestand ophalen
    alert (errorThrown);

  })
  .always (function(jqXGROrData, textStatus, jqXHROrErrorThrown){
    //  Deze code wordt altijd uitgevoerd, of het nu goed gaat of niet
    alert (jqXGROrData);
  });
  return false;











