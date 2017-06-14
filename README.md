# contentbox.js
A framework that let you show content in a way where the content is as important as images.

============ Code Example ============

The easist way to use contentbox.js is to put the tag with tags in your html page. This way contentbox.js will use his default settings.

Tag for HTML Contentbox element
```
<body>
<div class="Contentbox">
	<div id="schaduw">
	</div>

	<div id="content">
		<div id="beschrijving">
			<h1></h1>
			<p></p>
		</div>

		<div id="close">
		</div>
	</div>
</div>	
<body>

```

Tags for HTML items clicked
```
<article>
	<div onclick="clicked(this);" class="item" id="1"></div>
	<div onclick="clicked(this);" class="item" id="2"></div>
	<div onclick="clicked(this);" class="item" id="3"></div>
	<div onclick="clicked(this);" class="item" id="4"></div>
	<div onclick="clicked(this);" class="item" id="5"></div>
	<div onclick="clicked(this);" class="item" id="6"></div>
	<div onclick="clicked(this);" class="item" id="7"></div>
	<div onclick="clicked(this);" class="item" id="8"></div>
</article>

```

============ Default Settings ============

This are the default settings given to the contentbox

```
var hrSettings = {

width:              70, //kies tussen 25 en 100 
opacity:            0.2, //kies een opacity tussen 0.0 en 1.0
speed:              500, // kies een snelheid voor de animatie
slideEffect:        'fromLeft', // kies tussen fromLeft of fromRight
closePosition:      'closeLeft', // kies tussen closeLeft en closeRight
background:         '#324634',
ShadingBox:         'ShadingBox'

};

```

You can adjust the settings to your own preferences, just change add the following script to your html page and change the values.

```
<script type="text/javascript">

	var hrCustoms = {

	width: 		20, 
	opacity: 	0.8,
	speed: 		1000,

	};

</script>

```

============ Demo ============


============ Motivation ============

This framework was created as an school assignment.
The framework is created to show content in a "lightbox"-way, but in a different style then the classic lightbox.

============ Installation ============

1.	Make sure there is a connection to a jQuery file
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
2.	Make a connection with the contentbox.js
<script src="framework.js"></script>
3.	Place the HTML items from above in your body
4.	Add your own settings for the styling of contentbox.js

