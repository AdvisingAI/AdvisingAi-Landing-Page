import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { AngularFirestore } from "@angular/fire/firestore";
import { observable } from "rxjs";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  data;
  db;

  constructor(db: AngularFirestore) {
    this.db = db;
    //this.data = db.collection("/leads").valueChanges();
    this.data = {
      name: "",
      email: "",
      school: ""
    };
  }

  ngOnInit() {}

  onSubmit() {
    if (this.data.name && this.data.email && this.data.school) {
      if (this.validateEmail(this.data.email)) {
        this.db.collection("leads").add(this.data);
        Swal.fire(
          "Amazing!",
          "Submitted Succesuly. You can contact us at momin@advisingai.com",
          "success"
        );
        this.data = {
          name: "",
          email: "",
          school: ""
        };
      } else {
        Swal.fire("Oh no!", "Please enter a valid email", "error");
      }
    } else {
      Swal.fire("Oh no!", "Please complete the form", "error");
    }
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  goToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
