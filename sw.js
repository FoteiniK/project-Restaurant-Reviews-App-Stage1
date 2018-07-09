/*code from Udactity's FEND nanodegree course.
 *Lesson 13:Introducing the service Worker,
 *with some modifications.*/

//cache set up
let staticCacheName = 'rest-v1';

//adding the files we want to cache
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'./',
				'./index.html',
				'./restaurant.html',
				'./restaurant.html?id=1',
				'./restaurant.html?id=2',
				'./restaurant.html?id=3',
				'./restaurant.html?id=4',
				'./restaurant.html?id=5',
				'./restaurant.html?id=6',
				'./restaurant.html?id=7',
				'./restaurant.html?id=8',
				'./restaurant.html?id=9',
				'./restaurant.html?id=10',
				'./css/styles.css',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg',
				'./js/main.js',
				'./js/dbhelper.js',
				'./data/restaurants.json'
			]);
		})
	);
});

//delete old cache
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('rest-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});
