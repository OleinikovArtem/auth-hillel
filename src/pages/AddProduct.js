import React, { useState, useEffect } from 'react'
import { Container, Typography, TextField, Button } from '@material-ui/core'
import { db } from '../firebase/api'
import { Message } from '../components/Message'
import { useParams, useLocation } from 'react-router-dom'
import { Product } from './Products'



export const AddProduct = ({ setChangeData, products }) => {
  const [values, setValues] = useState({
    titleProduct: '',
    descriptionProduct: '',
    priceProduct: '',
    saleProduct: '',
    timeSaleProduct: '',
    imgUrl: '',
  })
  const [message, setMessage] = useState(null)
  const [titlePage, setTitlePage] = useState('Add product')
  const params = useParams()
  const location = useLocation()

  const changeValues = ({ target: { name, value } }) => {
    const updateValues = {
      ...values,
      [name]: value
    }
    setValues(updateValues)
  }

  const handleSubmit = () => {
    if (location.pathname.includes('edit')) {
      db.collection("products").doc(params.id).set({ ...values })
        .then(function () {
          setMessage({
            type: 'success',
            text: "Product is changed!"
          })
          setChangeData('Change peoduct' + JSON.stringify(values))
        })
        .catch(function (error) {
          console.error("Error writing document: ", error)
        })
    } else {
      db.collection("products").add({ ...values })
        .then(function () {
          setMessage({
            type: 'success',
            text: "Document successfully written!"
          })
          setChangeData('Add peoduct' + JSON.stringify(values))
        })
        .catch(function (error) {
          console.error("Error writing document: ", error)
        })
    }
  }

  const clearValues = () => {
    setValues({
      titleProduct: '',
      descriptionProduct: '',
      priceProduct: '',
      saleProduct: '',
      timeSaleProduct: '',
      imgUrl: '',
    })
  }

  useEffect(() => {
    if (location.pathname.includes('edit')) {
      setTitlePage('Edit product')
      const product = products.filter(item => item.id === params.id)
      setValues({...product[0]})
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      {message && <Message type={message.type} text={message.text} onClose={() => setMessage(null)} />}
      <Typography variant='h2' align='center'>{titlePage}</Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="titleProduct"
          label="Title Product"
          name="titleProduct"
          autoFocus
          value={values.titleProduct}
          onChange={changeValues}
        />
        <TextField
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
          fullWidth
          id="imgUrl"
          label="img url"
          name="imgUrl"
          value={values.imgUrl}
          onChange={changeValues}
        />
        <TextField
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
          fullWidth
          id="descriptionProduct"
          label="Description Product"
          name="descriptionProduct"
          value={values.descriptionProduct}
          onChange={changeValues}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="priceProduct"
          label="Price Product"
          name="priceProduct"
          values={values.priceProduct}
          onChange={changeValues}

        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="saleProduct"
          label="Sale Product"
          name="saleProduct"
          value={values.saleProduct}
          onChange={changeValues}

        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="timeSaleProduct"
          label="Time sale Product"
          name="timeSaleProduct"
          value={values.timeSaleProduct}
          onChange={changeValues}

        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {titlePage}
        </Button>
        <Button variant="contained" color="secondary" style={{ marginLeft: 10 }} onClick={clearValues}>
          {location.pathname.includes('edit') ? 'Edit' : 'Reset'}
        </Button>
      </form>
    </Container>
  )
}
