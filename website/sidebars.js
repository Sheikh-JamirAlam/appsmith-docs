/**
 * Creating a sidebar enables you to:
 'create an ordered group of docs
 'render a sidebar for each doc of that group
 'provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      //getting started section start
      type: 'category',
      collapsed: false,
      label: 'Get Started',
      items: [
        'intro',
        {
          type: 'category',
          label: 'Tutorials',
          link: { type: 'doc', id: 'getting-started/tutorials/README' },
          items: [
            'getting-started/tutorials/start-building',
            {
              type: 'category',
              label: 'Customer Support Tool',
              link: {
                type: 'doc',
                id: 'getting-started/tutorials/customer-support-tool/README',
              },
              items: [
                'getting-started/tutorials/customer-support-tool/build-the-dashboard',
                'getting-started/tutorials/customer-support-tool/view-ticket-details',
                'getting-started/tutorials/customer-support-tool/add-new-tickets',
                'getting-started/tutorials/customer-support-tool/edit-ticket-details',
                'getting-started/tutorials/customer-support-tool/comments-on-tickets',
                'getting-started/tutorials/customer-support-tool/application-settings'
              ],
            },
            // Hiding the tutorials
            // {
            //   type: 'category',
            //   label: 'Review Moderator Dashboard',
            //   link: {
            //     type: 'doc',
            //     id: 'getting-started/tutorials/review-moderator-dashboard/README',
            //   },
            //   items: [
            //     'getting-started/tutorials/review-moderator-dashboard/setting-up-the-app',
            //     'getting-started/tutorials/review-moderator-dashboard/connecting-to-data-source-and-binding-queries',
            //     'getting-started/tutorials/review-moderator-dashboard/building-ui-and-accessing-widget-properties',
            //     'getting-started/tutorials/review-moderator-dashboard/creating-interactive-views-using-lists-and-charts',
            //   ],
            // },
            // {
            //   type: 'category',
            //   label: 'Building a Store Catalog Manager',
            //   link: {
            //     type: 'doc',
            //     id: 'getting-started/tutorials/building-a-store-catalog-manager/README',
            //   },
            //   items: [
            //     'getting-started/tutorials/building-a-store-catalog-manager/building-a-simple-ui',
            //     'getting-started/tutorials/building-a-store-catalog-manager/using-forms',
            //     'getting-started/tutorials/building-a-store-catalog-manager/creating-interactive-views',
            //   ],
            // },
          ],
        },

        {
          type: 'category',
          label: 'Self Hosting',
          link: { type: 'doc', id: 'getting-started/setup/README' },
          items: [
            {
              type: 'category',
              label: 'Installation Guides',
              link: {
                type: 'doc',
                id: 'getting-started/setup/installation-guides/README',
              },
              items: [
                {
                  type: 'category',
                  label: 'Docker',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/installation-guides/docker/README',
                  },
                  items: [
                    'getting-started/setup/installation-guides/docker/migrate',
                  ],
                },
                {
                  type: 'category',
                  label: 'Kubernetes',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/installation-guides/kubernetes/README',
                  },
                  items: [
                    'getting-started/setup/installation-guides/kubernetes/configure-high-availability',
                    'getting-started/setup/installation-guides/kubernetes/publish-appsmith-online',
                    'getting-started/setup/installation-guides/kubernetes/migrate-to-be-chart',
                    'getting-started/setup/installation-guides/kubernetes/migrate-to-helm-chart-v2-ce',
                    'getting-started/setup/installation-guides/kubernetes/migrate-k8s',
                  ],
                },
                'getting-started/setup/installation-guides/aws-ami',
                'getting-started/setup/installation-guides/aws-ecs',
                'getting-started/setup/installation-guides/aws-ecs-on-fargate',
                'getting-started/setup/installation-guides/azure-aci',
                'getting-started/setup/installation-guides/digitalocean',
                'getting-started/setup/installation-guides/heroku',
                'getting-started/setup/installation-guides/cloudjiffy',
                'getting-started/setup/installation-guides/ansible',
                'getting-started/setup/installation-guides/restack',
              ],
            },
            {
              type: 'category',
              label: 'Instance Configuration',
              link: {
                type: 'doc',
                id: 'getting-started/setup/instance-configuration/README',
              },
              items: [
                {
                  type: 'category',
                  label: 'Authentication',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/instance-configuration/authentication/README',
                  },
                  items: [
                    'getting-started/setup/instance-configuration/authentication/google-login',
                    'getting-started/setup/instance-configuration/authentication/github-login',
                    {
                      type: 'category',
                      label: 'SAML SSO',
                      link: {
                        type: 'doc',
                        id: 'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/README',
                      },
                      items: [
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/active-directory',
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/auth0',
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/okta',
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'OpenID Connect SSO',
                      link: {
                        type: 'doc',
                        id: 'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/README',
                      },
                      items: [
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/active-directory',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/aws-cognito',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/auth0',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/okta',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/ping-identity',
                      ],
                    },
                    'getting-started/setup/instance-configuration/authentication/json-web-tokens-jwt',
                  ],
                },
                {
                  type: 'category',
                  label: 'Email',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/instance-configuration/email/README',
                  },
                  items: [
                    'getting-started/setup/instance-configuration/email/gmail',
                    'getting-started/setup/instance-configuration/email/sendgrid',
                    'getting-started/setup/instance-configuration/email/amazon-ses',
                  ],
                },
                'getting-started/setup/instance-configuration/custom-mongodb-redis',
                'getting-started/setup/instance-configuration/disable-intercom',
                'getting-started/setup/instance-configuration/google-maps',
                'getting-started/setup/instance-configuration/disable-user-signup',
                {
                  type: 'category',
                  label: 'Custom Domain and SSL',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/instance-configuration/custom-domain/README',
                  },
                  items: [
                    'getting-started/setup/instance-configuration/custom-domain/configure-tls',
                    'getting-started/setup/instance-configuration/custom-domain/custom-ca-root-certificate',
                  ],
                },
                'getting-started/setup/instance-configuration/frame-ancestors',
              ],
            },
            {
              type: 'category',
              label: 'Instance Management',
              link: {
                type: 'doc',
                id: 'getting-started/setup/instance-management/README',
              },
              items: [
                'getting-started/setup/instance-management/update-appsmith',
                'getting-started/setup/instance-management/how-to-get-container-logs',
                'getting-started/setup/instance-management/appsmithctl', 
                'getting-started/setup/instance-management/supervisor',
                'getting-started/setup/instance-management/maintenance-window',
              ],
            },
            {
              type: 'category',
              label: 'Upgrade to Business Edition',
              link: {
                type: 'doc',
                id: 'getting-started/setup/upgrade-to-business-edition/README',
              },
              items: [
                'getting-started/setup/upgrade-to-business-edition/docker',
                'getting-started/setup/upgrade-to-business-edition/kubernetes',
              ],
            },
          ],
        },

        'getting-started/faq',
      ],
    }, //getting started section end
    {
      //Data start
      type: 'category',
      collapsed: false,
      label: 'Connect Data',
      items: [
        'connect-data/overview',
        {
          type: 'category',
          collapsed: true,
          label: 'How-To Guides',
          link: { type: 'doc', id: 'connect-data/how-to-guides/README' },
          items: [
            'connect-data/how-to-guides/connect-datasource',
            'connect-data/how-to-guides/query-data',
            'connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith',
            'connect-data/how-to-guides/how-to-pass-params-to-an-api',
            'connect-data/how-to-guides/how-to-upload-to-s3',
            'connect-data/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images',
            'connect-data/how-to-guides/returning-data-from-a-stored-procedure',
            'connect-data/how-to-guides/how-to-integrate-dropbox',
            'connect-data/how-to-guides/how-to-integrate-zoho',
          ]
        },
        {
          type: 'category',
          label: 'Reference',
          link: { type: 'doc', id: 'connect-data/reference/README' },
          items: [
            'connect-data/reference/airtable',
            'connect-data/reference/querying-amazon-s3',
            'connect-data/reference/querying-arango-db',
            'connect-data/reference/authenticated-api',
            'connect-data/reference/curl-import',
            'connect-data/reference/querying-dynamodb',
            'connect-data/reference/querying-elasticsearch',
            'connect-data/reference/querying-firestore',
            'connect-data/reference/querying-google-sheets',
            'connect-data/reference/graphql',
            'connect-data/reference/hubspot',
            {
            type: 'category',
            label: 'MongoDB',
            link: {
                type: 'doc',
                id: 'connect-data/reference/querying-mongodb/README',
            },
            items: [
                'connect-data/reference/querying-mongodb/mongo-syntax'
            ],
          },
          'connect-data/reference/querying-mssql',
          'connect-data/reference/querying-mysql',
          'connect-data/reference/querying-oracle',
          'connect-data/reference/querying-postgres',
          'connect-data/reference/querying-redis',
          'connect-data/reference/querying-redshift',
          'connect-data/reference/rest-api',
          'connect-data/reference/querying-snowflake-db',
          'connect-data/reference/using-smtp',
          'connect-data/reference/twilio',
          'connect-data/reference/query-settings',
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Concepts',
          link: { type: 'doc', id: 'connect-data/concepts/README' },
          items: [
            'connect-data/concepts/connection-pooling',
            'connect-data/concepts/how-to-use-prepared-statements',
          ]
        },
        'connect-data/integrations'
      ]
    }, //Data end
    {
      //core concepts section start
      type: 'category',
      collapsed: false,
      label: 'Core Concepts',
      items: [
        {
          type: 'category',
          label: 'Building UI',
          link: { type: 'doc', id: 'core-concepts/building-ui/README' },
          items: [
            {
              type: 'category',
              label: 'Designing an Application',
              link: {
                type: 'doc',
                id: 'core-concepts/building-ui/designing-an-application/README',
              },
              items: [
                'core-concepts/building-ui/designing-an-application/app-theming',
                'core-concepts/building-ui/designing-an-application/application-layout',
              ],
            },
            {
              type: 'category',
              label: 'Building Dynamic UI',
              link: {
                type: 'doc',
                id: 'core-concepts/building-ui/dynamic-ui/README',
              },
              items: ['core-concepts/building-ui/dynamic-ui/widget-visibility'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Access and Binding',
          link: {
            type: 'doc',
            id: 'core-concepts/data-access-and-binding/README',
          },
          items: [
            'core-concepts/data-access-and-binding/querying-a-database',
            'core-concepts/data-access-and-binding/displaying-data-read/README',
            {
              type: 'category',
              label: 'Capturing Data (Write)',
              link: {
                type: 'doc',
                id: 'core-concepts/data-access-and-binding/capturing-data-write/README',
              },
              items: [
                'core-concepts/data-access-and-binding/capturing-data-write/capture-form-data',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Writing Code',
          link: { type: 'doc', id: 'core-concepts/writing-code/README' },
          items: [
            {
              type: 'category',
              label: 'JS Objects',
              link: {
                type: 'doc',
                id: 'core-concepts/writing-code/javascript-editor-beta/README',
              },
              items: [
                'core-concepts/writing-code/javascript-editor-beta/asynchronous-javascript-function-settings',
              ],
            },
            'core-concepts/writing-code/workflows',
            'core-concepts/writing-code/javascript-promises',
            'core-concepts/writing-code/ext-libraries',
            {
              type: 'link',
              label: 'Appsmith Framework',
              href: '/reference/appsmith-framework/',
            },
          ],
        },
      ],
    }, //core concepts end
    
    {
      //Reference start
      type: 'category',
      collapsed: false,
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Widgets',
          link: { type: 'doc', id: 'reference/widgets/README' },
          items: [
            'reference/widgets/audio',
            'reference/widgets/audio-recorder',
            {
              type: 'category',
              label: 'Button',
              link: { type: 'doc', id: 'reference/widgets/button/README' },
              items: ['reference/widgets/button/google-recaptcha'],
            },
            {
              type: 'category',
              label: 'Button Group',
              link: { type: 'doc', id: 'reference/widgets/button-group/README' },
              items: [
                'reference/widgets/button-group/buttons'
              ],
            },
            'reference/widgets/camera',
            'reference/widgets/chart',
            'reference/widgets/checkbox',
            'reference/widgets/checkbox-group',
            'reference/widgets/code-scanner',
            'reference/widgets/container',
            'reference/widgets/currency-input',
            'reference/widgets/datepicker',
            'reference/widgets/divider',
            'reference/widgets/document-viewer',
            'reference/widgets/form',
            'reference/widgets/filepicker',
            'reference/widgets/icon-button',
            'reference/widgets/iframe',
            'reference/widgets/image',
            'reference/widgets/input',
            'reference/widgets/json-form',
            'reference/widgets/list',
            'reference/widgets/maps',
            'reference/widgets/map-chart',
            {
              type: 'category',
              label: 'Menu Button',
              link: { type: 'doc', id: 'reference/widgets/menu/README' },
              items: [
                'reference/widgets/menu/menu-items'
              ],
            },
            'reference/widgets/modal',
            'reference/widgets/multiselect',
            'reference/widgets/multi-tree-select',
            'reference/widgets/phone-input',
            'reference/widgets/progress',
            'reference/widgets/radio-group',
            'reference/widgets/rating',
            'reference/widgets/rich-text-editor',
            'reference/widgets/select',
            {
              type: 'category',
              label: 'Sliders',
              link: { type: 'doc', id: 'reference/widgets/sliders/README' },
              items: [
                'reference/widgets/sliders/category-slider',
                'reference/widgets/sliders/number-slider',
                'reference/widgets/sliders/range-slider',
              ],
            },
            'reference/widgets/stat-box',
            'reference/widgets/switch',
            'reference/widgets/switch-group',
            'reference/widgets/tabs',
            {
              type: 'category',
              label: 'Table',
              link: { type: 'doc', id: 'reference/widgets/table/README' },
              items: [
                'reference/widgets/table/column-settings',
                'reference/widgets/table/inline-editing',
              ],
            },
            'reference/widgets/text',
            'reference/widgets/tree-select',
            'reference/widgets/video',
          ],
        },
        {
          type: 'category',
          label: 'Appsmith Framework',
          link: { type: 'doc', id: 'reference/appsmith-framework/README' },
          items: [
            'reference/appsmith-framework/context-object',
            'reference/appsmith-framework/console-object',
            'reference/appsmith-framework/query-object',
            {
              type: 'category',
              label: 'Framework Functions',
              link: {
                type: 'doc',
                id: 'reference/appsmith-framework/widget-actions/README',
              },
              items: [
                'reference/appsmith-framework/widget-actions/navigate-to',
                'reference/appsmith-framework/widget-actions/show-alert',
                'reference/appsmith-framework/widget-actions/show-modal',
                'reference/appsmith-framework/widget-actions/close-modal',
                'reference/appsmith-framework/widget-actions/store-value',
                'reference/appsmith-framework/widget-actions/download',
                'reference/appsmith-framework/widget-actions/copy-to-clipboard',
                'reference/appsmith-framework/widget-actions/reset-widget',
                'reference/appsmith-framework/widget-actions/intervals-time-events',
                'reference/appsmith-framework/widget-actions/post-message'
              ]
            },
          ],
        },
      ],
    }, //Reference End
    {
      //Advanced Concepts Start
      type: 'category',
      collapsed: false,
      label: 'Manage Apps and Users',
      items: [
        'advanced-concepts/embed-appsmith-into-existing-application',
        'advanced-concepts/custom-authentication',
        'advanced-concepts/invite-users',
        {
          type: 'category',
          label: 'Granular Access Control',
          link: {type: 'doc', id:  'advanced-concepts/granular-access-control/README',},
          items: [
              'advanced-concepts/granular-access-control/roles', 
          ]
        },
        {
          type: 'category',
          label: 'Version Control with Git',
          link: {
            type: 'doc',
            id: 'advanced-concepts/version-control-with-git/README',
          },
          items: [
            {
              type: 'category',
              label: 'Connect to a Git Repository',
              link: {
                type: 'doc',
                id: 'advanced-concepts/version-control-with-git/connecting-to-git-repository',
              },
              items: ['advanced-concepts/version-control-with-git/updating-local-file-path',],
            },
            'advanced-concepts/version-control-with-git/working-with-branches',
            'advanced-concepts/version-control-with-git/commit-and-push',
            'advanced-concepts/version-control-with-git/merging-branches',
            'advanced-concepts/version-control-with-git/revert-changes',
            'advanced-concepts/version-control-with-git/import-from-repository',
            'advanced-concepts/version-control-with-git/environments-with-git',            
          ],
        },
        'advanced-concepts/sharing-data-across-pages',
        'advanced-concepts/more/backup-restore',
        'advanced-concepts/audit-logs',
        'advanced-concepts/branding',
      ],
    }, //Advanced Concepts end
    {
      //Learning and Resources start
      type: 'category',
      collapsed: false,
      label: 'Resources',
      items: [
        'learning-and-resources/sample-apps',
        {
          type: 'link',
          label: 'Templates', // The link label
          href: 'https://www.appsmith.com/templates', // The external URL
        },
      ],
    }, //Learning and Resources end
    {
      // Help & Support start
      type: 'category',
      collapsed: false,
      label: 'Troubleshooting',
      link: {
        type: 'doc',
        id: 'help-and-support/troubleshooting-guide/README',
      },
      items: [
        {
          // Help & Support start
          type: 'category',
          label: 'Action Errors',
          link: {
            type: 'doc',
            id: 'help-and-support/troubleshooting-guide/action-errors/README',
          },
          items: [
            'help-and-support/troubleshooting-guide/action-errors/datasource-errors',
            'help-and-support/troubleshooting-guide/action-errors/rest-api-errors',
            'help-and-support/troubleshooting-guide/action-errors/mongodb-errors',
            'help-and-support/troubleshooting-guide/action-errors/mysql-plugin-errors',
            'help-and-support/troubleshooting-guide/action-errors/google-sheets-plugin-errors',
          ],
        },
        'help-and-support/troubleshooting-guide/js-errors',
        'help-and-support/troubleshooting-guide/deployment-errors',
        'help-and-support/troubleshooting-guide/application-errors',
        'help-and-support/troubleshooting-guide/query-errors',
        'help-and-support/troubleshooting-guide/widget-errors',
      ],
    }, // Help & Support end
    {
      // Product Start
      type: 'category',
      collapsed: false,
      label: 'Product',
      items: [
        'product/security',
        'product/telemetry',
        {
          type: 'link',
          label: 'Release Notes', // The link label
          href: 'https://github.com/appsmithorg/appsmith/releases', // The external URL
        },
        {
          type: 'link',
          label: 'Contribute', // The link label
          href: 'https://github.com/appsmithorg/appsmith/blob/release/CONTRIBUTING.md', // The external URL
        },
      ],
    }, // Product End
  ],
};

module.exports = sidebars;
