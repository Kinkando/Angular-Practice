import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.scss']
})
export class SuperheroComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['alias', 'firstname', 'surname'];
  form!: FormGroup;
  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.setFormGroup();
    this.table();
  }

  setFormGroup(){
    this.form = this.formBuilder.group({
      alias: [null, Validators.required],
      firstname: [null, Validators.required],
      surname: [null, Validators.required]
    });
  }

  table(){
    this.api.getAll().subscribe((res) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
    });
  }
  onSubmit(){
    this.api.insert(this.form.value).subscribe((res) => {
      console.log(res);
    });
    this.table();
  }
}