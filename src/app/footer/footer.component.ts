import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  items: any[]  = [
    {
      tiltle : "About GoDaddy" ,
      sub : [
        {name : "Careers"},
        {name : "Contact Us"},
        {name : "GoDaddy Blog"},
        {name : "Legal"},
        {name : "Trust Center"},
      ]
    } ,
    {
      tiltle : "Support" ,
      sub : [
        {name : "Product"},
        {name : "Support"},
        {name : "Report Abuse"},
        {name : "Resources"},
      ]
    },
    {
      tiltle : "Resources" ,
      sub : [
        {name : "Webmail"},
        {name : "WHOIS"},
        {name : "ICANN Confirmation"},
        {name : "Designers & Developers"},
        {name : "Redeem Code"},
        {name : "Product Catalog"},
        {name : "Business Name"},
        {name : "Generator"},

      ]
    },
    {
      tiltle : "Partner Programs" ,
      sub : [
        {name : "Affiliates"},
        {name : "WHOIS"},
        {name : "Reseller Programs"},
        {name : "GoDaddy Pro"},
      ]
    },
    {
      tiltle : "Account" ,
      sub : [
        {name : "My Products"},
        {name : "WHOIS"},
        {name : "Renewals & Billing"},
        {name : "Create Account"},
      ]
    },
    {
      tiltle : "Shopping" ,
      sub : [
        {name : "Buy a Domain"},
        {name : "Websites"},
        {name : "ICANN Confirmation"},
        {name : "WordPress"},
        {name : "Hosting"},
        {name : "Web Security"},
        {name : "Business"},
        {name : "Email"},

      ]
    },
  ]
}
