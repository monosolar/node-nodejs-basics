const parseArgs = () => {
  const args = process.argv.slice(2) || [];
  const list = new Array(args.length / 2)
    .fill()
    .map((_, idx) => `${args[idx * 2]} is ${args[idx * 2 + 1]}`)
    .join(', ');

  console.log(list);
};

parseArgs();
