import { company } from './siteData';

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 dark:border-slate-800'>
      <div className='section !py-8 grid md:grid-cols-3 gap-3 text-sm'>
        <div>
          <p className='font-semibold'>{company.name}</p>
          <p>Family-owned since 1989</p>
        </div>
        <div>
          <p>{company.address}</p>
          <p>{company.hours}</p>
        </div>
        <div>
          <p>{company.phone}</p>
          <p>{company.email}</p>
        </div>
      </div>
      <div className='pb-6 text-center text-xs text-slate-500 dark:text-slate-400'>
        demo built by buildveloper@gmail.com
      </div>
    </footer>
  );
}
