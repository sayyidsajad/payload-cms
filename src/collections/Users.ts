import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({})
    }
  ]
}

export default Users
