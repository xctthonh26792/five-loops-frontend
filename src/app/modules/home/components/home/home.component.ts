import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../../services';

import { Utils } from '../../../../utils';
import * as _ from 'lodash';
import { MatSidenavContainer } from '@angular/material/sidenav';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private route: Router, public modal: ModalService) {
  }

}
