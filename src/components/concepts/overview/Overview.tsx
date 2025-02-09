import { useGetProducts } from '../../../hooks/use-products';

export default function Overview() {
  const { isLoading } = useGetProducts();
  if (isLoading) return <div>Loading...</div>;

  return <div>Welcome to the Admin Overview</div>;
}
