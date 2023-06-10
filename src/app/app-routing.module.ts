import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './free/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormulaireComponent } from './free/formulaire/formulaire.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClientComponent } from './pages/client/client.component';
import { PropositionComponent } from './pages/proposition/proposition.component';
import { FreelanceurComponent } from './free/freelanceur/freelanceur.component';
import { AdminComponent } from './admin/admin.component';
import { OffresComponent } from './pages/offres/offres.component';
import { FindComponent } from './components/find/find.component';
import { FinoffreComponent } from './pages/finoffre/finoffre.component';
import { PosteComponent } from './pages/poste/poste.component';
import { ContactComponent } from './components/contact/contact.component';
import { SadbarComponent } from './pages/sadbar/sadbar.component';
import { NavComponent } from './pages/nav/nav.component';
import { SkilsComponent } from './pages/skils/skils.component';
import { Contact1Component } from './components/contact1/contact1.component';
import { DevofComponent } from './off/devof/devof.component';
import { CreatComponent } from './off/creat/creat.component';
import { WritComponent } from './off/writ/writ.component';
import { BookComponent } from './off/book/book.component';
import { AnimComponent } from './off/anim/anim.component';
import { MusicComponent } from './off/music/music.component';
import { FormationComponent } from './off/formation/formation.component';
import { MarkComponent } from './off/mark/mark.component';
import { ProposalfComponent } from './free/proposalf/proposalf.component';
import { AboutfComponent } from './aboutf/aboutf.component';
import { TalentcComponent } from './pages/talentc/talentc.component';
import { DiscComponent } from './disc/disc.component';
import { SadfComponent } from './free/sadf/sadf.component';
import { NavfComponent } from './free/navf/navf.component';
import { OffrfComponent } from './free/offrf/offrf.component';
import { AboutcComponent } from './pages/aboutc/aboutc.component';
import { SkilmsComponent } from './pages/skilms/skilms.component';
import { SkildevComponent } from './pages/skildev/skildev.component';
import { SkilwtComponent } from './pages/skilwt/skilwt.component';
import { SkilmusComponent } from './pages/skilmus/skilmus.component';
import { SkilforComponent } from './pages/skilfor/skilfor.component';
import { FoffComponent } from './off/foff/foff.component';
import { OfidxComponent } from './components/ofidx/ofidx.component';
import { FofComponent } from './free/fof/fof.component';
import { MessageComponent } from './admin/message/message.component';
import { OffcComponent } from './pages/offc/offc.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { JobComponent } from './free/job/job.component';
import { LetrComponent } from './letr/letr.component';
import { AdminclientComponent } from './admin/adminclient/adminclient.component';
import { AdminfreeComponent } from './admin/adminfree/adminfree.component';
import { AdminoffreComponent } from './admin/adminoffre/adminoffre.component';
import { FavorisComponent } from './free/favoris/favoris.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'client', component: ClientComponent },
  { path: 'proposition', component: PropositionComponent },
  { path: 'freelanceur', component: FreelanceurComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'find', component: FindComponent },
  { path: 'finoffre/:id', component: FinoffreComponent },
  { path: 'poste', component: PosteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sadbar', component: SadbarComponent },
  { path: 'nav', component: NavComponent },
  { path: 'skils', component: SkilsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact1', component: Contact1Component },
  { path: 'devof', component: DevofComponent },
  { path: 'creat', component: CreatComponent },
  { path: 'writ', component: WritComponent },
  { path: 'book', component: BookComponent },
  { path: 'anim', component: AnimComponent },
  { path: 'music', component: MusicComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'mark', component: MarkComponent },
  { path: 'talentc', component: TalentcComponent },
  { path: 'disc', component: DiscComponent },
  { path: 'sadf', component: SadfComponent },
  { path: 'navf', component: NavfComponent },
  { path: 'proposalf', component: ProposalfComponent },
  { path: 'aboutf', component: AboutfComponent },
  { path: 'offrf', component: OffrfComponent },
  { path: 'aboutc', component: AboutcComponent },
  { path: 'skilms', component: SkilmsComponent },
  { path: 'skildev', component: SkildevComponent },
  { path: 'skilwt', component: SkilwtComponent },
  { path: 'skilmus', component: SkilmusComponent },
  { path: 'skilfor', component: SkilforComponent },
  { path: 'foff', component: FoffComponent },
  { path: 'ofidx', component: OfidxComponent },
  { path: 'fof', component: FofComponent },
  { path: 'message', component: MessageComponent },
  { path: 'offc', component: OffcComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'job', component: JobComponent },
  { path: 'letr', component: LetrComponent },
  { path: 'adminclient', component: AdminclientComponent },
  { path: 'adminfree', component: AdminfreeComponent },
  { path: 'adminoffre', component: AdminoffreComponent },
  { path: 'favoris', component: FavorisComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
