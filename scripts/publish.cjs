const fs = require('fs');
const {execSync} = require('child_process');

const args = process.argv.slice(2);
if (!args.length) {
    console.log('Error: One-time password is missing');
    return;
}

const otp = args[0];
const packages = require('./packages.json');

for (let name of packages) {
    const dir = __dirname + '/../packages/' + name;

    if (name === 'core') {
        const file = dir + '/src/Calendar.svelte';
        const buf = fs.readFileSync(file);
        const tmp = buf.toString().replace(/\.\/styles\/index\.scss/g, '../dist/index.css');

        fs.writeFileSync(file, tmp);
        publish(dir);
        fs.writeFileSync(file, buf);

    } else {
        publish(dir);
    }
}

function publish(dir) {
    execSync('cd ' + dir + ' && npm publish --access public --otp=' + otp);
}
