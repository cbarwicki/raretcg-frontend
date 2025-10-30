const CardImage = ({ images, name }: { images: string, name: string }) => {
  if (!images) return null;

  return (
    <div className="flex justify-center p-4">
      <img
        src={images}
        alt={name}
        className="w-120 h-auto "
      />
    </div>
  );
};

export default CardImage;

