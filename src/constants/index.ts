export const navLinks = ["Collections", "Women", "Men", "About", "Contact"];

export const Product:ProductType = {
  id:'my_product',
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  company: "sneaker company",
  price: 250_00,
  discount: 50,
  final_price: 125_00,
  assets: [
    {
      thumbnail: "/images/image-product-1-thumbnail.jpg",
      image: "/images/image-product-1.jpg",
    },
    {
      thumbnail: "/images/image-product-2-thumbnail.jpg",
      image: "/images/image-product-2.jpg",
    },
    {
      thumbnail: "/images/image-product-3-thumbnail.jpg",
      image: "/images/image-product-3.jpg",
    },
    {
      thumbnail: "/images/image-product-4-thumbnail.jpg",
      image: "/images/image-product-4.jpg",
    },
  ],
};
