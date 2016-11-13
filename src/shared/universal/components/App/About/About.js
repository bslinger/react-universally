/* @flow */

import React from 'react';
import Helmet from 'react-helmet';
import { Match, Link } from 'react-router';

import SubAbout from './SubAbout/SubAbout';

function About({ pathname }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet title="About" />

      <Match
        pattern={`${pathname}/sub`}
        component={SubAbout}
      />

      <Link to={`${pathname}/sub`}>Link to Sub About</Link>


      <div>Produced with ❤️
      by
      &nbsp;
      <a href="https://twitter.com/controlplusb" target="_blank" rel="noopener noreferrer">
        Sean Matheson
      </a></div>
    </div>
  );
}

export default About;
