import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipe-section',
  templateUrl: './receipe-section.component.html',
  styleUrls: ['./receipe-section.component.css']
})
export class ReceipeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollToTop()
  {
     window.scroll(0, 0);
  }

  openFilter(page,elmnt,color)
  {
    if (document.getElementById(page).style.display === 'none') {
      document.getElementById(page).style.display = 'block';
      elmnt.style.backgroundColor = color;
      elmnt.classList.add('active');
    } else {
      document.getElementById(page).style.display = 'none';
      elmnt.classList.remove('active');
    }
   
  }
  
}
