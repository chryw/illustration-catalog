import * as React from 'react';

const Resources = () => (
  <div className="resources">
    <h2>
      {'Design resources'}
    </h2>
    <h3>
      {'Adobe Illustrator templates'}
    </h3>
    <p>
      {'Color palette is included in the templates.'}
    </p>
    <ul>
      <li>
        <a href="files/MSFTIllustrationTemplate.zip" download>
          {'Download *.ait template with Microsoft Illustration color palette'}
        </a>
      </li>
      <li>
        <a href="files/Microsoft_illustration_library_January2018.pdf" download>
          {'Download BrandCentral illustration deck'}
        </a>
      </li>
      <li>
        <a href="files/Illustration_assets_M365.pdf" download>
          {'Download Microsoft 365 illustration deck'}
        </a>
      </li>
    </ul>
  </div>
);

export default Resources;
