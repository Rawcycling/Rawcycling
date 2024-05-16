export type typeAuthContext = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export enum SelectedPage {
  Home = "home",
  About = "about",
  Community = "community",
  Services = "services",
}
