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
      label: '部署',
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
      label: '应用管理',
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
      label: '成本中心',
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
      label: '运维中心',
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
      label: '系统设置',
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
    'telemetry'
  ],
  openapi: [
    {
      type: "category",
      label: "API 文档",
      link: {
        type: "generated-index",
        title: "API 文档",
        slug: "/category/openapi",
      },
      items: require("./docs/openapi/sidebar.js"),
    },
  ],
  cli: [
    {
      type: "category",
      label: "CLI 文档",
      link: {
        type: "generated-index",
        title: "CLI 文档",
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
