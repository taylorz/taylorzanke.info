import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container className="page-section">
      <Grid item xs={12}>taylor zanke . info</Grid>
    </Grid>
  </PageContainer>
);

export default Homepage;
