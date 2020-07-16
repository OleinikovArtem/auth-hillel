import firebase from "firebase"
import { firebaseConfig } from './config'


export default firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()

export const db = firebase.firestore()

export const getData = async (setProducts) => {
  const products = await db.collection('products')
  products.get().then(querySnapshot => {
    const data = querySnapshot.docs.map(item => ({id: item.id, ...item.data()}))
    setProducts(data)
  })
}


