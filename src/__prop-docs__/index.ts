/**
 * THIS IS AN AUTOGENERATED FILE. ALL CHANGES WILL BE LOST.
 */
import type { Manifest } from '@microsoft/arbutus.prop-docs-cli';

const manifest: Manifest = {
  DemoComponent: {
    tags: {},
    filePath: '__dev__/demo-component/demo-component.tsx',
    description: '',
    displayName: 'DemoComponent',
    methods: [],
    props: {
      title: {
        defaultValue: null,
        description: 'The title of the DemoComponent.',
        name: 'title',
        declarations: [
          {
            fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
            name: 'TypeLiteral',
          },
        ],
        required: true,
        type: { name: 'string' },
      },
      description: {
        defaultValue: null,
        description: 'Description of the DemoComponent.',
        name: 'description',
        declarations: [
          {
            fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: { name: 'string' },
      },
      callToAction: {
        defaultValue: { value: 'Hello 👋' },
        description: 'Call to action text.',
        name: 'callToAction',
        declarations: [
          {
            fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: { name: 'string' },
      },
      className: {
        defaultValue: null,
        description: 'Custom class name for the component root.',
        name: 'className',
        declarations: [
          {
            fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: { name: 'string' },
      },
      onClick: {
        defaultValue: null,
        description: 'Click handler.',
        name: 'onClick',
        declarations: [
          {
            fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
            name: 'TypeLiteral',
          },
        ],
        required: true,
        type: { name: '() => void' },
      },
      text: {
        defaultValue: null,
        description: 'Text to display.\n@deprecated Use `title` instead.',
        name: 'text',
        declarations: [
          {
            fileName: 'prop-table/__dev__/demo-component/demo-component.types.tsx',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: { name: 'string' },
      },
    },
  },
};

export default manifest;
