import { Component, OnInit, Input } from '@angular/core';
import { Feed, FeedItem } from '../../models/feed';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {
  @Input() id;
  feed: Feed;
  feedItem: FeedItem[];
  constructor(
    private bnk: BnkService
  ) { }

  ngOnInit() {
    this.bnk.instagram(this.id).subscribe(data => {
      this.feed = data;
      this.feedItem = this.feed.feeds.filter(i => i.thumbnail.endsWith('jpg'));
      }
    );
  }

}
