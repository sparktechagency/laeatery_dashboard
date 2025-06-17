
const UserGrowthLoading = () =>{
  const bars = Array(12).fill(0); // for 12 months

  return (
    <div className="p-4 rounded-md border bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="flex items-end justify-between h-64">
        {bars.map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-4 bg-gray-200 animate-pulse rounded"
              style={{ height: `${Math.random() * 60 + 40}%` }}
            ></div>
            <div className="h-3 w-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserGrowthLoading;
