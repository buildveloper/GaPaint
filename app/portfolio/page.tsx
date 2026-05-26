import { photos } from '../../components/siteData';

const items = [
  ['Collision Rebuild', 'Frame correction and paint restoration'],
  ['Dent & PDR', 'Door dents removed with invisible blending'],
  ['Bumper/Fender Repair', 'OEM-style panel fit and finish'],
  ['Hail Damage', 'Multi-panel refinishing and polish']
];

export default function Portfolio() {
  return (
    <main className='section'>
      <h1 className='h1'>Portfolio / Projects</h1>
      <p className='mt-4'>Before-and-after caliber craftsmanship from our Suwanee shop.</p>
      <div className='mt-8 columns-1 md:columns-2 gap-4 space-y-4'>
        {items.map((i, idx) => (
          <article key={i[0]} className='glass p-6 break-inside-avoid'>
            <img
              src={photos.portfolio[idx % photos.portfolio.length]}
              alt={`${i[0]} completed project`}
              className='h-40 w-full rounded-xl object-cover mb-4'
            />
            <h2 className='font-semibold'>{i[0]}</h2>
            <p className='text-sm mt-2'>{i[1]}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
