import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.css']
})
export class MealplanComponent implements OnInit {
  plan:any[]=[]
  constructor(private api:ApiService, private toastr: ToastrService){}

  ngOnInit() {
    this.getData()
  }
  getData(){
    this.api.getMealplan().subscribe({
      next:(res:any)=>{
        console.log(res); 
        this.plan=res
        console.log(this.plan)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

deleteItem(id:any){
  this.api.  deleteMealplan(id).subscribe({
    next:(res:any)=>{
     
      console.log(res);
      this.toastr.success("1 dish Removed!")
      this.getData()
    },
    error:(err:any)=>{
      this.toastr.error(" Item Deletion Failed!")
    }
    })
  }

exportToPdf(){
  const doc = new jsPDF()
  let head=[['name','ingredients','instruction','cooking time']]
  let body:any=[]
  this.plan.forEach((item:any)=>{

    body.push([item.name,item.ingredients,item.instruction,item.cooktime])

  })
  doc.setFontSize(16)
  doc.text("Meal plan",10,10)
  autoTable(doc,{
    head,body
  })
  doc.output("dataurlnewwindow")
  doc.save("mealplan.pdf")


}

}
