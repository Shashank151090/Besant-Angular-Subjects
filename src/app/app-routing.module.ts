import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataTransferComponent } from './data-transfer/data-transfer.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { SubjectsComponent } from './data-transfer/subjects/subjects.component';
import { AnimationComponent } from './animation/animation.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dataTransfer', component: DataTransferComponent },
    { path: 'pipes', component: CustomPipesComponent},
    { path: 'animation', component: AnimationComponent},
    { path: 'subjects', component: SubjectsComponent}
    


];

export const routing = RouterModule.forRoot(appRoutes);