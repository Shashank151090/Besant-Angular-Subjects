import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dataTransfer', component: DataTransferComponent },


];

export const routing = RouterModule.forRoot(appRoutes);