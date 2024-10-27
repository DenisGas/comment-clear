const { execSync } = require('child_process');
const path = require('path');

const configFiles = ['package.json', 'tsconfig.json', 'webpack.config.js'];
const watchedDirectories = ['src', 'test'];

const changedFiles = execSync('git diff --name-only --cached')
  .toString()
  .trim()
  .split('\n');

const relevantChanges = changedFiles.filter((filePath) => {
  const fileName = path.basename(filePath);
  const directory = path.dirname(filePath);

  return (
    configFiles.includes(fileName) ||
    watchedDirectories.some((watchedDir) => directory.startsWith(watchedDir))
  );
});

if (relevantChanges.length > 0) {
  console.log(
    '📄🔍 Detected changes in the following config files or watched directories:'
  );
  console.log('✨ ' + relevantChanges.join('\n✨ '));

  try {
    console.log('🚀 Running tests...');
    execSync('npm test', { stdio: 'inherit' });
    console.log('✅ All tests passed!');
  } catch (error) {
    console.log('❌ Tests failed. Please review the errors above.');
    process.exit(1);
  }
} else {
  console.log('📭 No changes detected in config files or watched directories.');
}
