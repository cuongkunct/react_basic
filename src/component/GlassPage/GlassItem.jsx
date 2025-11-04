function ProductItem({ name, price, url, desc, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="bg-gray-200 rounded-2xl shadow-lg shadow-amber-200 p-4 text-center cursor-pointer 
             transition-transform duration-300 hover:scale-105 hover:shadow-amber-300"
    >
      <p className="font-semibold mb-2">{name}</p>
      <img className="w-40 h-40 object-contain mx-auto" src={url} alt={name} />
      <p className="text-lg font-medium mt-2">${price}</p>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
}

export default ProductItem;
