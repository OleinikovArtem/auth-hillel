import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { db } from '../firebase/api'

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

export const Product = ({ id, titleProduct, timeSaleProduct, descriptionProduct, imgUrl, priceProduct, saleProduct, setChangeData}) => {
  const classes = useStyles()
  const history = useHistory()

  const goEdit = () => {
    history.push(`/edit_product/${id}`)
  }

  const deleteProduct = () => {
    db.collection("products").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
      setChangeData('Deleted product' + id)
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  return (
    <Grid item lg={3} xs={12} sm={6}>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgUrl}
            title={titleProduct}
          />
          <CardContent>
            <strong className={classes.title}>{titleProduct}</strong>
            <p>{descriptionProduct}</p>
          </CardContent>
        </CardActionArea>
        <div className={classes.priceBox}>
          <div>{(priceProduct - (saleProduct * (priceProduct / 100))).toFixed(2)}$</div>
          <div>{timeSaleProduct}</div>
          <div>{priceProduct}$ / {saleProduct}%</div>
        </div>
        <CardActions>
          <Button size="small" color="primary" onClick={deleteProduct}>
            Delete
          </Button>
          <Button size="small" color="primary" onClick={goEdit}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export const Products = ({ products, setChangeData }) => {
  const classes = useStyles()
  console.log(products)
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {products?.map((item) => <Product key={item.id} {...item} setChangeData={setChangeData} />)}
      </Grid>
    </div>
  )
}
