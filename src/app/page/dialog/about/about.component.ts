/**
 * @author Ahmad Tarkmani
 * @contact Tarkmani@sheridancollge.ca
 * @date 2024-07-20
 */


import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatDialogContent,
    MatIcon,
    MatDialogTitle,
    MatIconButton,
    MatButton
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly dialogRef = inject(MatDialogRef<AboutComponent>);

  closeDialog(): void {
    this.dialogRef.close();
  }
}
