export const tryCatch = callbackFn => async params => {
  try {
    const data = await callbackFn(params);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
