export const logger = () => {
  console.log(arguments);
};

export const colorLogger = (color, message) => {
  const colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m'
  };
  if (colors[color] && message) {
    console.log(`${colors[color]}%s\x1b[0m`, message);
  }
  if (!colors[color]) {
    console.log('The color passed is not an accepted color!');
  }
};
