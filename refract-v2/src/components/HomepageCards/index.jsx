import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const CardList = [
  {
    title: 'Refraction',
    description: 'Reactive unit of state, similar to signals or refs.',
    to: '/docs/concepts/refraction',
    emoji: '🌈💎', 
  },
  {
    title: 'Lenses',
    description: 'The bridge between props, refractions, and effects.',
    to: '/docs/concepts/lenses',
    emoji: '👓',
  },
  {
    title: 'Optics',
    description: 'Composable and reusable logic patterns, like React hooks.',
    to: '/docs/concepts/optical-composition',
    emoji: '⛓️',
  },
  {
    title: 'Components',
    description: 'Reusable components for building reactive applications. TypeScript compatible.',
    to: '/docs/concepts/components',
    emoji: '🧩',
  },
];

function Card({title, description, to, emoji}) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.emoji}>{emoji}</div>
      <Heading as="h3" className={styles.title}>{title}</Heading>
      <p className={styles.description}>{description}</p>
    </Link>
  );
}

export default function HomepageCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {CardList.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}