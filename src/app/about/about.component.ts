import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  items: any[] = [
    {
      name: "Domains",
      title: "Domains",
      des: "Get started with the perfect domain, which comes with free domain privacy protection forever.",
      btuName : "Search Domains",
      img : "https://images.pexels.com/photos/4249193/pexels-photo-4249193.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Domains",
      title: ".co for ‪570.95 EGP‬/1st year",
      des: "Ensure your company and website stand out with a .co domain.",
      btuName : "Get Started",
      img: "https://images.pexels.com/photos/7233099/pexels-photo-7233099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Recommended",
      title: "Professional Email 94.77 EGP per user/mo",
      des: "Earn trust from your customers with an email address that matches your domain.",
      btuName : "Get Started",
      img: "https://www.pexels.com/photo/bahttps://www.pexels.com/photo/white-textured-abstract-architectural-wavy-wall-7078712/"
    },
    {
      name: "Recommended",
      title: "Websites 523.34 EGP/mo",
      des: "Start for free and quickly design a beautiful, mobile-friendly site.",
      btuName : "Create Your Site",
      img: "https://www.pexels.com/photo/push-cart-and-a-white-paperbag-5632402/"
    },
    {
      name: "Recommended",
      title: "Get fast load times and 99.9% uptime guaranteed.***",
      des: "Get fast load times and 99.9% uptime guaranteed.***",
      btuName : "View Plans and Pricing",
      img: "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "WordPress and Security",
      title: "WordPress 523.34 EGP/mo",
      des: "Let AI quickly build a fully-managed website that's always up to date, with no worries.",
      btuName : "Explore WordPress Plans",
      img: "https://images.pexels.com/photos/20818871/pexels-photo-20818871/free-photo-of-a-scrunched-lined-paper-sheet.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "WordPress and Security",
      title: "SSL Certificates 3,332.86 EGP/yr",
      des: "Help keep sensitive data secure on your site and boost search ranking with an SSL Certificate.",
      btuName : "Secure Your Data",
      img: "https://images.pexels.com/photos/20818871/pexels-photo-20818871/free-photo-of-a-scrunched-lined-paper-sheet.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  StrictItems: any[] = [];

  ngOnInit() {
    this.StrictItems = [
      {
        name: "Domains",
        title: "Domains",
        des: "Get started with the perfect domain, which comes with free domain privacy protection forever.",
        btuName: "Search Domains",
        img: "https://images.pexels.com/photos/4249193/pexels-photo-4249193.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Domains",
        title: ".co for ‪570.95 EGP‬/1st year",
        des: "Ensure your company and website stand out with a .co domain.",
        btuName: "Get Started",
        img: "https://images.pexels.com/photos/4249193/pexels-photo-4249193.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ];
  }

  ItemsFilter(str: string) {
    this.StrictItems = this.items.filter((item: any) => item.name === str);
  }

  active : Number = 0 ;

  setActive(num : Number){
    this.active = num
  }

}
