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
      label: 'Getting Started',
      items: [
        'intro',
        'getting-started/start-building',
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
                    'getting-started/setup/instance-configuration/email/sendgrid',
                    'getting-started/setup/instance-configuration/email/amazon-ses',
                    'getting-started/setup/instance-configuration/email/gmail',
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
                'getting-started/setup/instance-management/supervisor',
                'getting-started/setup/instance-management/appsmithctl',
                'getting-started/setup/instance-management/update-appsmith',
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
      //core concepts section start
      type: 'category',
      collapsed: false,
      label: 'Core Concepts',
      items: [
        {
          type: 'category',
          label: 'Connecting to Datasource',
          link: {
            type: 'doc',
            id: 'core-concepts/connecting-to-data-sources/README',
          },
          items: [
            'core-concepts/connecting-to-data-sources/connecting-to-databases',
            {
              type: 'category',
              label: 'REST APIs',
              link: {
                type: 'doc',
                id: 'core-concepts/connecting-to-data-sources/authentication/README',
              },
              items: [
                'core-concepts/connecting-to-data-sources/authentication/connect-to-apis',
                {
                  type: 'category',
                  label: 'Authentication Type',
                  link: {
                    type: 'doc',
                    id: 'core-concepts/connecting-to-data-sources/authentication/authentication-type/README',
                  },
                  items: [
                    'core-concepts/connecting-to-data-sources/authentication/authentication-type/basic-authentication',
                    {
                      type: 'category',
                      label: 'OAuth 2.0',
                      link: {
                        type: 'doc',
                        id: 'core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/README',
                      },
                      items: [
                        'core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/authorization-code',
                        'core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/client-credentials',
                      ],
                    },
                  ],
                },
                'core-concepts/connecting-to-data-sources/authentication/signature-header-in-api-actions',
                'core-concepts/connecting-to-data-sources/authentication/self-signed-certificates',
              ],
            },
          ],
        },
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
            {
              type: 'category',
              label: 'Queries',
              link: {
                type: 'doc',
                id: 'core-concepts/data-access-and-binding/querying-a-database/README',
              },
              items: [
                'core-concepts/data-access-and-binding/querying-a-database/query-settings',
              ],
            },
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
            'reference/widgets/button-group',
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
            'reference/widgets/menu-button',
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
          label: 'Datasources',
          link: { type: 'doc', id: 'reference/datasources/README' },
          items: [
            'reference/datasources/airtable',
            'reference/datasources/querying-amazon-s3',
            'reference/datasources/querying-arango-db',
            'reference/datasources/querying-dynamodb',
            'reference/datasources/querying-elasticsearch',
            'reference/datasources/querying-firestore',
            'reference/datasources/querying-google-sheets',
            'reference/datasources/graphql',
            'reference/datasources/hubspot',
            {
              type: 'category',
              label: 'MongoDB',
              link: {
                type: 'doc',
                id: 'reference/datasources/querying-mongodb/README',
              },
              items: [
                'reference/datasources/querying-mongodb/mongo-syntax',
                'reference/datasources/querying-mongodb/whitelist-mongodb-cloud',
              ],
            },
            'reference/datasources/querying-mssql',
            'reference/datasources/querying-mysql',
            'reference/datasources/querying-postgres',
            'reference/datasources/querying-redis',
            'reference/datasources/querying-redshift',
            'reference/datasources/querying-snowflake-db',
            'reference/datasources/using-smtp',
            'reference/datasources/twilio',
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
              label: 'Actions',
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
      label: 'Advanced Concepts',
      items: [
        'advanced-concepts/custom-authentication',
        'advanced-concepts/sharing-data-across-pages',
        'advanced-concepts/embed-appsmith-into-existing-application',
        'advanced-concepts/audit-logs',
        'advanced-concepts/branding',
        {
          type: 'category',
          label: 'Version Control With Git',
          link: {
            type: 'doc',
            id: 'advanced-concepts/version-control-with-git/README',
          },
          items: [
            'advanced-concepts/version-control-with-git/connecting-to-git-repository',
            'advanced-concepts/version-control-with-git/import-from-repository',
            'advanced-concepts/version-control-with-git/commit-and-push',
            'advanced-concepts/version-control-with-git/working-with-branches',
            'advanced-concepts/version-control-with-git/pull-and-sync',
            'advanced-concepts/version-control-with-git/merging-branches',
            'advanced-concepts/version-control-with-git/disconnect-the-git-repository',
            'advanced-concepts/version-control-with-git/updating-local-file-path',
          ],
        },
        {
          type: 'category',
          label: 'Access Control',
          link: {type: 'doc', id:  'advanced-concepts/access-control/README'},
          items: [
          {
            type: 'category',
            label: 'Granular Access Control',
            link: {
              type: 'doc',
              id: 'advanced-concepts/access-control/granular-access-control/README',
            },
            items: [
              'advanced-concepts/access-control/granular-access-control/roles', 
          ]
        },
      ],
       },
        {
          type: 'category',
          label: 'More',
          link: { type: 'doc', id: 'advanced-concepts/more/README' },
          items: [
            'advanced-concepts/more/how-to-work-with-local-apis-on-appsmith',
            'advanced-concepts/more/backup-restore',
            'advanced-concepts/more/keyboard-shortcuts',
          ],
        },
      ],
    }, //Advanced Concepts end
    {
      //Learning and Resources start
      type: 'category',
      collapsed: false,
      label: 'Learning & Resources',
      items: [
        {
          type: 'category',
          label: 'Tutorials',
          link: { type: 'doc', id: 'learning-and-resources/tutorials/README' },
          items: [
            {
              type: 'category',
              label: 'Review Moderator Dashboard',
              link: {
                type: 'doc',
                id: 'learning-and-resources/tutorials/review-moderator-dashboard/README',
              },
              items: [
                'learning-and-resources/tutorials/review-moderator-dashboard/setting-up-the-app',
                'learning-and-resources/tutorials/review-moderator-dashboard/connecting-to-data-source-and-binding-queries',
                'learning-and-resources/tutorials/review-moderator-dashboard/building-ui-and-accessing-widget-properties',
                'learning-and-resources/tutorials/review-moderator-dashboard/creating-interactive-views-using-lists-and-charts',
              ],
            },
            {
              type: 'category',
              label: 'Building a Store Catalog Manager',
              link: {
                type: 'doc',
                id: 'learning-and-resources/tutorials/building-a-store-catalog-manager/README',
              },
              items: [
                'learning-and-resources/tutorials/building-a-store-catalog-manager/building-a-simple-ui',
                'learning-and-resources/tutorials/building-a-store-catalog-manager/using-forms',
                'learning-and-resources/tutorials/building-a-store-catalog-manager/creating-interactive-views',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'How To Guides',
          link: {
            type: 'doc',
            id: 'learning-and-resources/how-to-guides/README',
          },
          items: [
            'learning-and-resources/how-to-guides/how-to-use-js-object-within-appsmith',
            'learning-and-resources/how-to-guides/writing-javascript-in-appsmith',
            'learning-and-resources/how-to-guides/how-to-use-filters-on-appsmith-table-widget',
            'learning-and-resources/how-to-guides/build-auto-generated-forms-using-list-widget',
            'learning-and-resources/how-to-guides/how-to-upload-to-s3',
            'learning-and-resources/how-to-guides/how-to-use-the-camera-image-widget-to-upload-download-images',
            'learning-and-resources/how-to-guides/how-to-work-with-google-sheets-on-appsmith',
            'learning-and-resources/how-to-guides/oauth2-authorization-for-google-sheets',
            'learning-and-resources/how-to-guides/aws-whitelist',
            'learning-and-resources/how-to-guides/returning-data-from-a-stored-procedure',
            'learning-and-resources/how-to-guides/use-mssql-as-data-source',
            'learning-and-resources/how-to-guides/use-notion-as-database-on-appsmith',
            'learning-and-resources/how-to-guides/how-to-use-redis-as-a-data-source-on-apppsmith',
            'learning-and-resources/how-to-guides/use-redshift-as-data-source-on-appsmith',
            'learning-and-resources/how-to-guides/how-to-use-elasticsearch-as-a-data-source-on-appsmith',
            'learning-and-resources/how-to-guides/how-to-use-prepared-statements',
            'learning-and-resources/how-to-guides/use-git-to-create-different-environments',
            'learning-and-resources/how-to-guides/how-to-get-container-logs',
          ],
        },
        'learning-and-resources/sample-apps',
        'learning-and-resources/integrations',
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
      // link: {
      //   type: 'doc',
      //   id: 'help-and-support/troubleshooting-guide/README',
      // },
      items: [
        'help-and-support/troubleshooting-guide',
        'help-and-support/troubleshooting-guide/deployment-errors',
        'help-and-support/troubleshooting-guide/application-errors',
        {
          // Help & Support start
          type: 'category',
          label: 'Datasource Errors',
          link: {
            type: 'doc',
            id: 'help-and-support/troubleshooting-guide/action-errors/README',
          },
          items: [
            'help-and-support/troubleshooting-guide/action-errors/s3-errors',
            'help-and-support/troubleshooting-guide/action-errors/arangodb-errors',
            'help-and-support/troubleshooting-guide/action-errors/dynamodb-errors',
            'help-and-support/troubleshooting-guide/action-errors/elasticsearch-errors',
            'help-and-support/troubleshooting-guide/action-errors/firestore-errors',
            'help-and-support/troubleshooting-guide/action-errors/google-sheets-plugin-errors',
            'help-and-support/troubleshooting-guide/action-errors/graphql-errors',
            'help-and-support/troubleshooting-guide/action-errors/mongodb-errors',
            'help-and-support/troubleshooting-guide/action-errors/mssql-errors',
            'help-and-support/troubleshooting-guide/action-errors/mysql-plugin-errors',
            'help-and-support/troubleshooting-guide/action-errors/postgresql-errors',
            'help-and-support/troubleshooting-guide/action-errors/redis-errors',
            'help-and-support/troubleshooting-guide/action-errors/redshift-errors',
            'help-and-support/troubleshooting-guide/action-errors/rest-api-errors',
            'help-and-support/troubleshooting-guide/action-errors/rest-api-errors2',
            'help-and-support/troubleshooting-guide/action-errors/snowflake-errors',
            'help-and-support/troubleshooting-guide/action-errors/smtp-errors',
            'help-and-support/troubleshooting-guide/action-errors/datasource-errors',
          ],
        },
        'help-and-support/troubleshooting-guide/widget-errors',
        'help-and-support/troubleshooting-guide/js-errors',
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
