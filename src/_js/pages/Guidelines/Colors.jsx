import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Link, List } from 'office-ui-fabric-react/lib/index';
import ColorBlock from './ColorBlock.jsx';

const colorData = [
  {
    background: '#000000',
    foreground: '#FFFFFF',
  },
  {
    background: '#515151',
    foreground: '#FFFFFF',
  },
  {
    background: '#4C4C4C',
    foreground: '#FFFFFF',
  },
  {
    background: '#7F7F7F',
    foreground: '#000000',
  },
  {
    background: '#B2B2B2',
    foreground: '#000000',
  },
  {
    background: '#E5E5E5',
    foreground: '#000000',
  },
  {
    background: '#2C3E58',
    foreground: '#FFFFFF',
  },
  {
    background: '#55657A',
    foreground: '#FFFFFF',
  },
  {
    background: '#6B778B',
    foreground: '#FFFFFF',
  },
  {
    background: '#959EAC',
    foreground: '#000000',
  },
  {
    background: '#BFC5CC',
    foreground: '#000000',
  },
  {
    background: '#E9EBEE',
    foreground: '#000000',
  },
  {
    background: '#007ACC',
    foreground: '#FFFFFF',
  },
  {
    background: '#2C94D9',
    foreground: '#FFFFFF',
  },
  {
    background: '#47A0DD',
    foreground: '#000000',
  },
  {
    background: '#7DBBE7',
    foreground: '#000000',
  },
  {
    background: '#B1D7F0',
    foreground: '#000000',
  },
  {
    background: '#E5F1F9',
    foreground: '#000000',
  },
  {
    background: '#00BAC4',
    foreground: '#000000',
  },
  {
    background: '#03C9D4',
    foreground: '#000000',
  },
  {
    background: '#00D2DD',
    foreground: '#000000',
  },
  {
    background: '#7AE8EE',
    foreground: '#000000',
  },
  {
    background: '#B0F1F5',
    foreground: '#000000',
  },
  {
    background: '#E4FAFB',
    foreground: '#000000',
  },
  {
    background: '#F78A00',
    foreground: '#000000',
  },
  {
    background: '#F9A243',
    foreground: '#000000',
  },
  {
    background: '#FAAE5B',
    foreground: '#000000',
  },
  {
    background: '#FBC58B',
    foreground: '#000000',
  },
  {
    background: '#FDDBBA',
    foreground: '#000000',
  },
  {
    background: '#FEF3E7',
    foreground: '#000000',
  },
  {
    background: '#FACA00',
    foreground: '#000000',
  },
  {
    background: '#FBD50D',
    foreground: '#000000',
  },
  {
    background: '#FBDA3B',
    foreground: '#000000',
  },
  {
    background: '#FDE578',
    foreground: '#000000',
  },
  {
    background: '#FEEFAF',
    foreground: '#000000',
  },
  {
    background: '#FEF9E4',
    foreground: '#000000',
  },
  {
    background: '#CE2639',
    foreground: '#FFFFFF',
  },
  {
    background: '#D33C4E',
    foreground: '#FFFFFF',
  },
  {
    background: '#DD6876',
    foreground: '#000000',
  },
  {
    background: '#E7939D',
    foreground: '#000000',
  },
  {
    background: '#F0BEC4',
    foreground: '#000000',
  },
  {
    background: '#F9E9EB',
    foreground: '#000000',
  },
  {
    background: '#B035BC',
    foreground: '#FFFFFF',
  },
  {
    background: '#BF5FCA',
    foreground: '#000000',
  },
  {
    background: '#C773D0',
    foreground: '#000000',
  },
  {
    background: '#D79BDE',
    foreground: '#000000',
  },
  {
    background: '#E7C3EB',
    foreground: '#000000',
  },
  {
    background: '#F6EBF8',
    foreground: '#000000',
  },
  {
    background: '#309A42',
    foreground: '#000000',
  },
  {
    background: '#5BAE68',
    foreground: '#000000',
  },
  {
    background: '#70B87B',
    foreground: '#000000',
  },
  {
    background: '#99CDA1',
    foreground: '#000000',
  },
  {
    background: '#B6D4BA',
    foreground: '#000000',
  },
  {
    background: '#EAF4EC',
    foreground: '#000000',
  },
  {
    background: '#82BD00',
    foreground: '#000000',
  },
  {
    background: '#9CCB24',
    foreground: '#000000',
  },
  {
    background: '#A7D144',
    foreground: '#000000',
  },
  {
    background: '#C0DE7C',
    foreground: '#000000',
  },
  {
    background: '#DAEBB0',
    foreground: '#000000',
  },
  {
    background: '#F2F8E4',
    foreground: '#000000',
  },
];

const Colors = ({ match }) => (
  <section>
    <div className="anchor" id="colors" />
    <h2>Colors<NavLink to={`${match.params.id}#colors`} title="Colors">#</NavLink></h2>
    <div>
      <p>VSTS uses the <Link href="http://dev.office.com/fabric#/styles/colors">Fabric color palette</Link>, making additional shades and variations as needed. As with imagery, simpler is generally better.</p>
      <div className="colors-table">
        <List
          items={colorData}
          onRenderCell={item => (
            <ColorBlock
              background={item.background}
              foreground={item.foreground}
            />
          )}
        />
      </div>
    </div>
  </section>
);

Colors.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default Colors;
