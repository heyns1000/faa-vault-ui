const MetaCard = ({ title, description }) => {
  return (
    <div className='bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition'>
      <h3 className='text-xl font-bold mb-2 text-gray-900'>{title}</h3>
      <p className='text-gray-700 text-sm'>{description}</p>
    </div>
  );
};

export default MetaCard;
