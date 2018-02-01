import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {MapComponent} from './map/map.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'example',
    },
    /*
    {
        path: 'routes',
        component: RoutesComponent
    },*/
    {
        path: 'setup',
        component: SetupComponent

    },
    {
        path: 'map',
        component: MapComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
