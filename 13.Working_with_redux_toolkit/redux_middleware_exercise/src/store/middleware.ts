// eslint-disable-next-line @typescript-eslint/no-explicit-any
const alertMiddleware = (store: any) => (next: any) => (action: any) => {
  const prev_value = store.getState();
  const result = next(action);
  const current_value = store.getState();

  if (prev_value !== current_value) {
    console.log(`value changed from ${prev_value.counter.value} to ${current_value.counter.value}`);
  }

  return result;
};

export default alertMiddleware;
