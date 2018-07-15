import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-member',
  templateUrl: './manage-member.component.html',
  styleUrls: ['./manage-member.component.css']
})
export class ManageMemberComponent implements OnInit {
  // @Input() id;
  // id = '5b4967d719ce3d64c329952f';
  member;
  bnkForm: FormGroup;
  constructor(
    private bnk: BnkService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bnkForm = this.fb.group(
      {
        _id: '',
        name: '',
        imgUrl: '',
        instagramId: ''
      }
    );
    this.bnk.getMember(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        data => {
          this.member = data;
          this.bnkForm.setValue({
            _id: this.member._id,
            name: this.member.name,
            imgUrl: this.member.imgUrl,
            instagramId: this.member.instagramId
          });
        }
      );
  }
  onSubmit() {
    console.log(this.member);
  }
  onReset() {
    this.bnkForm.setValue(this.member);
  }

}
