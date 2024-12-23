'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className='md:h-[42px] md:w-[152px] lg:w-[178px] xl:h-[52px] lg:h-[40px] h-[30px] w-[99px] bg-[#05caa5] text-white rounded-[6px] font-bold'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='md:h-[42px] md:w-[152px] lg:w-[178px] xl:h-[52px] lg:h-[40px] h-[30px] w-[99px] bg-[#05caa5] rounded-[6px] border-0 outline-0 md:px-3 pl-1 '
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='ru'>Русский</option>
        <option value='zh'>简体中文</option>
      </select>
    </label>
  );
}