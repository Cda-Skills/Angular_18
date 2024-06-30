import { Routes } from '@angular/router';
import {AcceuilComponent} from "./appli/acceuil/acceuil.component"
import {ConnectionComponent} from './appli/connection/connection.component'
import {InscriptionComponent} from './appli/inscription/inscription.component'
import {PresentationComponent} from './appli/presentation/presentation.component'
import {ContactComponent} from './appli/contact/contact.component'
import {NotFoundComponent} from './appli/not-found/not-found.component'

export const routes: Routes = [
	
	{ path: '', component: AcceuilComponent },
    { path: 'login', component: ConnectionComponent },
    { path: 'signup', component: InscriptionComponent },
    { path: 'about', component: PresentationComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];
