import React from 'react'
import { Container, Typography, TextField, Button, ButtonBase } from '@material-ui/core'

export const AddProduct = () => {
  return (
    <Container component="main" maxWidth="xs">

      <Typography variant='h2' align='center'>Add Product</Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title_product"
          label="Title Product"
          name="title_product"
          autoFocus
        />
        <label htmlFor="image-upload"
          className="d-block" >
          <div style={{padding: '10px 0'}}>Image your product</div>
        <input 
          required
          accept="image/*"
          className="d-none"
          id="image-upload"
          type="file"
        />
        </label>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description_product"
          label="Description Product"
          name="description_product"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="price_product"
          label="Price Product"
          name="price_product"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="sale_product"
          label="Sale Product"
          name="sale_product"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="time_sale_product"
          label="Time sale Product"
          name="time_sale_product"
        />
        <Button variant="contained" color="primary">
          Add product
        </Button>
        <Button variant="contained" color="secondary" style={{marginLeft: 10}}>
          Reset
        </Button>
      </form>
    </Container>
  )
}
