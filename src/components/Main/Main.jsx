import React from 'react'
import {Card, CardHeader, CardContent, Typography, Divider, Grid } from '@material-ui/core'
import Form from './Form/Form'
import useStyles from './styles'

const Main = () => {
    const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader='powered by speechly'/>
        <CardContent>
            <Typography align='center' variant='h5'>
                Total Balance $100 
            </Typography>
            <Typography variant='subtitle1' style={{ lineHeight:'1.5em' ,marginTop:'20px'}}>
                {/* Infocard */}
                Try saying add income $100 in category salary for monday ... 
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    {/* <Item /> */}
                </Grid>
            </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Main;
