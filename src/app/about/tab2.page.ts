import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public alertController: AlertController) {  }

  async Alert1() {
    const alert = await this.alertController.create({
      header: 'About Us',
      message: 'The institute is located in 47 acres of green campus at Andheri (W), the fastest growing suburb of Mumbai.<br><br> The campus also houses four Bhavan’s Institutions of great repute namely Bhavan’s College (the arts, commerce and science college), Sardar Patel College of Engineering – Government aided Engineering college, S.P. Jain Institute of Management and Research, a management institute and A.H. Wadia, higher secondary school.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Alert3() {
    const alert = await this.alertController.create({
      header: 'Vission',
      message: 'To build a renowned institute which will produce graduate engineers with global competency and social sensitivity.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Alert2() {
    const alert = await this.alertController.create({
      header: 'Institutional Value',
      message: '1. Integrity – Integrity is defined as the quality of being honest and having strong moral principles.<br><br>2. Excellence – Excellence is the hallmark of consistency.<br><br>3. Social Sensitivity – The prime goal of an educational institution like Sardar Patel Institute of Technology, under the aegis of management like Bharatiya Vidya Bhavan, strives to make the society better in all respects by providing quality education.<br><br>4. Globalization: Vasudev Kutumbakam – The whole universe is our family.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Alert4() {
    const alert = await this.alertController.create({
      header: 'Mission',
      message: 'Provide high quality education in engineering and technology promoting the Indian Values and Ethos that will prepare the participants to lead lives of personal integrity and civic responsibility in a global society.<br><br> Promote an Educational Environment that combines academic study with the excitement of intellectual curiosity for engineers of tomorrow.<br><br>Enhance career opportunities for students through Industry-Institute interaction, value-added courses and projects in cutting edge technology.<br><br> Inculcate Entrepreneurial mindset in students to make them job creators.<br><br>Focus on applied research to create next generation technologies.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
