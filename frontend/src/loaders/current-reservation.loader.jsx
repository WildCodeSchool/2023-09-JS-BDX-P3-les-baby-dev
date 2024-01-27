const reservationLoader = async (apiService) => {
  const loaderDataReservation = { reservation: [] };
  try {
    const response = await apiService.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/reservations`
    );
    loaderDataReservation.reservation = response.data;
  } catch (error) {
    console.error(error.message);
  }

  return loaderDataReservation;
};

export default reservationLoader;
