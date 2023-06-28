import React from 'react';

const Hobbies = () => {
  const hobbies = [
    {
      name: 'skateboarding',
      image: require('./skateboarding.jpg').default,
    },
    {
      name: 'running',
      image: require('./running.jpg').default,
    },
    {
      name: 'cooking',
      image: require('./cooking.jpg').default,
    },
  ];

  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            <img src={hobby.image} alt={hobby.name} />
            {hobby.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
