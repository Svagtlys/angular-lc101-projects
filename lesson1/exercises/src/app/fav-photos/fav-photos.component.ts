import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oqd2gFQa6DpoI9gIsgfoYaCLYW1tHI_3WIs74dTpvHc0JMUZVw&s';
  image3 = 'https://www.prettyinpistachio.com/wp-content/uploads/2014/05/About-1.jpg';

  constructor() { }

  ngOnInit() {
  }

}