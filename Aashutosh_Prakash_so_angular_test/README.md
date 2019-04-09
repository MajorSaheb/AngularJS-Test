Candidate : Aashutosh Prakash
Contact Number : 9953464663
Email : aashutoshprakash94@gmail.com


--> For MacroPolo Game just open index.html

--> For User story just open index.html with a working internet connection which is required for angularjs to load.

Feed : input_user_story_1.txt as provided 
_______________________________________________________________________________________________________________________________________


--> What is the difference between imports, declarations, and providers? 

Answer:

In AngualarJS 2+ Components are declared, Modules are imported, and Services are provided.

Example:

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { StateService } from './services/state.service';    

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ StateService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }




--> What is the difference between components, directives, models, modules, and services?

Modules:
Think of a module as being a place to wire up a number of other things, such as directives, services, filters, etc. Modules can be injected into other modules giving you a high level of reuse.
When writing an angular app, you would have a top-level module which is your application code.

Services:
Services are mainly a way to communicate between controllers, but you can inject one service into another. You can have services for doing other things like authentication, logging etc. These are singletons, so there is only one instance of each service you define. As singletons, they are not affected by scopes, and hence can be accessed by (shared with) multiple views/controllers/directives/other services.

Directives:
Directives are responsible for updating the DOM when the state of the model changes.
The Angular compiler allows you to attach behavior to any HTML element or attribute and even create new HTML elements or attributes with custom behavior. Angular calls these behavior extensions directives.

Component:
Components in Angular2 are classes where you write your logic for the page you want to display.
Example, for creating a application for College Management .You divide your project into multiple parts like Admin, Students, Staff etc. These are modules.
Now in one of the module like Admin, you will have Add, Delete, Update User Info. These will be Components that will combine up and create a module.

Models:
Model is a class, is an actual JS function which is being used to generate new objects.
Example:
export class User {
  id: number;
  name: string;
  car: Car;
}