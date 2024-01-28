import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = spawn(
    'node',
    [path.resolve(__dirname, './files/script.js'), ...args],
    {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    },
  );

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
