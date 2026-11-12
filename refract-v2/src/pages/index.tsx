import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
// React imports
import { useState, useEffect } from "react";
import HomepageCards from '@site/src/components/HomepageCards';

type FeatureItem = {
  title: string;
  description: React.ReactNode;
  link: string;
  icon: string;
  isOfficial?: boolean;
};


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
<header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as='h1' className={clsx("hero__title", styles.heroTitle)}>
              Refract Documentation{" "}
              <span className={styles.gradientText}></span>
            </Heading>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
              Build predictable, reactive applications with declarative optics,
              reusable components, and minimal boilerplate.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--primary button--lg",
                  styles.primaryButton
                )}
                to='/docs/getting-started/intro'>
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CoreConcepts() {
  return(
      <section className={styles.featuresSection}>
        <div className='container'>
          <div className={styles.sectionHeader}>
            <Heading
              as='h2'
              className={clsx(styles.sectionHeading, "text--center")}>
              Core Concepts
            </Heading>
            <p className={clsx(styles.sectionSubheading, "text--center")}>
              Discover the powerful building blocks that make our platform unique.
              Official libraries come with enhanced support and documentation.
            </p>
          </div>
          <HomepageCards />
        </div>
      </section>


  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Build reactive applications with Refract. Modern state management with signals, lenses, and optics. TypeScript-first, performance-optimized, and developer-friendly.">
      <HomepageHeader />
      <main>
        <CoreConcepts />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
