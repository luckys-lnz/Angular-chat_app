import { Component, } from '@angular/core';
import { NgFor } from '@angular/common';
import { SearchFilterPipe } from '../search-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-top',
  standalone: true,
  imports: [FormsModule, SearchFilterPipe, NgFor],
  templateUrl: './chat-top.component.html',
  styleUrl: './chat-top.component.css',
})
export class ChatTopComponent {
  logo: string = 'logo';
  chat = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  profilePicture = 'profilePic';
  searchTerm: string = '';
}
