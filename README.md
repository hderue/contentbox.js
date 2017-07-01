# contentbox.js
A framework that let you show content in a way where the content is as important as images.

============ Code Example ============

The easist way to use contentbox.js is to put the tag with tags in your html page. This way contentbox.js will use his default settings.

Tag for HTML Contentbox element
```
<body>
<div class="hdr-contentbox">
	<div id="shade">
	</div>

	<div id="hdr-content">
		<div id="hdr-description">
		</div>

		<div id="hdr-close">
		<p class="closebutton"></p>
		</div>
	</div>
</div>
	
<body>

```

Tags for HTML items clicked
```
<article>
	<div  class="hdr-item" id="1"><img src="..."></div>
	<div  class="hdr-item" id="2"><img src="..."></div>
	<div  class="hdr-item" id="3"><img src="..."></div>
	<div  class="hdr-item" id="4"><img src="..."></div>
	<div  class="hdr-item" id="5"><img src="..."></div>
	<div  class="hdr-item" id="6"><img src="..."></div>
</article>


```

============ Default Settings ============

This are the default settings given to the contentbox

```
var hrSettings = {
	width:              50, 		//	The width for the contentbox in %
	opacity:            0.2, 		//	Opacity for the background shade
	speed:              500, 		//	Speed for the animation
	slideEffect:        'fromRight', 	// 	The direction the contentbox slides in
	closePosition:      'closeRight', 	// 	The position of the close button
	background:         '#e3e3e3',		//	Background of the contentbox
	ShadingBox:         'ShadingBox' 	//	Variable for the shading in CSS
};

```

You can adjust the settings to your own preferences, just change add the following script to your html page and change the values.
This is an example how you can change the deafult settings to your own personal setting:
```
<script type="text/javascript">

	var hrCustoms = {

	width: 		70, 
	slideEffect:	'fromLeft',
	closePosition:	'closeLeft',
	background:	'#303030'

	};

</script>

```

The personal settings above wil overwrite the default settins. Settings you didn't adjust wil be taken form the default settings and a combination of them wil be the styling of your contentbox.

============ Framework insight ============

hdrFramework.js is written as a private function. This means no other function or scripts can allow to use the variabels from this framework. The result is that your data inside the framework is safe and there can't be any problems with other script, because they can't reach the functions inside hdrFramework.js. Example on how this can be done:

```
var hdrContentbox = (function () {

	// The code and functions come inside here.
	// Other scripts can't acces these functions

}());

```

The framework also had some local global variables. This means they can be used trough all of the code inside of var hdrContentbox but can't be used outside of it. Als the functions in hdrContentbox are private so your data wil be safe. This is based on the Javascript-module-pattern. Example on how this can be done:

```
var openContentbox = function(){

	// This is the code that makes the function private
	// Everything thats inside this code, like variables, cant be used outside this function
	// Variables outside this function are 'local global' for the framework and can be used inside this function and the other 		   functions.
};

```

After the functions have been declared and are ready to be used there is one more thing to do. The onclick function that makes all the other functions work when you click on .hdr-item. Example on how this is done:

```
$(document).on("click", ".hdr-item", openContentbox)
	   .on("click", "#hdr-close", closeContentbox)
	   .on("click", "#shade", closeContentbox);

	   // The object that fires the onclick fires the function that is assigned to it	

```

============ Demo ============

www.hderue.nl/Framework/

============ Motivation ============

This framework was created as an school assignment.
The framework is created to show content in a "lightbox"-way, but in a different style then the classic lightbox.

============ Installation ============

1.	Make sure there is a connection to a jQuery file. - <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
2.	Make a connection with the contentbox.js. - <script src="hdrFramework.js"></script>
3.	Place the HTML items from above in your body.
4.	Add your own settings for the styling of contentbox.js.
5.	Enjoy!

