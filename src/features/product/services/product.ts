import { apiFetch } from "@/src/shared/api";

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
    return await apiFetch<ProductResponse>("/products");
  },
  getBySlug: async (slug: string) => {
    const res = await apiFetch<ProductDetailResponse>(`/products/${slug}`);
    return res?.data;
  },
  getRelatedProduct: async (id: string) => {
    const res = await apiFetch<ProductResponse>(`/products/${id}/related`);
    return res?.data;
  },
  getFeaturedProduct: async () => {
    const res = await apiFetch<ProductResponse>("/products/featured");
    return res?.data;
  },
};
