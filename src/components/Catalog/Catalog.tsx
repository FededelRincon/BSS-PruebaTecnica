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
      <h1 className="text-2xl font-bold text-center my-8 mx-8">Catalogo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
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
