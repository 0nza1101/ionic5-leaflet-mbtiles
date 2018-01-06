import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//Polyfills
import 'promise-polyfill';
import 'whatwg-fetch';

platformBrowserDynamic().bootstrapModule(AppModule);
