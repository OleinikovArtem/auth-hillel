import React, { useState, useEffect } from 'react'
import { Container, Typography, TextField, Button } from '@material-ui/core'
import { db, storage } from '../firebase/api'
import FileInput from '../components/FileInput'

// const storageRef = storage.ref()


export const AddProduct = () => {
  const [values, setValues] = useState({
    titleProduct: '',
    descriptionProduct: '',
    priceProduct: '',
    saleProduct: '',
    timeSaleProduct: '',
  })
  const [file, setFile] = useState('')


  const changeValues = ({ target: { name, value } }) => {
    const updateValues = {
      ...values,
      [name]: value
    }
    setValues(updateValues)
  }

  const handleSubmit = () => {
    db.collection("products").add({ ...values })
      .then(function () {
        console.log("Document successfully written!")
      })
      .catch(function (error) {
        console.error("Error writing document: ", error)
      })
  }
  return (
    <Container component="main" maxWidth="xs">

      <Typography variant='h2' align='center'>Add Product</Typography>
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
        <FileInput onChange={setFile} value={file} />
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
          Add product
        </Button>
        <Button variant="contained" color="secondary" style={{ marginLeft: 10 }}>
          Reset
        </Button>
      </form>
    </Container>
  )
}
