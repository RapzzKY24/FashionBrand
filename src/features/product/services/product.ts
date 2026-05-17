export type ProductItem = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  collection: string;
  image: string;
  price: number;
  stock: number;
  stock_status: string;
  is_new_arrival: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};
export type ProductResponse = {
  data: ProductItem[];
};

export type ProductDetailResponse = {
  status: string;
  message: string;
  data: ProductItem;
};

export const ProductService = {
  getAllProduct: async () => {
    const res = await fetch("http://localhost:8080/api/v1/products");
    const resJson = (await res.json()) as ProductResponse;
    return resJson;
  },
  getBySlug: async (slug: string) => {
    const res = await fetch(`http://localhost:8080/api/v1/products/${slug}`);
    const resJson = (await res.json()) as ProductDetailResponse;
    return resJson?.data;
  },
  getRelatedProduct: async (id: string) => {
    const res = await fetch(
      `http://localhost:8080/api/v1/products/${id}/related`,
    );
    const resJson = (await res.json()) as ProductResponse;
    return resJson?.data;
  },
  getFeaturedProduct: async () => {
    const res = await fetch("http://localhost:8080/api/v1/products/featured");
    const resJson = (await res.json()) as ProductResponse;
    return resJson?.data;
  },
};
