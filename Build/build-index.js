require('./cycle.js');
var lunr = require('./lunr.min.js');
var fs = require('fs');

const searchJs = '../docs/assets/js/search.js';

if (fs.existsSync(searchJs)) {
	var dataStr = fs.readFileSync(searchJs, 'utf-8').replace('typedoc.search.data = ', 'typedoc.search.data = global.data = ');
	eval(dataStr);

	var index = new lunr.Index();
	index.pipeline.add(
		lunr.trimmer
	);

	index.field('name', {boost:10});
	index.field('parent');
	index.ref('id');

	var rows   = data.rows;
	var pos    = 0;
	var length = rows.length;
	function batch() {
		var cycles = 0;
		while (cycles++ < 1000) {
			if (rows[pos]) {
				index.add(rows[pos]);
				if (++pos == length) {
					let resultStr = "window.preparedIndex = " + JSON.stringify(JSON.decycle(index));
					fs.writeFileSync('../docs/assets/js/built-index.js', resultStr, 'utf-8');
					console.info('\r\nComplete!');
					break;
				}
			} else {
				break;
			}
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write("Done: " + ((pos/length) * 100).toFixed() + "%");
		}
		
		if (pos < length) {
			setTimeout(batch, 1);
		}
	}
	batch();
} else {
	throw new Error("File " + searchJs + " is not found. Run generate.cmd first.");
}
