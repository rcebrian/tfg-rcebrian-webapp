import { Component, OnInit } from '@angular/core';
import { CreateGroupService } from "./create-group.service";
import { CompanyDto } from "../../../../@core/models/dto/company-dto";

@Component({
  selector: 'ngx-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  companies: Array<CompanyDto>;

  constructor(private createGroupService: CreateGroupService) { }

  ngOnInit(): void {
    this.createGroupService.getAllCompanies().subscribe((res) => {
        const { data } = res;
        this.companies = data;
    })
  }

}
