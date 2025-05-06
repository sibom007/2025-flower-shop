interface Props {
  title: string;
  description: string;
}

const NotContant = ({ title, description }: Props) => {
  return (
    <>
      <div className="h-72 col-span-1 md:col-span-2 lg:col-span-3 text-center p-4 bg-orangeTheme-100 rounded-lg shadow-md flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold">
          {title} <span className="text-3xl">😕</span>
        </h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </>
  );
};

export default NotContant;
