const hoursLoader = async (apiService) => {
  const loaderDataHour = { hours: [] };
  try {
    const response = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/hours`
    );
    loaderDataHour.hours = response.data;
  } catch (error) {
    console.error(error.message);
  }

  return loaderDataHour;
};

export default hoursLoader;
