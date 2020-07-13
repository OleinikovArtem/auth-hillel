import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'


const tileData = [
  { title: 'test', author: 'Author', id: '1', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
  { title: 'test', author: 'Author', id: '2', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
  { title: 'test', author: 'Author', id: '3', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
  { title: 'test', author: 'Author', id: '4', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
  { title: 'test', author: 'Author', id: '5', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
  { title: 'test', author: 'Author', id: '6', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
  { title: 'test', author: 'Author', id: '7', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
  { title: 'test', author: 'Author', id: '8', img: 'url', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi sit iste voluptatem dolorem qui culpa similique voluptates dolorum consectetur! Iusto, sit tenetur! Quaerat culpa dolorum perferendis iure dicta nobis.' },
]

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 25
  },
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 25
  },
  media: {
    height: 200
  },
  priceBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px'
  }
  
}))

export const Product = ({ title, description, author }) => {
  const classes = useStyles()

  return (
    <Grid item lg={3} xs={12} sm={6}>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://resize.hswstatic.com/w_907/gif/gecko-1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <strong className={classes.title}>{title}</strong>
            <p>{description}</p>
          </CardContent>
        </CardActionArea>
        <div className={classes.priceBox}>
          <div>90$</div>
          <div>10.10.2020</div>
          <div>100$ / 10%</div>
        </div>
        <CardActions>
          <Button size="small" color="primary">
            Delete
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export const Products = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {tileData.map((item) => <Product key={item.id} {...item} />)}
      </Grid>
    </div>
  )
}
