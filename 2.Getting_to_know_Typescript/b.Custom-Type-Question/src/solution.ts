type Programmer = {
    name: string;
    role: string;
    technologies: string[];
  }
  
  type Company = {
    name: string;
    programmer: Programmer;
  }
  
  const Quera: Company = {
    name: "Quera",
    programmer: {
      name: "Salar",
      role: "front-end developer",
      technologies: ["react.js", "angular.js", "vue.js"]
    }
  }
  export { Quera }