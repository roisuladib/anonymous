import path from 'path';

/**
 * Builds the ESLint command for the given filenames.
 * @param {string[]} filenames - An array of filenames to lint.
 * @returns {string} The ESLint command string.
 */
function buildEslintCommand(filenames) {
  // Map filenames to relative paths and join them with '--file '
  const fileArgs = filenames.map(f => path.relative(process.cwd(), f)).join(' --file ');

  return `next lint --fix --file ${fileArgs}`;
}

/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
