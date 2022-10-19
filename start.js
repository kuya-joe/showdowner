const showdown  = require('showdown'),
    converter = new showdown.Converter();
const fs = require('fs');
const cwd= __dirname;
const mdfile = 'README.md'; //change this to where your README is
try {
    // 1. Update the path to the markdown file
    var text  = fs.readFileSync('./' + mdfile', 'utf8');
    var html  = converter.makeHtml(text.toString());
    // 2. change this title
    const title = 'Welcome to getlightning.xyz';
    let head  = '<!doctype html><html><head><title>' + title + '</title>';
    head += '<meta charset="utf-8">';
    head += '<meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="site.css">';
    head += '</head>';
    const htmlString = head + '<body>' + html + '</body>';
    // 3. Currently outputs to outpuit.html. You can change the console log or the output file.
    fs.writeFile('output.html', htmlString, function (err) {
      if (err) return console.log(err);
      console.log("README > output.html \r\n . Then Use `cp output.html public/index.html` to copy to your public folder");
    });
} catch(e) {
    console.log('Error:', e.stack);
}
