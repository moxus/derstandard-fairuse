var EXPIRATION = (60*60*8);
chrome.webNavigation.onCommitted.addListener(function(e) {
	if (e.url.includes('derstandard.at')) {
		chrome.cookies.get({
			url: 'http://derstandard.at/',
			name: 'MGUID'
		}, function(cookie){
			var d = new Date();
			var t = d.valueOf()/1000;
			if(cookie.expirationDate > t+EXPIRATION) {
				chrome.cookies.set({
					url: 'http://derstandard.at/',
					name: cookie.name,
					value: cookie.value,
					domain: cookie.domain,
					path: cookie.path,
					secure: cookie.secure,
					httpOnly: cookie.httpOnly,
					expirationDate: t+EXPIRATION,
					storeId: cookie.storeId
				});
			}
		});
    }}
);
