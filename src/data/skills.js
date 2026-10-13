
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const skillCategories = [
  {
    title: 'Frontend',
    description: 'Interfaces y experiencia de usuario',
    gradient: 'from-sky-400 to-blue-600',
    skills: [
      { name: 'HTML',       icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS',        icon: `${DEVICON}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'React',      icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Tailwind',   icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      {name: 'Bootstrap', icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },

    ],
  },
  {
    title: 'Backend',
    description: 'Lógica, servidores y datos',
    gradient: 'from-violet-400 to-fuchsia-600',
    skills: [
      { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
      { name: 'Java',  icon: `${DEVICON}/java/java-original.svg` },
      { name: 'Kotlin',  icon: `${DEVICON}/kotlin/kotlin-original.svg` },
      { name: 'MySQL',  icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: 'SQLite',  icon: `${DEVICON}/sqlite/sqlite-original.svg` },
      { name: 'Oracle SQL Developer',icon: `${DEVICON}/oracle/oracle-original.svg `},
      { name: 'Node.js',  icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    title: 'Herramientas',
    description: 'Lo que uso en el día a día',
    gradient: 'from-pink-400 to-orange-500',
    skills: [
      { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg` },
      { name: 'Android Studio',     icon: `${DEVICON}/androidstudio/androidstudio-original.svg` },
      { name: 'Git',     icon: `${DEVICON}/git/git-original.svg` },
      { name: 'GitHub',     icon: `${DEVICON}/github/github-original.svg` },
      { name: 'Trello',     icon: `${DEVICON}/trello/trello-original.svg` },
      { name: 'Jira',     icon: `${DEVICON}/jira/jira-original.svg` }
    ],
  },
  
]
