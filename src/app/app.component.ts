import { Component, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule]
})
export class AppComponent  {
  menuOpen = false;
  activeIndexMiddItems: number | null = null;
  activeIndexEndItems: number | null = null;
  showDomainDropdown = false;
  showWebDropdown = false;
  showSecurityDropdown = false;
  showMarketingDropdown = false;
  showHelpDropdown = false ;
  showSignInDropdown = false ;
  private clickListener?: () => void;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.clickListener = this.renderer.listen('document', 'click', (event: Event) => {
      this.hideAllDropdowns();
    });
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      this.clickListener();
    }
  }


  hideAllDropdowns() {
    this.showDomainDropdown = false;
    this.showWebDropdown = false;
    this.showSecurityDropdown = false;
    this.showMarketingDropdown = false;
    this.showHelpDropdown = false;
    this.showSignInDropdown = false;
    this.activeIndexMiddItems = null;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setActiveIndexMiddItems(index: number) {
    if (this.activeIndexMiddItems === index) {
      this.activeIndexMiddItems = null;

    } else {
      this.activeIndexMiddItems = index;
    }
  }

  setActiveIndexEndItems(index: number) {
    this.activeIndexEndItems = index;
  }




  toggleDomainDropdown(event: Event) {
    this.showDomainDropdown = !this.showDomainDropdown;
    this.showWebDropdown = false;
    this.showSecurityDropdown = false;
    this.showMarketingDropdown = false ;
    this.showHelpDropdown = false ;
    this.showSignInDropdown = false ;
    event.stopPropagation();
  }

  toggleWebDropdown(event: Event) {
    this.showWebDropdown = !this.showWebDropdown;
    this.showDomainDropdown = false;
    this.showSecurityDropdown = false;
    this.showMarketingDropdown = false ;
    this.showHelpDropdown = false ;
    this.showSignInDropdown = false ;
    event.stopPropagation();

  }

  toggleSecurityDropdown(event: Event) {
    this.showSecurityDropdown = !this.showSecurityDropdown;
    this.showDomainDropdown = false;
    this.showWebDropdown = false;
    this.showMarketingDropdown = false ;
    this.showHelpDropdown = false ;
    this.showSignInDropdown = false ;
    event.stopPropagation();


  }

  toggleMarketingDropdown(event: Event) {
    this.showMarketingDropdown = !this.showMarketingDropdown;
    this.showSecurityDropdown = false;
    this.showDomainDropdown = false;
    this.showWebDropdown = false;
    this.showHelpDropdown = false ;
    this.showSignInDropdown = false ;
    event.stopPropagation();


  }

  toggleHelpDropdown(event: Event){
    this.showHelpDropdown = !this.showHelpDropdown ;
    this.showMarketingDropdown = false;
    this.showSecurityDropdown = false;
    this.showDomainDropdown = false;
    this.showWebDropdown = false;
    this.showSignInDropdown = false ;
    event.stopPropagation();

  }

  toggleSignInDropdown(event: Event) {
    this.showSignInDropdown = !this.showSignInDropdown ;
    this.showHelpDropdown = false ;
    this.showMarketingDropdown = false;
    this.showSecurityDropdown = false;
    this.showDomainDropdown = false;
    this.showWebDropdown = false;
    event.stopPropagation();

  }


}
