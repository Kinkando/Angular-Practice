import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  form!: FormGroup;
  positionNow = ELEMENT_DATA.length+1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup(){
    this.form = this.formBuilder.group({
      position: this.positionNow,
      name: [null, Validators.required],
      weight: [null, Validators.required],
      symbol: [null, Validators.required]
    });
  }

  onSubmit(){
    // console.log(this.name);
    console.log(this.form);
    console.log(this.form.value);

    // 
    this.position.setValue(this.positionNow++)
    ELEMENT_DATA.push(this.form.value);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.form.reset();
  }

  // test() {
  //   console.log('Testing');
  // }

  get position(): FormControl{
    return this.form.get('position') as FormControl;
  }
  get name(): FormControl{
    return this.form.get('name') as FormControl;
  }
  get weight(): FormControl{
    return this.form.get('weight') as FormControl;
  }
  get symbol(): FormControl{
    return this.form.get('symbol') as FormControl;
  }

}
