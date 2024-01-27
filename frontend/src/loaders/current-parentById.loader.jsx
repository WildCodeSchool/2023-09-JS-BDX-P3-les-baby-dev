const currentOneParentLoader = async (client) => {
  const loaderDataParent = { preloadOneParent: null };

  try {
    const response = await client.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/parent`
    );
    loaderDataParent.preloadOneParent = response.data;

    return loaderDataParent;
  } catch (err) {
    console.error(err);
  }

  return loaderDataParent;
};

export default currentOneParentLoader;
