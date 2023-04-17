import { Order } from '@/model/types';
import OrderDetail from '../components/OrderDetail/OrderDetail';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import api from '@/services/api';

function OrderPageDetail() {
  const router = useRouter();
  const orderId = router.query.id as string;
  const [order, setOrder] = useState<Order>();

  const fetchOrder = async () => {
    try {
      const response = await api.get(`/orders/${orderId}`);
      setOrder(response.data.Order);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelOrder = async (orderId: number) => {
    try {
      await api.put(`/orders/${orderId}/cancelado`);
      fetchOrder();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  return (
    <div>
      {order ? (
        <OrderDetail
          order={order}
          onCancelOrder={(orderId: number) => cancelOrder(orderId)}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrderPageDetail;
