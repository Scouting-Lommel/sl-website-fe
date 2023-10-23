console.log('> prebuilding...');
const path = require('node:path');
const fs = require('fs');
const rimraf = require('rimraf');

const baseDir = process.cwd();

const patchNextRequireHook = async () => {
  const file = path.join(baseDir, 'node_modules', 'next', 'dist', 'server', 'require-hook.js');

  const content = await fs.promises.readFile(file, 'utf-8');
  await fs.promises.writeFile(
    file,
    content.replace('if (process.env.__NEXT_PRIVATE_PREBUNDLED_REACT) {', 'if (true) {'),
  );
};

const invalidateNextCache = async () => {
  // cache invalidation
  const dir = path.join(baseDir, '.next');
  await rimraf.sync(dir);
};

patchNextRequireHook();
invalidateNextCache();
