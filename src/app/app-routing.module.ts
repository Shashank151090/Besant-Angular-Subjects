import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dataTransfer', component: DataTransferComponent },
    { path: 'pipes', component: CustomPipesComponent}


];

export const routing = RouterModule.forRoot(appRoutes);