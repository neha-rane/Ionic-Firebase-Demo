import { ActivatedRoute, Router } from '@angular/router';
import { CurdService } from './../service/curd.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  imgURL: any;
  imagePath: File;
  title: string;
  description: string;
  taskId: string;


  constructor(
    private curdService: CurdService,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.taskId = id;
    if (id) {
      this.curdService.getTask(id).snapshotChanges().subscribe(task => {
        this.title = task.payload.get("title");
        this.description = task.payload.get("description");
        this.imgURL = task.payload.get("imagePath");
        console.log(task);
      });
    }
  }

  async add() {
    await this.curdService.addTask(this.title, this.description, this.imagePath);

    this.presentToast("Task Added..", "success");
    this.router.navigateByUrl("/task");
  }

  async update() {
    if (!this.imagePath)
      await this.curdService.updateTask(this.taskId, this.title, this.description, null);
    else
      await this.curdService.updateTask(this.taskId, this.title, this.description, this.imagePath);

    this.presentToast("Task Updated..", "success");
    this.router.navigateByUrl("/task");
  }

  delete() {
    this.curdService.deleteTask(this.taskId);

    this.presentToast("Task Deleted..", "danger");
    this.router.navigateByUrl("/task");
  }

  preview(files) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.imagePath = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      color: color,
      message: message,
      duration: 900
    });
    toast.present();
  }

}
