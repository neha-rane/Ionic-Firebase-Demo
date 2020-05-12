
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class CurdService implements OnInit {

  constructor(private afs: AngularFirestore,
    private storage: AngularFireStorage) { }

  ngOnInit() {

  }

  addTask(title: string, description: string, image: File) {
    const userid = localStorage.getItem('user');
    const imgtitle = new Date().getTime();

    const ref = this.storage.ref('images/' + imgtitle);
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(imagePath => {
        const task = { title: title, description: description, imagePath: imagePath };

        this.afs.collection("users")
          .doc(userid)
          .collection("task")
          .add(task)
          .then(newtask => {
            console.log(newtask);
          });
      });
    });
  }

  updateTask(id: string, title: string, description: string, image: File) {
    const userid = localStorage.getItem('user');
    let task = { title: title, description: description };

    if (!image) {
      return this.afs.collection("users").doc(userid).collection("task").doc(id).update(task);
    } else {
      const imgtitle = new Date().getTime();
      const ref = this.storage.ref('images/' + imgtitle);

      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(async imagePath => {
          task["imagePath"] = imagePath;
          await this.afs.collection("users").doc(userid).collection("task").doc(id).update(task);
        });
      });
    }
  }

  getAllTask() {
    const userid = localStorage.getItem('user');
    return this.afs.collection("users").doc(userid).collection("task");
  }

  getTask(id: string) {
    const userid = localStorage.getItem('user');
    return this.afs.collection("users").doc(userid).collection("task").doc(id);
  }

  deleteTask(id: string) {
    const userid = localStorage.getItem('user');
    return this.afs.collection("users").doc(userid).collection("task").doc(id).delete();
  }
}
