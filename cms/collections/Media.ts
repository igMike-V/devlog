import { type CollectionConfig } from "payload/types";

import path from 'path';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    adminThumbnail: 'thumbnail',
    staticDir: path.resolve(__dirname, '../../public/media'),
    mimeTypes: ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/gif'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 320,
        height: 320,
        crop: 'center',
      },
      {
        name: 'medium',
        width: 640,
        height: 640,
        crop: 'center',
      },
      {
        name: 'large',
        width: 1280,
        height: 1280,
        crop: 'center',
      },
      { 
        name: 'hero',
        width: 1920,
        height: 1080,
        crop: 'center',
      },
      {
        name: 'portrait',
        width: 768,
        height: 1024,
        crop: 'center',
      }
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
};

export default Media;