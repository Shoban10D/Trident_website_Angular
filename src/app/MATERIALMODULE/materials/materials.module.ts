import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';

const MaterialModule = [MatToolbarModule,MatButtonModule,MatIconModule,MatMenuModule,MatSidenavModule,
                        MatListModule,MatButtonToggleModule,MatCardModule,MatInputModule,MatBadgeModule,
                        MatTableModule,MatProgressBarModule,MdbCarouselModule,MdbPopoverModule,CdkAccordionModule,MatExpansionModule]

@NgModule({
  declarations: [],
  imports: [MaterialModule],
  exports:[MaterialModule]
})
export class MaterialsModule { }
