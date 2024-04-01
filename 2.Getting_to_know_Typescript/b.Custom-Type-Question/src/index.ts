type Programmer = {
    name: string,
    role: string,
    technologies: string[]
}
type Company = {
    name: string,
    programmer: Programmer
}
const Quera: Company = {
    name: 'Quera',
    programmer: {
        name: 'ahmad',
        role: 'data scientist',
        technologies: ['tailwinds'],
    }
}

export { Quera }
