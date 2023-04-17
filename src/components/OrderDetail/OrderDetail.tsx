import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Breadcrumbs,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { Order } from '../../model/types';
import { Place, Inventory } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Link from 'next/link';

type OrderDetailProps = {
  order: Order;
  onCancelOrder: (orderId: number) => void;
};

// Function to format a date
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

const OrderDetail: React.FC<OrderDetailProps> = ({ order, onCancelOrder }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <Container maxWidth='lg'>
      {order ? (
        <Box mt={3}>
          <Typography variant='h3' gutterBottom>
            Order Detail
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: 16 }}>
                <Box p={3}>
                  <Grid container>
                    <Grid item md={6} xs>
                      <Typography variant='h5' gutterBottom>
                        Order Information
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs>
                      <Box display='flex' justifyContent='flex-end'>
                        <Breadcrumbs aria-label='breadcrumb'>
                          <Link href='/' passHref>
                            <MuiLink color='inherit' onClick={handleClick}>
                              Create new order
                            </MuiLink>
                          </Link>
                        </Breadcrumbs>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h5' gutterBottom>
                        Order #{order.ID}
                      </Typography>
                      <Typography variant='body1'>
                        Created at: {formatDate(order.CreatedAt)}
                      </Typography>
                      <Typography variant='body1'>
                        Updated at: {formatDate(order.UpdatedAt)}
                      </Typography>
                      <Typography variant='body1'>
                        Deleted at:{' '}
                        {order.DeletedAt ? formatDate(order.DeletedAt) : '-'}
                      </Typography>
                      <Typography variant='subtitle1' gutterBottom>
                        Package size: {order.PackageSize}
                      </Typography>
                      <Typography variant='body1'>
                        Status:
                        <Chip
                          label={order.Status}
                          color={
                            `${order.Status}` === 'creado' ? 'success' : 'error'
                          }
                        />
                      </Typography>
                      <Typography variant='body1'>
                        Refund: {order.Refund ? 'Yes' : 'Not apply'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant='h5'>Destination Address</Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Place />
                          </ListItemIcon>
                          <ListItemText
                            primary={`${order.DestinationAddress.FirstName} ${order.DestinationAddress.LastName},
                            ${order.DestinationAddress.PhoneNumber}`}
                            secondary={`${
                              order.DestinationAddress.Coordinates
                            }, ${order.DestinationAddress.Street}, ${
                              order.DestinationAddress.ExNumber
                            }${
                              order.DestinationAddress.InNumber
                                ? `, int. ${order.DestinationAddress.InNumber}`
                                : ''
                            }, ${order.DestinationAddress.Neighbourhood}, ${
                              order.DestinationAddress.City
                            }, ${order.DestinationAddress.State}, ${
                              order.DestinationAddress.ZipCode
                            }`}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h5'>Products</Typography>
                      <List>
                        {order.Products.map((product) => (
                          <ListItem key={product.ID}>
                            <ListItemIcon>
                              <Inventory />
                            </ListItemIcon>
                            <ListItemText
                              primary={`Product #${product.ID}`}
                              secondary={`Weight: ${product.Weight}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    {order.Status != 'cancelado' && (
                      <Grid item xs={12}>
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={() => onCancelOrder(order.ID)}
                        >
                          Cancel Order
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box mt={3}>
          <Typography variant='h4' gutterBottom>
            There is not order!
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default OrderDetail;
