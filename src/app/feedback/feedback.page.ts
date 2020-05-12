import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentConfirm() {
    const toast = await this.toastCtrl.create({
      message: 'Feedback Submitted.',
      duration: 500
    });
    toast.present();
  }

}
