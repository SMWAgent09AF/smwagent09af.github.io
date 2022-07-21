function fillTop(a) { // a == [Page title, ID to grey out on navbar]
	
	// Tab title
	var wt = document.createElement("title");
	document.getElementsByTagName("head")[0].append(wt);
	
	wt.innerHTML = a[0] + ' | SMWAgent09AF Plus';
	
	// Insert top content (header + navbar), then make it match the current page
	fetch('/nav.html')
	.then(res => res.text())
	.then(text => {
		let body = document.getElementsByTagName('body')[0]
		body.innerHTML = text + body.innerHTML;
		if (a[1]) {
			var gbc = document.getElementById(a[1]).classList;
			gbc.add('current');
		}
		var pn = document.getElementsByClassName('pagename')[0];
		pn.innerHTML = a[0];
	})
}

function fillLinks() { // This and next function are specifically for replacing shorthand links on the Speedrun page with speedrun.com URLs.
	var links = document.getElementsByClassName('linkfill');
	var t = '';
	for (var i = 0; i < links.length; i++) {
	   fillL(links[i]);
	}
}
function fillL(el) {
	t = el.innerHTML.split('~')[1];
	el.setAttribute('href', 'https://speedrun.com/' + t);
	el.setAttribute('target', '_blank');
	el.innerHTML = el.innerHTML.split('~')[0];
}
