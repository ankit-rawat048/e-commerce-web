import ProductCard from "./productCard";
import Link from "next/link";

export default function Products() {
  const productList = [
    {
      href: "https://shrigangaherbal.com/product/aaaaa",
      img: "https://shrigangaherbal.com/assets/p_img59-BApsG3fC.png",
      title: "Himalyan Ghutno Ke Dard Grice ki Fanki",
      price: 100,
    },
    {
      href: "http://localhost:3000/product/2/",
      img: "https://shrigangaherbal.com/assets/p_img60-D3dQvT_e.png",
      title: "Hari Ganga Balm",
      price: 200,
    },
    {
      href: "http://localhost:3000/product/3/",
      img: "https://shrigangaherbal.com/assets/p_img61-BAipXeaP.png",
      title: "Samahan Herbal Tea",
      price: 200,
    },
    {
      href: "http://localhost:3000/product//",
      img: "https://shrigangaherbal.com/assets/p_img62-D0zloGw6.png",
      title: "Nidco Shilajit Paste",
      price: 110,
    },
    {
      href: "/product/5",
      img: "https://shrigangaherbal.com/assets/p_img63-C5T-AwaF.png",
      title: "Kailash Jeevan MultiPurpose Cream",
      price: 200,
    },
    {
      href: "/product/6",
      img: "https://shrigangaherbal.com/assets/p_img64-C8_eQaK1.png",
      title: "Nidco Shilajeet Tablet",
      price: 200,
    },
    {
      href: "/product/7",
      img: "https://shrigangaherbal.com/assets/p_img65-jtLWbZUI.png",
      title: "kesri Marham",
      price: 200,
    },
    {
      href: "/product/8",
      img: "https://shrigangaherbal.com/assets/p_img55-BB5qRI_o.png",
      title: "Herbal Product 8",
      price: 200,
    },
    {
      href: "/product/9",
      img: "https://shrigangaherbal.com/assets/p_img56-BXkPPiBF.png",
      title: "Herbal Product 9",
      price: 200,
    },
    {
      href: "/product/10",
      img: "https://shrigangaherbal.com/assets/p_img54-B2o6kMBP.png",
      title: "Herbal Product 10",
      price: 200,
    },
  ];

  // Slugify function
  function slugify(title) {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  // Add slug and href
  const productsWithSlug = productList.map((product) => ({
    ...product,
    slug: slugify(product.title),
    href: `/product/${slugify(product.title)}`, // link to dynamic page
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsWithSlug.map((product, index) => (
            <Link key={index} href={product.href}>
              <ProductCard
                href={product.href}
                img={product.img}
                title={product.title}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
