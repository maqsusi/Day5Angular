import { Component } from "@angular/core";
import { FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isRed = true;
  title = 0;
  urls = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
    "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
    "https://img.huffingtonpost.com/asset/5e848c4825000056010586d9.jpeg?ops=1778_1000",
  ];
  imageURL = this.urls[0];
  result = "";
  displayAllow = true;

  
  
  userForm;
  userDetails = [];

  constructor(private fb:FormBuilder) {
    
      this.userForm = this.fb.group({
        'name' : this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
        'age' : this.fb.control('',[Validators.required,Validators.min(18),Validators.max(55)]),
        'country' : this.fb.control('IN'),
        'mobile' : this.fb.control('',Validators.required),
        
        'address' : this.fb.array([
          this.fb.group({
            'street' : this.fb.control('',[Validators.required]),
            'zipcode' : this.fb.control('')
          })
        ]),
        'gender': this.fb.control(''),
        'show' : true,
        'ms' : this.fb.control('')

        
      })
    
    console.log(this.userForm)
    
    
    // setInterval(() => {
    //   let randomNumber = Math.floor(Math.random() * 4);
    //   this.imageURL = this.urls[randomNumber]
    // }, 300);
  }

  submitForm(){
   if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userDetails.push(this.userForm.value);
      console.log(this.userDetails);
   }
  }

  // removes(i)
  // {
  //     
  // }

  // showAlert() {
  //   let randomNumber = Math.floor(Math.random() * 4);
  //   this.imageURL = this.urls[randomNumber];
  // }

  // changeColor(){
  //   this.isRed = !this.isRed;
  // }
}