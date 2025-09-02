import ProductCard from "./productCard";

export default function Sectionthree() {
  const productList = [
    {
      href: "/about",
      img: "https://shrigangaherbal.com/assets/p_img59-BApsG3fC.png",
      title: "Himalyan Ghutno Ke Dard Grice ki Fanki",
      price: 100,
    },
    {
      href: "/product/2",
      img: "https://shrigangaherbal.com/assets/p_img60-D3dQvT_e.png",
      title: "Hari Ganga Balm",
      price: 200,
    },
    {
      href: "/product/3",
      img: "https://shrigangaherbal.com/assets/p_img61-BAipXeaP.png",
      title: "Samahan Herbal Tea",
      price: 200,
    },
    {
      href: "/product/4",
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
  ];

return (
    <section className="py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="flex justify-center items-center gap-2 text-green-600 font-medium mb-2">
          <p>BEST SELLERS</p>
          <p>-</p>
        </span>
        <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
          Discover our top-selling products loved by our customers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              href={product.href}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
