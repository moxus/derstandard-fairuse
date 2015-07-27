chrome.webNavigation.onCommitted.addListener(function(e) {
	chrome.cookies.remove({
		url: 'http://derstandard.at/',
		name: 'MGUID'
	});
	},
	{url: [{hostSuffix: 'derstandard.at'}]}
);
