import { NgModule } from '@angular/core';
import { MatButtonModule,MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatChipsModule, MatMenuModule, MatCheckboxModule, MatSlider, MatSliderModule, MatAccordion, MatExpansionModule } from '@angular/material';


const MATERIAL_COMPONENTS = [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule, 
    MatCheckboxModule,
    MatSliderModule,
    MatExpansionModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    ...MATERIAL_COMPONENTS
  ],
  providers: [],
  exports: [
    ...MATERIAL_COMPONENTS
  ]
})
export class MaterialModule { }
