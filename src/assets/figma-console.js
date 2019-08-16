// Copy paste into Figma console to quickly extract illustration component metadata
console.log(
  figma
    .currentPage
    .selection
    .map(item => ({
      id: item.id,
      title: item.name,
      group: item.parent.parent.name,
      area: item.parent.name,
      keywords: (item.description.match(/%KEYWORDS%(.+)\|*/g, '').length ? item.description.match(/%KEYWORDS%(.+)\|*/g, '')[0] : '')
        .replace(/%KEYWORDS%/g, '')
        .replace('|', '')
        .trim()
        .split(' '),
      description: (item.description.match(/%DESCRIPTION%(.+)\|*/g).length ? item.description.match(/%DESCRIPTION%(.+)\|*/g)[0] : '')
        .replace(/%DESCRIPTION%/g, '')
        .replace('|', '')
        .trim(),
      publish: 1,
    })));
