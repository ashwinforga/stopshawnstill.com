import shawnStillImage from '../assets/shawn_still.png';

const Header = () => {
  return (
    <header className='bg-gradient-to-b from-red-800 to-red-600 text-white py-4 px-4 relative overflow-hidden'>
      <div className='container mx-auto text-center relative z-10'>
        <h1 className='text-6xl font-extrabold mb-8 tracking-tight text-shadow-lg uppercase'>
          STOP
          <br />
          <span className='text-yellow-300'>SHAWN STILL</span>
        </h1>
        <div className='relative w-full max-w-[50%] mx-auto mb-8 z-20'>
          <div className='relative pb-[56.25%] h-0 overflow-hidden'>
            <iframe
              src='https://www.youtube.com/embed/aA2Meq0koSA'
              title='Embedded YouTube video'
              className='absolute top-0 left-0 w-full h-full border-4 border-white shadow-2xl'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
        </div>
        <div className='relative inline-block mb-4'>
          <img
            src={shawnStillImage}
            alt='Shawn Still mugshot'
            className='w-100 h-100 object-cover border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300'
          />
          <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <span className='text-4xl underline font-bold text-red-700'>
              INDICTED
            </span>
          </div>
        </div>

        <p className='text-3xl mb-6 font-light italic'>
          This November we need to
        </p>
        {/* [TO DO] need to fix the the text for all the stop and image size for MOBILE version! */}
        <ul className='text-4xl font-bold space-y-4 mb-8 flex flex-col items-center'>
          {[
            'Stop the criminality.',
            'Stop the corruption.',
            'Stop Shawn Still.',
          ].map((text, index) => (
            <li
              key={index}
              className='bg-red-900 py-2 px-12 rounded-lg transform hover:scale-105 transition-transform duration-300 inline-block cursor-default'>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div
        className='absolute top-0 left-0 w-full h-full bg-repeat opacity-10'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
    </header>
  );
};

export default Header;
