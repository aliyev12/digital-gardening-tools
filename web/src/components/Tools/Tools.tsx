import { navigate, routes } from '@redwoodjs/router'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './Tools.styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea
              onClick={() => {
                navigate(routes.plantingGuide())
              }}
            >
              {/* <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            /> */}
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Planting Guide
                </Typography>
                <Typography>Track your planting activity</Typography>
              </CardContent>
              {/* <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions> */}
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
