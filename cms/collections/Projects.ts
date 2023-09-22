import { type CollectionConfig } from "payload/types";
import { isValidUrl, isValidSlug } from "../utils/validators";

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Url Slug',
      type: 'text',
      required: true,
      validate: (val) => {
        return isValidSlug(val)
      },
    },
    {
      name: 'projectLinks',
      label: 'Live Demo Links',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          name: 'url',
          label: 'Link',
          type: 'text',
          required: true,
          validate: (val) => {
            return isValidUrl(val)
          },
        },
        {
          name: 'linkText',
          label: 'Text for button or link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      label: 'Project Features',
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'details',
          type: 'text',
        },
      ],
    },
    {
      name: 'content',
      label: 'Page Content',
      type: 'richText',
      required: false,
    },
    {
      name: 'technologies',
      label: 'Technologies in project',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
  ],
  
};

export default Projects;