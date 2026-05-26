export default function About() {
  return (
    <main className='section'>
      <h1 className='h1'>About Georgia Paint & Body</h1>
      <p className='mt-6 max-w-3xl'>
        Georgia Paint & Body has served Suwanee and North Atlanta since 1989. Our family-owned team is
        known for honest service, precise craftsmanship, and premium client care from estimate through
        delivery.
      </p>
      <div className='mt-8 grid md:grid-cols-2 gap-5'>
        <div className='glass p-6'>
          <h2 className='text-2xl font-semibold'>Mission</h2>
          <p className='mt-3'>
            Deliver safe, factory-quality collision and paint repairs with clear communication and trusted
            results.
          </p>
        </div>
        <div className='glass p-6'>
          <h2 className='text-2xl font-semibold'>Values</h2>
          <p className='mt-3'>
            Quality first, customer respect, insurance guidance, and a lifetime warranty on body and paint
            work.
          </p>
        </div>
      </div>
      <div className='mt-8 grid md:grid-cols-3 gap-4'>
        <div className='photo-placeholder h-44'>Owner Photo Placeholder</div>
        <div className='photo-placeholder h-44'>Manager Photo Placeholder</div>
        <div className='photo-placeholder h-44'>Facility Photo Placeholder</div>
      </div>
    </main>
  );
}
