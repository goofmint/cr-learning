import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '理解編',
      collapsed: false,
      items: [
        'code-review',
        'ai-code-review',
        'coderabbit',
        'github-flow-pr',
      ],
    },
    {
      type: 'category',
      label: '実践編',
      collapsed: false,
      items: [
        'application-overview',
        'environment-setup',
        {
          type: 'category',
          label: 'PRレビュー',
          collapsed: false,
          items: [
            'coderabbit-setup',
            'ogp-implementation',
            'create-pull-request',
            'experience-coderabbit-review',
          ],
        },
        {
          type: 'category',
          label: 'IDEレビュー',
          collapsed: false,
          items: [
            'vscode-extension-setup',
            'implement-tag-filter',
            'experience-ide-review',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '振り返り編',
      collapsed: false,
      items: [
        'good-review',
      ],
    },
  ],
};

export default sidebars;
