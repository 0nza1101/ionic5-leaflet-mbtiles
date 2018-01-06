This is a sample application using Ionic 3 and Leaflet with Leaflet.TileLayer.MBTiles.

I made a custom npm package of Leaflet.TileLayer.MBTiles [leaflet-tilelayer-mbtiles-ts](https://www.npmjs.com/package/leaflet-tilelayer-mbtiles-ts) to make it compatible with mobile devices(Andoid, iOS).


 ## Get it running
 * Clone this repository: `https://github.com/0nza1101/ionic3-leaflet-mbtiles.git`.
 * Run `npm install` from the project root.
 * If you do not install the ionic CLI (`npm install cordova ionic -g`)
 * Run `ionic serve` in a terminal from the project root.

 I was forced to create an updated npm package since iOS 9 did not allow local XMLHttpRequest.

 If you are experiencing performance issues (mostly on old device), consider to export mbtiles to png format using [mbutil](https://github.com/mapbox/mbutil)
 and if the pngs are too big reduce png quality with [pngquant](https://pngquant.org/)

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
