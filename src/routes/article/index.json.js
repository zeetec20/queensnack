import fs from 'fs'

export function get(req, res) {
    let article = [
        {
            title: 'Apakah Queen Snack Hanya Menjual Snack ?',
            slug: 'apakah-queen-snack-hanya-menjual-snack-?',
            content: fs.readFileSync('article/article1.html', 'utf8')
        }
    ]
    res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(article));
}