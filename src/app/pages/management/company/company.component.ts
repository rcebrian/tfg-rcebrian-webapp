import { Component, OnInit } from '@angular/core';
import { CompanyService } from "./company.service";

@Component({
  selector: 'ngx-company',
  templateUrl: './company.component.html',
  styles: [
  ]
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((company) => {
      console.log(company);
    })
  }

}
