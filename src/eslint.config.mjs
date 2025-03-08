import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import validateFilename from "eslint-plugin-validate-filename";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "validate-filename": validateFilename
    },
    rules: {
      "validate-filename/naming-rules": [
        "error",
        {
          rules: [
            {
              case: "kebab",
              target: "**/app/**",
              patterns: "^(page|layout|loading|error|not-found|route|template).tsx$"
            },
            {
              case: "pascal",
              target: "**/components/**"
            },
            {
              case: "camel",
              target: "**/hooks/**",
              patterns: "^use"
            },
            {
              case: "camel",
              target: "**/const/**"
            },
            {
              case: "camel",
              target: "**/types/**"
            },
            {
              case: "camel",
              target: "**/lib/**"
            }
          ]
        }
      ],
      "validate-filename/limit-extensions": [
        "error",
        {
          rules: [
            {
              target: "**/app/**",
              extensions: [".tsx"]
            },
            {
              target: "**/components/**",
              extensions: [".tsx"]
            },
            {
              target: "**/hooks/**",
              extensions: [".ts", ".tsx"]
            },
            {
              target: "**/const/**",
              extensions: [".ts"]
            },
            {
              target: "**/types/**",
              extensions: [".ts"]
            },
            {
              target: "**/lib/**",
              extensions: [".ts"]
            }
          ]
        }
      ]
    }
  }
];

export default eslintConfig;
