import useFetch from '../../hooks/useFetch'
import { FoodData, Category } from '../../interface/FoodData';
import { Error } from '../Error/Error';
import { Loading } from "../Loading/Loading";
import { Products } from '../Products/Products';

export const Catalog = () => {
  const { data, loading, error } = useFetch<FoodData>('https://www.themealdb.com/api/json/v1/1/categories.php');

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <h1>Catalog</h1>
      <div className="product-grid">
        {data?.categories.map((category: Category) => (
          <Products 
            key={category.idCategory} 
            picture={category.strCategoryThumb} 
            title={category.strCategory} />
        ))}
      </div>
    </>
  );
}
