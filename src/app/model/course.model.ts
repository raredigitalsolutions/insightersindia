import { meta } from './meta.model';
export class Course {
  snippet: string
  title: string
  content: Array<string|Object>
  meta: meta
}

export class CourseCard {
  title: string
  link: string
  imageSrc: string
}
