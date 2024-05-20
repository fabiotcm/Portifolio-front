const divLanguages = document.querySelector('.languages')
const divSkills = document.querySelector('.skills-grid')
const divProjects = document.querySelector('.projects-list')

const copyButton = document.querySelector('.copy')

const languages = [
  'https://bit.ly/44OdAMN',
  'https://titrias.com/files/2022/04/typescript.png',
  'https://bit.ly/44OdAMN',
  'https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png',
  'https://bit.ly/3QOeZgK'
]

languages.map((language) => {
  const img = document.createElement('img')
  img.src = language
  divLanguages.appendChild(img)
})

const skills = [
  {
    url: 'https://bit.ly/44OdAMN',
    name: 'React'
  },
  {
    url: 'https://bit.ly/44OdAMN',
    name: 'React Native'
  },
  {
    url: 'https://bit.ly/3V5GzJ1',
    name: 'Next.JS'
  },
  {
    url: 'https://bit.ly/3K8LzpK',
    name: 'TailwindCSS'
  },
  {
    url: 'https://titrias.com/files/2022/04/typescript.png',
    name: 'Typescript'
  },
  {
    url: 'https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png',
    name: 'Dart'
  },
  {
    url: 'https://bit.ly/3QOeZgK',
    name: 'Flutter'
  },
  {
    url: 'https://bit.ly/4dNlXwg',
    name: 'Node.JS'
  },
  {
    url: 'https://bit.ly/4avnpAC',
    name: 'PostgreSQL'
  },
  // {
  //   url: 'https://bit.ly/3QNAkGY',
  //   name: 'Fastify'
  // },
]

skills.map((skill) => {
  const div = document.createElement('div')
  div.id = 'skill'
  const img = document.createElement('img')
  img.src = skill.url
  const span = document.createElement('span')
  span.innerHTML = skill.name
  div.appendChild(img)
  div.appendChild(span)
  divSkills.appendChild(div)
})

fetch('https://api.github.com/users/maarcos4g/repos?sort=created')
.then(response => response.json())
.then(response => {
  const repos = response.slice(0, 4)
  console.log(repos)

  repos.forEach(repo => {
    const divRepo = document.createElement('div')
    const titleRepo = document.createElement('span')
    const descriptionRepo = document.createElement('p')
    const tagsRepo = document.createElement('div')
    const linkRepo = document.createElement('a')

    divRepo.className = 'repo'
    tagsRepo.className = 'tags'
    titleRepo.innerHTML = repo.name
    descriptionRepo.innerHTML = repo.description
    linkRepo.innerHTML = 'Ver no github'
    linkRepo.href = repo.html_url
    linkRepo.target = '_blank'

    repo.topics.forEach(topic => {
    const topicDiv = document.createElement('div')
    topicDiv.innerHTML = topic
    tagsRepo.appendChild(topicDiv)
    })



    divRepo.appendChild(titleRepo)
    divRepo.appendChild(descriptionRepo)
    divRepo.appendChild(tagsRepo)
    divRepo.appendChild(linkRepo)
    divProjects.appendChild(divRepo)
  })
})

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText('marcos.dev07@gmail.com')
})
