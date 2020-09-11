import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container className="page-section">
      <Grid item xs={6}>Taylor Zanke</Grid>
      <Grid item xs={6}>Links</Grid>
    </Grid>
    <Grid container className="page-section">
      <Grid item xs={12}>
        <ul>
          <li><a href="https://www.taylorzanke.com/">Artist Books</a></li>
          <li><a href="https://taylorzanke.bandcamp.com/releases">Recordings</a></li>
          <li><a href="https://www.littleuniverse.com/">Product Design</a></li>
        </ul>
      </Grid>
    </Grid>
  </PageContainer>
);

export default Homepage;
