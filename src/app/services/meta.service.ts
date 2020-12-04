import { Meta, Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta, private title: Title) { }

  generateTags(config) {
    // default values
    config = {
      title: 'Insighters India',
      description: 'We, Insighters India are specialized in training and empowering human resources to achieve organizational excellence in tune with our motto “Transform and Perform”.',
      image: 'https://insighters-india.web.app/assets/logo/logo.svg',
      slug: '',
      ...config
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@insightersindia' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Insighters India' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://insighters-india.web.app/${config.slug}` });

    this.meta.removeTag('itemprop');
    this.meta.removeTag('itemprop');
    this.meta.removeTag('itemprop');
    this.meta.updateTag({ itemprop: 'name', content: config.title });
    this.meta.updateTag({ itemprop: 'description', content: config.description });
    this.meta.updateTag({ itemprop: 'image', content: config.image });
    this.title.setTitle(config.title)
  }
}
