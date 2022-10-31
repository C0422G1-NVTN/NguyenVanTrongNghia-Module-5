import {Component, OnInit} from '@angular/core';
import {HouseCarService} from "../service/housecar.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  houseCarPage: any;
  nameHouseCar:string = '';
  page: number;
  totalPage: number = 0;
  pageSelect: number[] = [];
  size: number = 4;

  reset = [];
  idModal: number;
  nameModal: string;




  constructor(private houseCarService: HouseCarService) {
  }

  ngOnInit(): void {
    this.search();
  }

  elementDelete(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
    console.log(this.idModal)
  }

//reset form
  resetModal() {
    this.reset = [];
  }

  //xóa
  deleteCustomer() {
    this.houseCarService.removeHouseCar(this.idModal).subscribe(() => {
      this.ngOnInit();
    }, error => {
      console.log(error)
    }, () => {

    })
  }

  search() {
    this.page = 0;
    this.houseCarService.getAllUser(this.nameHouseCar, this.page).subscribe(houseCar => {
      if (houseCar == null) {
        this.houseCarPage = [];
      } else {
        this.pageSelect = [];

        // @ts-ignore
        this.houseCarPage = houseCar.content;

        // @ts-ignore
        this.totalPage = houseCar.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  previous() {
    this.page = this.page - 1;
    this.houseCarService.getAllUser(this.nameHouseCar, this.page).subscribe(houseCar => {
      if (houseCar == null) {
        this.houseCarPage = [];
      } else {
        this.pageSelect = [];
        // @ts-ignore
        this.houseCarPage = houseCar.content;
        // @ts-ignore
        this.totalPage = houseCar.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  next() {
    this.page = this.page + 1;
    this.houseCarService.getAllUser(this.nameHouseCar, this.page).subscribe(houseCar => {
      if (houseCar == null) {
        this.houseCarPage = [];
      } else {
        this.pageSelect = [];
        // @ts-ignore
        this.houseCarPage = houseCar.content;
        // @ts-ignore
        this.totalPage = houseCar.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  changePage(pageNow: number) {
    this.page = pageNow;
    this.houseCarService.getAllUser(this.nameHouseCar, this.page).subscribe(houseCar => {
      if (houseCar == null) {
        this.houseCarPage = [];
      } else {
        this.pageSelect = [];
        // @ts-ignore
        this.houseCarPage = houseCar.content;
        // @ts-ignore
        this.totalPage = houseCar.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }
}
