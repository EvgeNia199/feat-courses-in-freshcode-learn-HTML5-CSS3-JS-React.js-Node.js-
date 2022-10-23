import React, { useEffect, useState } from 'react'
import CardContest from './CardContest'
import styles from './ManagedContest.module.scss'

const db = [
    {
        head: 'Consultant led',
        body: 'Work one-on-one with a Squadhelp branding consultant',
        iconSrc: 'https://www.squadhelp.com/resources/assets/svg/icons/icon-46.svg',
    },
    {
        head: 'Crowd powered',
        body: 'Work with our top rated Creatives and receive a huge breadth of ideas.',
        iconSrc: 'https://www.squadhelp.com/resources/assets/svg/icons/icon-7.svg',
    },
    {
        head: 'Trademark Reports',
        body: 'Comprehensive trademark screening on your shortlisted names',
        iconSrc: 'https://www.squadhelp.com/resources/assets/svg/icons/icon-2.svg',
    },
    {
        head: 'Audience testing',
        body: 'Get rapid feedback from real people on your shortlist of business names',
        iconSrc: 'https://www.squadhelp.com/resources/assets/svg/icons/icon-58.svg',
    }
];

export default function ManagedContest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(db);
  }, data)

  const mapCards = (c, i) => {
    return <CardContest key={i} data={c} />
  }
  console.log('data222');
  console.log(data);
  return (
    <div className={styles.container}>
    <div className={styles.contant}>
      <h2>Managed Contests</h2>
      <h4>A Naming Agency Experience (minus the Agency-level price tag)</h4>
      <p>Our hybrid-solution partners you with a trained Squadhelp branding consultant who will guide your crowdsourcing process step-by-step to get the best results possible.</p>
    </div>
    <div className={styles.cardsContainer}>{data.map(mapCards)}</div>
    <button>Learn More About Managed Contests</button>
    </div>
  );
}