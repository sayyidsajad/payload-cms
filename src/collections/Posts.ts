import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'text',
      type: 'richText',
      editor: lexicalEditor({})
    }
  ]
}

export default Posts
