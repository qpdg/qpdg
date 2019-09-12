export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7a12466029c7b29831271c',
                  title: 'Sanity Studio',
                  name: 'qpdg-studio',
                  apiId: 'a9e32bea-b418-4001-a2f9-f7575dd200ac'
                },
                {
                  buildHookId: '5d7a12466ea4d604db547f47',
                  title: 'Blog Website',
                  name: 'qpdg',
                  apiId: '7530be50-3c58-445d-9531-5fdcb7b34dab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qpdg/qpdg',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://qpdg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
