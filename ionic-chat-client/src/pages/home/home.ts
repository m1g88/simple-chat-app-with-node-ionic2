import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var io;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  socketHost: string;
  socket: any;
  massage: any;
  msg: string;
  constructor(public navCtrl: NavController) {
    this.socketHost = "http://localhost:3000";
    this.massage = [];
    this.socket = io(this.socketHost);
    this.socket.on("msg", (msg) => {
      this.massage.push(msg);
    });
  }

  send(){
    this.socket.emit("msg", this.msg);
    this.msg = "";
  }

}
