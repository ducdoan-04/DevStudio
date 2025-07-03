export interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Invitation {
  id: number;
  title: string;
  imageUrl: string;
}

export interface AlbumImage {
  id: number;
  imageUrl: string;
  title: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  month: string;
  excerpt: string;
  imageUrl:string;
  isLarge: boolean;
}

export interface PhotoIdea {
  title: string;
  description: string;
  mood: string;
}
