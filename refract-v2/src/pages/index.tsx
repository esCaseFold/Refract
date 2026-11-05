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
                to='/docs/intro'>
                <span>Get Started</span>
              </Link>
              <Link
                className={clsx(
                  "button button--secondary button--lg",
                  styles.secondaryButton
                )}
                to='/docs/Tutorials/counter-app'>
                <span>📖 Tutorial</span>
              </Link>
            </div>
          </div>

          <div className={styles.codePreview}>
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.codeTitle}>Quick Start</div>
            </div>
            <div className={styles.codeContent}>
              <pre className={styles.codeBlock}>
                <code>{`// Install the library
npm install @refract/core

// Initialize and use
import { createRefraction } from '@refract/core';

const state = createRefraction({
  count: 0,
  user: null
});

// Reactive updates
state.count.set(42);
console.log(state.count.get()); // 42`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
