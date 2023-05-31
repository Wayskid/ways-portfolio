export interface InitialStateTypes {
  activeNav: String;
  contactForm: {
    name: string;
    email: string;
    message: string;
  };
}

export interface ProjectTypes {
  id: number;
  title: String;
  name: String;
  appImg: string;
  description: String;
  viewCode: string;
  visitApp: string;
  builtWith: String;
}