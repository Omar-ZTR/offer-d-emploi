import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { WiledphotoComponent } from './components/wiledphoto/wiledphoto.component';
import { GalleryComponent } from './free/gallery/gallery.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TeamAreaComponent } from './components/team-area/team-area.component';
import { ContactComponent } from './components/contact/contact.component';
import { InstragramAreaComponent } from './components/instragram-area/instragram-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
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
import { SadbarComponent } from './pages/sadbar/sadbar.component';
import { NavComponent } from './pages/nav/nav.component';
import { SkilsComponent } from './pages/skils/skils.component';
import { Contact1Component } from './components/contact1/contact1.component';
import { DevofComponent } from './off/devof/devof.component';
import { CreatComponent } from './off/creat/creat.component';
import { MarkComponent } from './off/mark/mark.component';
import { WritComponent } from './off/writ/writ.component';
import { BookComponent } from './off/book/book.component';
import { AnimComponent } from './off/anim/anim.component';
import { MusicComponent } from './off/music/music.component';
import { FormationComponent } from './off/formation/formation.component';
import { TalentcComponent } from './pages/talentc/talentc.component';
import { DiscComponent } from './disc/disc.component';
import { SadfComponent } from './free/sadf/sadf.component';
import { NavfComponent } from './free/navf/navf.component';
import { ProposalfComponent } from './free/proposalf/proposalf.component';
import { AboutfComponent } from './aboutf/aboutf.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './admin/message/message.component';
import { OffcComponent } from './pages/offc/offc.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { JobComponent } from './free/job/job.component';
import { LetrComponent } from './letr/letr.component';
import { FavorisComponent } from './free/favoris/favoris.component';
import { AdminclientComponent } from './admin/adminclient/adminclient.component';
import { AdminfreeComponent } from './admin/adminfree/adminfree.component';
import { AdminoffreComponent } from './admin/adminoffre/adminoffre.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    PhotographyComponent,
    WiledphotoComponent,
    GalleryComponent,
    TestimonialComponent,
    TeamAreaComponent,
    ContactComponent,
    InstragramAreaComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FormulaireComponent,
    ProfileComponent,
    ClientComponent,
    PropositionComponent,
    FreelanceurComponent,
    AdminComponent,
    OffresComponent,
    FindComponent,
    FinoffreComponent,
    PosteComponent,
    SadbarComponent,
    NavComponent,
    SkilsComponent,
    Contact1Component,
    DevofComponent,
    CreatComponent,
    MarkComponent,
    WritComponent,
    BookComponent,
    AnimComponent,
    MusicComponent,
    FormationComponent,
    TalentcComponent,
    DiscComponent,
    SadfComponent,
    NavfComponent,
    ProposalfComponent,
    AboutfComponent,
    OffrfComponent,
    AboutcComponent,
    SkilmsComponent,
    SkildevComponent,
    SkilwtComponent,
    SkilmusComponent,
    SkilforComponent,
    FoffComponent,
    OfidxComponent,
    FofComponent,
    MessageComponent,
    OffcComponent,
    EditPostComponent,
    JobComponent,
    LetrComponent,
    FavorisComponent,
    AdminclientComponent,
    AdminfreeComponent,
    AdminoffreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
