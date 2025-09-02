// app/product/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";

// Import the products with slug
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

// ✅ Define slugify before using it
function slugify(title) {
  return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
}

// Add slug to all products
const productsWithSlug = productList.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

// ✅ Required for static export with output: 'export'
export async function generateStaticParams() {
  return productsWithSlug.map((product) => ({
    slug: product.slug, // must be a string
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;

  const product = productsWithSlug.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={product.img}
          alt={product.title}
          width={500}
          height={500}
          className="w-full md:w-96 rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold mb-4">Price: ₹{product.price}</p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}