This is a sample application using Ionic 3 and Leaflet with Leaflet.TileLayer.MBTiles.
Since I discovered a better version of [Leaflet.TileLayer.MBTiles](https://www.npmjs.com/package/Leaflet.TileLayer.MBTiles) called [leaflet-tilelayer-mbtiles]https://www.npmjs.com/package/leaflet-tilelayer-mbtiles I modified the lib to use it with Ionic 3 on native mobile apps (Android and iOS).


 ## Get it running
 * Clone this repository: `https://github.com/0nza1101/ionic3-leaflet-mbtiles.git`.
 * Run `npm install` from the project root.
 * If you do not install the ionic CLI (`npm install cordova ionic -g`)
 * Copy `src/index-PLATFORM.ts` to `node_modules/leaflet-tilelayer-mbtiles/` and remove 'index.ts' then rename 'index-PLATFORM' to 'index.ts'.
 * For Android only Copy `src/index-Android.js` to `node_modules/leaflet-tilelayer-mbtiles/` and remove 'index.js' then rename 'index-Android' to 'index.js'.
 * For Android only change `node_modules/leaflet-tilelayer-mbtiles/tsconfig.json` to
 ```typescript
 {
     "compilerOptions": {
         "noImplicitAny": false,
         "target": "es5",
         "lib": [
           "dom",
           "es2015",
           "es2015.promise"
         ],
         "module": "es2015",
         "moduleResolution": "node"
     }
 }
 ```
 * Run `ionic serve` in a terminal from the project root.

 Both of platform library are working inside browser.
 I was forced to create two versions since iOS 9 did not allow local XMLHttpRequest.
 I know it's tricky to get this working for a specific platform, If u have a better solution don't hesitate to make a PR.

 ## How to use it
```typescript
let mb = L.tileLayer.mbTiles('assets/tiles/countries-raster.mbtiles', {
  minZoom: 0,
  maxZoom: 8
}).addTo(this.map);

mb.on('databaseloaded', function(ev) {
  console.info('MBTiles DB loaded', ev);
});
mb.on('databaseerror', function(ev) {
  console.info('MBTiles DB error', ev);
});

```
