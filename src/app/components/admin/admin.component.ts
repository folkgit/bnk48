import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id;
  members: Member[];
  constructor(
    private bnk: BnkService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.bnk.list().subscribe(data =>
      this.members = data
    );
  }


}
