const currentNurseryLoader = async (client, id) => {
  const loaderData = { preloadNursery: null };

  try {
    const response = await client.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/structure/${id}`
    );
    loaderData.preloadNursery = response?.data;
  } catch (err) {
    console.error(err);
  }

  return loaderData;
};

export default currentNurseryLoader;
