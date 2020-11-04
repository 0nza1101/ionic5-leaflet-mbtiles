This is a sample application using Ionic 5 and Leaflet with Leaflet.TileLayer.MBTiles.

I made a custom npm package of Leaflet.TileLayer.MBTiles called leaflet-tilelayer-mbtiles-ts to make it compatible with mobile devices(Andoid, iOS).

`npm i leaflet-tilelayer-mbtiles-ts --save`

<p align="center">
  <img width="300" height="500" src="https://user-images.githubusercontent.com/13056641/34644747-c5864a32-f33c-11e7-8608-ea4565c12952.png">
</p>

## Get it running
* Clone this repository.
* Run npm install from the project root.
* If you do not install the Ionic CLI (npm install ionic -g)
* Run ionic serve in a terminal from the project root.

I was forced to create an updated npm package since fetch didn't support File URI Schema [see](https://github.com/github/fetch/pull/92#issuecomment-140665932).

If you are experiencing performance issues (mostly on old device), consider to export mbtiles to png format using [mbutil](https://github.com/mapbox/mbutil) and if the pngs are too big reduce png quality with [pngquant](https://pngquant.org/)

## How to use it
```typescript
let mb = L.tileLayer.mbTiles('assets/my.mbtiles', {
  minZoom: 0,
  maxZoom: 8
}).addTo(this.map);

mb.on('databaseloaded', (ev) => {
  console.info('MBTiles DB loaded', ev);
});
mb.on('databaseerror', (ev) => {
  console.info('MBTiles DB error', ev);
});
```
