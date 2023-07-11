export class BlogPost {
  id: number;
  headline: string;
  tags: string[];
  intro: string;
  img: string;
  copy: string;
  links: boolean;
  linkWebCase: string;
  linkGitCase: string;

  constructor(obj?: any) {
    this.id = obj ? obj.id : null;
    this.headline = obj ? obj.headline : '';
    this.tags = obj ? obj.tags : '';
    this.intro = obj ? obj.intro : '';
    this.img = obj ? obj.img : '';
    this.copy = obj ? obj.copy : '';
    this.links = obj ? obj.links : null;
    this.linkWebCase = obj ? obj.linkWebCase : '';
    this.linkGitCase = obj ? obj.linkGitCase : '';
  }
}
