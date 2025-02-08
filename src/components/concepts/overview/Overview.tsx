import { useGetProducts } from '../../../hooks/use-products';

export default function Overview() {
  const { data, isLoading } = useGetProducts();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  return <div>Welcome to the Admin Overview</div>;
}
