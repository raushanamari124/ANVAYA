import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import path from 'path';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;
  const locale = ['en', 'hi', 'te'].includes(cookieLocale ?? '') ? cookieLocale! : 'en';

  return {
    locale,
    messages: (await import(path.join(process.cwd(), 'messages', `${locale}.json`))).default
  };
});
