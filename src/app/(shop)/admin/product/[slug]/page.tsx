import { getCategories, getProductBySlug } from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProductForm } from "./ui/ProductForm";

interface Props {
    params: {
        slug: string;
    }
}

export default async function ProductPage({ params }:Props) {
    const { slug } = params;

    const [ product, categories ] = await Promise.all([
        getProductBySlug( slug ),
        getCategories()
    ]);

    //De esta menera se realiza una promesa y luego la otra, como no tienen nada en común 
    //es mejor hacerlas con el Promise.all para que se ejecuten al mismo tiempo
    // const product = await getProductBySlug( slug );
    // const categories = await getCategories();

    //Todo: new
    if(!product && slug !== 'new'){
        redirect('/admin/products');
    }

    const title =( slug ==='new') ? 'Nuevo Producto' : 'Editar Producto'

  return (
    <>
      <Title title={ title } />

      <ProductForm product={ product ?? {} } categories = { categories } />
    </>
  );
}