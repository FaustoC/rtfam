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
	<p>A simple organized database of answered questions about asoiaf<br/>with the aim of being as brief and direct as possible.<br/></p>
	<p>More detailed answers can be found on the Asoiaf Discord channel, which is the unique source of the answers in this website.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/rtfamIndex">
            Open the rtfAm Manual
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
          How many questions need an FAQ right now?
        </Heading>
	<p><b>2</b>, at the moment.<br/></p>
	<p>The number is surely higher but, at the moment, not every question is in the database.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/tags/need-an-faq/">
            Open the list of FAQ needing questions
          </Link>
        </div>
      </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Community answered questions about Asoiaf">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <NeedanFAQ />
      </main>
    </Layout>
  );
}
