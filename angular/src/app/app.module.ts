import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuListComponent } from './components/stu-list/stu-list.component';
import { StuFormComponent } from './components/stu-form/stu-form.component';
import{Route,RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';

const routes:Routes=[{path:'',component:WelcomeComponent},{path:'student',component:StuListComponent},{path:'stuform',component:StuFormComponent},{path : 'updateStu/:id',component:StuFormComponent},{path : 'search/:sname',component:StuListComponent}]
@NgModule({
  declarations: [
    AppComponent,
    StuListComponent,
    StuFormComponent,
    WelcomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
