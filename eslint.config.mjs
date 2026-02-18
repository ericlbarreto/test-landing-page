import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,

	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
	{
		rules: {
			// ✅ tabs reais
			indent: ["error", "tab", { SwitchCase: 4 }],

			// ✅ JSX com tabs
			"react/jsx-indent": ["error", "tab"],
			"react/jsx-indent-props": ["error", "tab"],

			// ✅ evita mistura de tabs e espaços
			"no-mixed-spaces-and-tabs": "error",

			// ✅ garante que "tab" não seja proibido
			"no-tabs": "off",
		},
	},
]);

export default eslintConfig;
