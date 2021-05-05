import { Component, OnInit } from '@angular/core';
import { CreateGroupService } from "./create-group.service";
import { CompanyDto } from "../../../../@core/models/dto/company-dto";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'ngx-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  companies: Array<CompanyDto>;
  groupForm: any;
  newGroup:any = {};

  constructor(private createGroupService: CreateGroupService) { }

  ngOnInit(): void {
    this.createGroupService.getAllCompanies().subscribe((res) => {
        const { data } = res;
        this.companies = data;
    })

    this.groupForm = new FormGroup({
      name: new FormControl(this.newGroup.name, [
        Validators.required,
      ]),
      description: new FormControl(this.newGroup.description, [
        Validators.required
      ]),
      companyId: new FormControl(this.newGroup.companyId, [
        Validators.required,
      ])
    })
  }

  get name() { return this.groupForm.get('name'); }

  get description() { return this.groupForm.get('description'); }

  get companyId() { return this.groupForm.get('companyId'); }

  submitNewGroup() {
    this.createGroupService.postNewGroup({
      companyId: this.companyId.value,
      name: this.name.value,
      description: this.description.value
    }).subscribe(() => {
    })
  }

}
