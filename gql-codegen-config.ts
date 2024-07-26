import type { CodegenConfig } from '@graphql-codegen/cli';

const SCALARS = {
  Date: 'string',
  DateTime: 'string',
  JSON: 'JSONValue',
  JSONString: 'string',
  UUID: 'string',
  BigInt: 'bigint',
};

const JSON_SCALAR_IMPORT_PLUGIN = {
  add: {
    content: "import type { JSONValue } from '@trakcap/helper-types'",
  },
};

const config: CodegenConfig = {
  schema: process.env.VITE_APP_API_ENDPOINT,

  generates: {
    'src/shared/types/graphql/__generated__/fragmentTypes.ts': {
      plugins: ['fragment-matcher'],
      config: {
        apolloClientVersion: 3,
      },
    },

    'src/shared/types/graphql/__generated__/types.ts': {
      documents: ['src/shared/types/graphql/*.ts'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        JSON_SCALAR_IMPORT_PLUGIN,
      ],
      config: {
        documentMode: 'documentNode',
        withHooks: true,
        scalars: SCALARS,
      },
    },
  },

  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },

  overwrite: true,
};

export default config;
