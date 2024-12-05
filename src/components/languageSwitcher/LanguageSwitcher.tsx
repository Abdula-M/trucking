'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLanguage = (locale: string) => {
    // Формируем новый URL с учетом выбранной локали
    const newPath = `/${locale}${pathname}`;
    // Учитываем существующие параметры поиска
    const params = searchParams.toString();
    const urlWithParams = params ? `${newPath}?${params}` : newPath;

    window.location.href = urlWithParams; // Перенаправляем пользователя
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
    </div>
  );
}
