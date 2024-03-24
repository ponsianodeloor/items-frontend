import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import axios from "axios";
import { environment } from './environments/environment';

axios.defaults.baseURL = environment.apiUrl;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
