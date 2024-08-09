import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  newsID: number[] = [];
  newsDetail: Item[] = [];
  displayedNews: Item[] = [];
  pageSize: number = 10;
  currentIndex: number = 0;
  loading: boolean = false;

  constructor(private news: NewsService) {}

  ngOnInit(): void {
    this.news.getNewsID().subscribe((data: number[]) => {
      this.newsID = data;
      this.loadNews();
    });
  }


  loadNews(): void {
    // Carica solo le notizie che devono essere visualizzate
    const endIndex = Math.min(this.currentIndex + this.pageSize, this.newsID.length);
    const newIds = this.newsID.slice(this.currentIndex, endIndex);
    this.loading = true; 
  
    newIds.forEach(id => {
      this.news.getNewsDetail(id).subscribe((data: Item) => {
        this.loading = false;
        // Aggiungi la notizia solo se il titolo non è nullo o vuoto
        if (data.title && data.title.trim().length > 0 && 
            !this.displayedNews.some(newsItem => newsItem.id === data.id)) {
          this.displayedNews.push(data);
        }
      });
    });
  }


  showMore(): void {
    if (this.currentIndex + this.pageSize < this.newsID.length) {
      this.currentIndex += this.pageSize;
      this.loadNews();
    }
  }

  showLess(): void {
    if (this.currentIndex - this.pageSize >= 0) {
      this.currentIndex -= this.pageSize;
      // Solo rimuovere le notizie che non sono più nel range visualizzato
      const endIndex = Math.min(this.currentIndex + this.pageSize, this.displayedNews.length);
      this.displayedNews = this.displayedNews.slice(0, endIndex);
    }
  }
}
