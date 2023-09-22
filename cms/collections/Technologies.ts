import { type CollectionConfig } from "payload/types";

const Technologies: CollectionConfig = {
  slug: "technologies",
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    }
  ],
};

export default Technologies;