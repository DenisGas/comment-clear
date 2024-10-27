const { execSync } = require('child_process');

const configFiles = ['package.json', 'tsconfig.json', 'webpack.config.js'];
const watchedDirectories = ['src', 'test'];

const changedFiles = execSync('git diff --name-only')
  .toString()
  .trim()
  .split('\n');

const relevantChanges = changedFiles.filter((file) => {
  return (
    configFiles.some((configFile) => file.endsWith(configFile)) ||
    watchedDirectories.some((directory) => file.startsWith(directory))
  );
});

if (relevantChanges.length > 0) {
  console.log(
    '📄🔍 Detected changes in the following config files or watched directories:'
  );
  console.log('✨ ' + relevantChanges.join('\n✨ ')); // Добавляем эмодзи перед каждым измененным файлом

  try {
    console.log('🚀 Running tests...'); // Вывод перед запуском тестов
    execSync('npm test', { stdio: 'inherit' });
    console.log('✅ All tests passed!'); // Вывод, если тесты прошли успешно
  } catch (error) {
    console.log('❌ Tests failed. Please review the errors above.'); // Вывод, если тесты не прошли
    process.exit(1);
  }
} else {
  console.log('📭 No changes detected in config files or watched directories.');
}
