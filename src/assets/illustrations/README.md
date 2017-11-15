# Centralized illustration repo

## What's an illustration?

An illustration is often used to demonstrate a topic in supplement of text. It is usually bigger and more detailed than an icon.

## File naming convention

All lowercase, dash delimited, no other special characters or space allowed, prefix with category.

- zerodata-some-descriptive-name.ext
  - Illustrations used for Zero Data areas where data hasn't been added yet, or not visible due to error or permission. Max height is 150x150 px, max width is 450x450 px.
- widget-some-descriptive-name.ext
  - Placeholder illustrations used for Dashboard widgets. 100x100 px.
- ghost-some-descriptive-name.ext
  - Placeholder ghost illustrations used for Dashboard widgets. Only shown when real data hasn't been loaded.
- topo-some-descriptive-name.ext
  - Work item topology diagram images.
- general-some-descriptive-name.ext
  - Illustrations for general areas such as http status.

## Formats

- png (compressed, 96dpi)
- svg (responsive, compressed)

## Request new illustrations

[http://aka.ms/dduxillu](http://aka.ms/dduxillu)

- Illustration artist - Don Baker
- Reviewer - Jamie Young, Cherry Wang, Marisa Parker

## Add new illustrations to VSO repo on mseng

- Drop files in this folder: `VSO\Tfs\Service\WebAccess\Presentation\Content\Illustrations`
- Append paths to this file: `Tfs\Service\Deploy\components\TfsServer.WebAccess.core.xml`
  - Find this group
  ```
  <Directory Path="[VersionedWebResourcesDir]_content\Illustrations\">
    <File Origin="module://{enter the full path of new assets here}"/>
    ...
  </Directory>
  ```
  - Add new entries a the bottom, refer to previous lines for example.
