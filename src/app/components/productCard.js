import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ href, img, title, price }) {
    return (
        <Link href={href} className="block">
        {/* // border rounded  */}
      <div className="p-4 hover:shadow-lg">   
        <Image src={img} alt={title} width={250} height={250} />
        <h3 className="mt-2 font-semibold">{title}</h3>
        <p className="text-green-600 font-bold">₹{price}</p>
      </div>
    </Link>
  );
}