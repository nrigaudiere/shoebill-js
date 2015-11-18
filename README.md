# ShoebillJS
Node module to generate different kind of meta for SEO (open graph and twitter cards)

## Installation

```sh
$ npm install --save shoebill-js
```


##Usage

###JavaScript
```
/* Require and initialise the module*/
var ShoebillJS = require('shoebill-js'); 
var sbjs = new ShoebillJS();

/* Generate your Metas */
sbjs.ogtitle('MyTitle');
sbjs.ogtype('website');
sbjs.ogsitename('My Website');
sbjs.ogdescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.');
sbjs.ogurl('http://www.myurl.com'); 
sbjs.ogimage({
    url: 'http://myurl.com/img/mylogo.png',
    width: 300,
    height: 300
});

sbjs.twcard('summary');
sbjs.twsite('@MyTwitter');

var metaTags = sbjs.toHTML();

/* Use metaTags variable and send your meta to your template ! */
```

###HTML Render
```
<head>
	<meta property="og:title" content="MyTitle">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="My Website">
	<meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.">
	<meta property="og:url" content="http://www.myurl.com">
	<meta property="og:image:url" content="http://www.myurl.com/img/mylogo.png">
	<meta property="og:image:width" content="300">
	<meta property="og:image:height" content="300">
	<meta property="og:image" content="http://www.myurl.com/img/mylogo.png">
	<meta property="twitter:card" content="summary">
	<meta property="twitter:site" content="@MyTwitter">
</head>
```

The available meta are the following : 

	- og:title
	- og:type
	- og:url
	- og:description
	- og:site_name
	- og:determiner
	- og:locale
	- og:locale:alternate
	- og:image
		- og:image:url
		- og:image:secure_url 
		- og:image:type
		- og:image:width
		- og:image:height
	- og:video
		- og:video:secure_url 
		- og:video:type
		- og:video:width
		- og:video:height
	- og:audio
		- og:audio:secure_url 
		- og:audio:type

	- twitter:card
	- twitter:site
	- twitter:creator
	- twitter:title
	- twitter:description
	- twitter:image


License
----

MIT
