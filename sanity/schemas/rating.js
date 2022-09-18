export default {
  name: 'rating',
  type: 'document',
  title: 'Rating',
  fields: [
    {
      name: 'album',
      type: 'reference',
      to: {type: 'video'}
    },
    {
      name: 'stars',
      type: 'number',
      title: 'stars',
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'comment',
      type: 'text',
      title: 'comment'
    }
  ]
}