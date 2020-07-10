
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatMenuModule,
  MatStepperModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTabsModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule, MatSlideToggleModule,
} from '@angular/material';

/**
 * @desc Imports Angular Material Specific Modules
 */
@NgModule({
  imports: [],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule,
    MatTableModule, MatFormFieldModule, MatIconModule, MatSidenavModule, MatDividerModule, MatMenuModule,
    MatStepperModule, MatSelectModule, MatCheckboxModule, MatSnackBarModule, MatTooltipModule, MatTabsModule,
    MatPaginatorModule, MatSortModule, MatRadioModule, MatExpansionModule, MatProgressSpinnerModule, MatListModule,
    MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatAutocompleteModule,
    MatNativeDateModule, MatChipsModule, MatSlideToggleModule]
})
export class SmartDataMaterialModule {
}
