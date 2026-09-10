"""Stage the static export for the repository's /payroll/ Pages path."""
from pathlib import Path
import shutil
import sys
source = Path('dist/client')
target = Path(sys.argv[1])
if not (source / 'index.html').exists():
    raise SystemExit('Run GITHUB_PAGES=true npm run build first.')
target.mkdir(parents=True, exist_ok=True)
for entry in source.iterdir():
    if entry.name.startswith('.') or entry.name in ('_headers', 'vinext-client-entry-manifest.json'):
        continue
    if entry.is_dir():
        shutil.copytree(entry, target / entry.name, dirs_exist_ok=True)
    else:
        shutil.copy2(entry, target / entry.name)
for path in target.rglob('*'):
    if path.suffix in ('.html', '.css', '.js', '.rsc', '.json') and '.git' not in path.parts:
        value = path.read_text()
        value = value.replace('/_next/', '/payroll/_next/').replace('"/favicon.svg"', '"/payroll/favicon.svg"')
        path.write_text(value)
# GitHub Pages serves directory indexes, including nested service pages.
for page in list(target.rglob('*.html')):
    if page.name not in ('index.html', '404.html'):
        directory = page.with_suffix('')
        directory.mkdir(exist_ok=True)
        shutil.copy2(page, directory / 'index.html')
(target / '.nojekyll').touch()
print(target.resolve())
