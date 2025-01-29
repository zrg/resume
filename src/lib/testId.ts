import { env } from '$env/dynamic/public';

export const testId = (id: string) => {
  if (env.PUBLIC_ENV === 'test') {
    return id;
  } else {
    return null;
  }
};
