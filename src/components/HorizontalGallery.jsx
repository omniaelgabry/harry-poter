import React from 'react';
import './HorizontalGallery.css';

const galleryItems = [
  {
    id: 1,
    title: 'Magical Moment 1',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqeFldH2vEhmGQqBUXTV9P4u0sjSRDfwkgcarp',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqeFldH2vEhmGQqBUXTV9P4u0sjSRDfwkgcarp'
  },
  {
    id: 2,
    title: 'Magical Moment 2',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqB8KdRCxiqhPWMEwU4d1HFa368o0s9TKIYjOz',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqB8KdRCxiqhPWMEwU4d1HFa368o0s9TKIYjOz'
  },
  {
    id: 3,
    title: 'Magical Moment 3',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqxpZsKrD8gXWYV7U2ulDQMOj4ht6FoZGS1Lp5',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqxpZsKrD8gXWYV7U2ulDQMOj4ht6FoZGS1Lp5'
  },
  {
    id: 4,
    title: 'Magical Moment 4',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq7Oi0qA2LqlF1NER45BpGbHhes68K0wj7ndf9',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq7Oi0qA2LqlF1NER45BpGbHhes68K0wj7ndf9'
  },
  {
    id: 5,
    title: 'Magical Moment 5',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq8YwBMms0GbPji7192ACswTmfQ8uU6FyIahJW',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq8YwBMms0GbPji7192ACswTmfQ8uU6FyIahJW'
  },
  {
    id: 6,
    title: 'Magical Moment 6',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqpcJeYvKoYC4y1TKmHauNbSijPZwgFAM2c8dt',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqpcJeYvKoYC4y1TKmHauNbSijPZwgFAM2c8dt'
  },
  {
    id: 7,
    title: 'Magical Moment 7',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqFAZLpqYlrOcERNV8h3pvYsxk1jmwIPaAubgd',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqFAZLpqYlrOcERNV8h3pvYsxk1jmwIPaAubgd'
  },
  {
    id: 8,
    title: 'Magical Moment 8',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq2LlSqvBSqMNBOhv50Ha9gowcPdZTKJepiyk8',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq2LlSqvBSqMNBOhv50Ha9gowcPdZTKJepiyk8'
  },
  {
    id: 9,
    title: 'Magical Moment 9',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqnBk61pR7bwUGEWuKTDMolfsIS4qC26ByLF91',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqnBk61pR7bwUGEWuKTDMolfsIS4qC26ByLF91'
  },
  {
    id: 10,
    title: 'Magical Moment 10',
    category: 'Archive',
    image: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqXoK1Ey6BfOxkT4nAu10WaPpDUZLYR8H357zN',
    gif: 'https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqXoK1Ey6BfOxkT4nAu10WaPpDUZLYR8H357zN'
  }
];

const HorizontalGallery = () => {
  return (
    <section className="horizontal-gallery-section">
      <div className="gallery-header">
        <h2 className="magic-text">Gallery</h2>
        <p>The Daily Prophet Archive - Scroll to uncover living memories</p>
      </div>
      
      <div className="horizontal-container">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="card-inner">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="static-img" />
                <img src={item.gif} alt={`${item.title} animated`} className="animated-gif" />
                <div className="vintage-overlay"></div>
              </div>
              <div className="card-content">
                <span className="card-category">{item.category}</span>
                <h3 className="card-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;
