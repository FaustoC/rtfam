import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
	<p>This is the Website version of the ASOIAF:TMG Unofficial Community FAQ</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/cfaqIndex">
            Open the CFAQ
          </Link>
        </div>
      </div>
    </header>
  );
}

function NeedanFAQ() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div className="container text--center">
        <Heading as="h3" >
          Guiding principles of Competitive Play
        </Heading>
	<p><b>“It Doesn’t Say I can’t…” </b><br/></p>
	<p>Is not a good basis from which to make a rules argument. While it is true there is nothing in the rulebook that prevents a dog from playing ASOIAF, all of us in the spirit of fair competition should strive to play the same game in an honest and straightforward manner. Remember, it doesn’t say your opponent can’t strike you in the face in the rulebook. Act accordingly.</p>
        	
        	<p><b>“Rules as Written…”</b><br/></p>
	<p>Is a decent basis from which to start a rules debate. It is important to ask yourself, however, are you trying to game the system for a clear advantage over your opponent? Would a reasonable player come to this conclusion, or only after hours of dissection of specific words to try to find an advantage? The rules of this game have very large potential loopholes. It is our job as a community to police ourselves so that the game remains fun. There are many interesting interactions in this game that don’t break the above rules principals. Explore those. </p>
		
		<p><b>Card Game Etiquette </b><br/></p>
	<p>It is expected that you will follow some basic card game best practices.  When retrieving a card from your deck, you must allow your opponent to confirm that you have followed the restrictions by revealing the relevant info. If it's a specific named card, reveal it to your opponent. If it's a "commander card" you must reveal the portrait in the top corner to your opponent In the case of an effect like Patchfaces, A Tournament Organizer\Judge, or a trusted player from another table in the case of a large event, can be asked to check the hand. </p>
		
		<p><b>Dice Etiquette </b><br/></p>
	<p>Both players may roll dice freely from either player's dice pool. If a player rolls too many dice for a given roll, all dice will be rerolled regardless of the final result, (even if all die facings are a success.) Any other method for determining the outcome has an impact on the statistical final results. If too few dice are rolled, additional dice will be rolled until the total is correct.</p>
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ASOIAF:TMG Unofficial Community FAQ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <NeedanFAQ />
      </main>
    </Layout>
  );
}
