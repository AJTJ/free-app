import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080",
  documents: "api/**/*.tsx",
  generates: {
    "api/types/types.generated.ts": { plugins: ["typescript"] },
    "api/types/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
    "api/gql/": {
      preset: "client",
      plugins: [],
    },
    "graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;