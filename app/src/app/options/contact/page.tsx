'use client';

const Contact = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-200">Contact</h1>
      <p className="text-lg mb-4 text-gray-200">
        Vous pouvez nous contacter par mail à l'adresse suivante :{' '}
        <a
          href="mailto:polymathon@proton.me"
          className="text-blue-500 hover:underline"
        >
          polymathon@proton.me
        </a>
      </p>

      <p className="text-lg mb-4 text-gray-200">
        Vous pouvez également rejoindre notre discord{' '}
      </p>
      <a
        href="https://twitter.com/polymathon"
        className="text-blue-500 hover:underline"
      >
        Serveur discord
      </a>
    </div>
  );
};

export default Contact;
