export interface INoticia {
  date: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  categories: [];
  tags: [];
}
