import { GlobalConfig } from 'payload'

// TODO: preview

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  fields: [
    {
      name: 'campDateFrom',
      type: 'date',
      label: 'Camp Date From',
    },
    {
      name: 'campDateTo',
      type: 'date',
      label: 'Camp Date To',
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
  ],
}
