

interface ProductType {
  id: string;
  title: string;
  description: string;
  company: string;
  price: number;
  discount: number;
  final_price: number;
  assets: {
    thumbnail: string;
    image: string;
  }[];
}
