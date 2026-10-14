import React from 'react';
import './CastDirectory.css';

const castMembers = [
  {
    name: 'Harry Potter',
    role: 'Played by Daniel Radcliffe',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqLU9fZf00ponaXOdrEfKbc782CgiNDTsYw4hl'
  },
  {
    name: 'Ron Weasley',
    role: 'Played by Rupert Grint',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqhchHLqtZKDCqy7zFrvX5GiucQkeE1xwI4JUf'
  },
  {
    name: 'Hermione Granger',
    role: 'Played by Emma Watson',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqigWIBHwNc4obmAzslt9pGhfIK8DjuayFdeSR'
  },
  {
    name: 'Severus Snape',
    role: 'Played by Alan Rickman',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqzVkOzYUCYwfsWArUxEJlOBvkoeuTtLIbQc0g'
  },
  {
    name: 'Minerva McGonagall',
    role: 'Played by Maggie Smith',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq6ytUtESK3oml7D6HiwdG54Tnft9EkxyNZVjQ'
  },
  {
    name: 'Rubeus Hagrid',
    role: 'Played by Robbie Coltrane',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqO1P862nQHJXiaeD0IrspACGMZu8k4qSNoFl9'
  },
  {
    name: 'Albus Dumbledore',
    role: 'Played by Richard Harris / Michael Gambon',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqbRXNpFimoPfCY9KagJrVnOFAtp57DGERiLhH'
  },
  {
    name: 'Draco Malfoy',
    role: 'Played by Tom Felton',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqBleYlYxiqhPWMEwU4d1HFa368o0s9TKIYjOz'
  }
];

const CastDirectory = () => {
  return (
    <section className="cast-section">
      <h2 className="magic-text section-title">The Golden Trio & Co.</h2>
      <div className="cast-grid">
        {castMembers.map((member, index) => (
          <div key={index} className="cast-card">
            <div className="cast-image-container">
              <img src={member.image} alt={member.name} className="cast-image" />
              <div className="cast-overlay">
                <span className="cast-role">{member.role}</span>
              </div>
            </div>
            <h3 className="cast-name">{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CastDirectory;
