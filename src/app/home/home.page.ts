import { Component } from "@angular/core";
import { Platform, AlertController } from "@ionic/angular";
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer/ngx";
import { File } from "@ionic-native/file/ngx";
import {
  FileTransfer,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
declare var require: any;
const FileSaver = require("file-saver");
import { FileOpener } from "@ionic-native/file-opener/ngx";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  ft: any;
  fileTransfer: FileTransferObject;
  constructor(
    private platform: Platform,
    private file: File,
    private transfer: FileTransfer,
    private document: DocumentViewer,
    private alertController: AlertController,
    private fileOpener: FileOpener 
  ) {
    this.fileTransfer = this.transfer.create();
  }

  openLocalPdf() {
    const opt: DocumentViewerOptions = {
      title: "My PDF"
    };
    FileSaver.saveAs(
      "https://drive.google.com/file/d/0B8W0SpTQrTa8bnUyU3hQcmZfSVJrQzRZYzJyekk2eHRQclpF/view",
      "myFile.pdf"
    );
  }

  downloadAndOpenLocalPdf() {
    let url = "https://drive.google.com/file/d/1lo2Lpbu_jD26kFNPtxUgUPM9u4k4bowT/view";
    FileSaver.saveAs(
      "https://cors-anywhere.herokuapp.com/" + url,
      "myFile.pdf"
    );

    FileSaver.saveAs(url, "myFile.pdf");
  }
  async presentAlert(error) {
    const alert = await this.alertController.create({
      header: " ",
      message: error,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary"
        }
      ]
    });

    await alert.present();
  }
}
