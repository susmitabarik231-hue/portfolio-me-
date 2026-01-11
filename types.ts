
export interface Skill {
  name: string;
  category: 'SEO' | 'Technical' | 'AI' | 'Tools';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Tool {
  name: string;
  icon: string;
  category: 'Google' | 'SEO' | 'AI';
}
