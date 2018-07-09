// registration of the service worker
if ('serviceWorker' in navigator) {

	navigator.serviceWorker
		.register('./sw.js', {
			scope: ''
		})
		.then(function(reg) {
			console.log('Service Worker Registered');
		})
		.catch(function(err) {
			console.log('Service Worker Failed to Register', err);
		});

}
