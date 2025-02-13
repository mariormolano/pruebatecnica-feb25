import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Product } from '@/interfaces/products';

const CartCard: React.FC<Product> = (props: Product) => {
  const { name, price } = props;
  return (
    <Card sx={ { minWidth: 275 } }>
      <CardContent>
        <Typography sx={ { color: 'text.secondary', mb: 1.5 } }>Producto: { name }</Typography>
        <Typography variant="body2">
          Precio: { price }
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CartCard;