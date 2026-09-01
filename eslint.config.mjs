import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: ["source-assets/**", ".next/**", "out/**"],
  },
];

export default eslintConfig;
