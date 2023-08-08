/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'overview',
    'quickstart',
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: "autogenerated",
          dirName: "deploy",
        },
      ],
    },
    {
      type: 'category',
      label: 'Application Management',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: "autogenerated",
          dirName: "application",
        },
      ],
    },
    {
      type: 'category',
      label: 'Cost Management',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: "autogenerated",
          dirName: "cost",
        },
      ],
    },
    {
      type: 'category',
      label: 'Operation Hub',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: "autogenerated",
          dirName: "operation",
        },
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: "autogenerated",
          dirName: "setting",
        }
      ]
    },
    'faq',
  ],
  openapi: [
    {
      type: "category",
      label: "API Docs",
      link: {
        type: "generated-index",
        title: "API Docs",
        slug: "/category/openapi",
      },
      items: require("./docs/openapi/sidebar.js"),
    },
  ],
  cli: [
    {
      type: "category",
      label: "CLI Docs",
      link: {
        type: "generated-index",
        title: "CLI Docs",
        slug: "/category/cli",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "cli",
        }
      ]
    },
  ]
};

module.exports = sidebars;
