import {Component, inject, OnInit} from '@angular/core';
import {FrameworkService} from "../services/framework.service";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {Framework} from "../interfaces/framework";

@Component({
  selector: 'app-framework-table',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef
  ],
  templateUrl: './framework-table.component.html',
  styleUrl: './framework-table.component.css'
})
export class FrameworkTableComponent implements OnInit {
  private frameworkService = inject(FrameworkService);

  frameworks: Framework[] = [];
  displayedColumns: string[] = ['framework', 'percent'];


  ngOnInit(): void {
    this.frameworkService
      .getFrameworks()
      .subscribe({
        next: (data: Framework[]) => {
          this.frameworks = data;
        },
        error: (error: any) => {
          console.error('Error loading frameworks', error);
        }
      });
  }
}
