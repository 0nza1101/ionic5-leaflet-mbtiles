This is a sample application using Ionic 3 and Leaflet with Leaflet. TileLayer. MBTiles.
I modified the [Leaflet.TileLayer.MBTiles](https://www.npmjs.com/package/Leaflet.TileLayer.MBTiles) library to use it with Ionic on native mobile apps.
I also modified the index.html since some script tag is required by the plugin.


 ## Get it running
 * Clone this repository: `https://github.com/0nza1101/ionic3-leaflet-mbtiles.git`.
 * Run `npm install` from the project root.
 * If you do not install the ionic CLI (`npm install cordova ionic -g`)
 * Copy `src/Leaflet.TileLayer.MBTiles.js` to `node_modules/Leaflet.TileLayer.MBTiles/` replace it.
 * Run `ionic serve` in a terminal from the project root.

 ## How to use it
```typescript
let mb = L.tileLayer.mbTiles('assets/tiles/countries-raster.mbtiles', {
  minZoom: 0,
  maxZoom: 8
}).addTo(this.map);
```
