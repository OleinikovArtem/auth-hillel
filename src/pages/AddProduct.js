import React from 'react'
import { Container, Typography, TextField } from '@material-ui/core'

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
      </form>
    </Container>
  )
}
