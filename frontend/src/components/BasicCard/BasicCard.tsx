import { useStore } from 'exome/react'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '@/interfaces/products';
import { addCart } from '@/services/productsService';
import { cartStore } from '@/store/cartStore';

const BasicCard: React.FC<Product> = (props: Product) => {
  const { setTotalItems } = useStore(cartStore);
  const handleAddCart = async () => {
    const response = await addCart(props);
    setTotalItems(response.length);
    console.log(response);
  }
  const { name, price } = props;
  return (
    <Card sx={ { minWidth: 275 } }>
      <CardContent>
        <Typography sx={ { color: 'text.secondary', mb: 1.5 } }>Producto: { name }</Typography>
        <Typography variant="body2">
          Precio: { price }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ handleAddCart }>Agregar al Carro</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;