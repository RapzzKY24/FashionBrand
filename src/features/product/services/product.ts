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

export type ProductPaginatedResponse = ProductResponse & {
  total_items?: number;
  page?: number;
  limit?: number;
  total_pages?: number;
};

export type ProductDetailResponse = {
  status: string;
  message: string;
  data: ProductItem;
};

export const ProductService = {
  getAllProduct: async (params?: {
    search?: string;
    category?: string;
    page?: number;
    sort?: string;
  }) => {
    const query: Record<string, string> = {};
    if (params?.search) query.search = params.search;
    if (params?.category) query.category = params.category;
    if (params?.page) query.page = String(params.page);
    if (params?.sort) query.sort = params.sort;

    const res = await apiFetch<Record<string, unknown>>("/products", {
      query: Object.keys(query).length > 0 ? query : undefined,
      cache: "no-store",
    });
    const data = res.data;
    if (Array.isArray(data)) {
      return { data } as ProductPaginatedResponse;
    }
    const paginated = data as Record<string, unknown>;
    return {
      data: (paginated.items as ProductItem[]) ?? [],
      total_items: paginated.total_items as number | undefined,
      page: paginated.page as number | undefined,
      limit: paginated.limit as number | undefined,
      total_pages: paginated.total_pages as number | undefined,
    } as ProductPaginatedResponse;
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
