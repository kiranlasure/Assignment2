import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  id = ''
  name1 = ' '
  yMo_No = ' '
  gmail = ' '
  mono = ' '
  gfname = ''
  getDetails(data)
  {
      this.id = data.Id;
      this.name1 = data.Name;
      this.yMo_No = data.Mo_No;
      this.gmail=data.Mail;
      this.gfname=data.gfName;
      this.mono = data.gfMoNo;
      
  }
}
