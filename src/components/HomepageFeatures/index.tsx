import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  titleId: string;
  badge: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CodeRabbit',
    titleId: 'homepage.features.coderabbit.title',
    badge: 'CR',
    description: (
      <Translate id="homepage.features.coderabbit.description">
        CodeRabbitの基本と、Pull Request上でのレビュー支援の受け方を学びます。
      </Translate>
    ),
  },
  {
    title: 'Git and GitHub',
    titleId: 'homepage.features.git.title',
    badge: 'GH',
    description: (
      <Translate id="homepage.features.git.description">
        ブランチ、コミット、Pull Requestなど、レビューに必要な周辺技術を整理します。
      </Translate>
    ),
  },
  {
    title: 'Bookmark App',
    titleId: 'homepage.features.bookmark.title',
    badge: 'APP',
    description: (
      <Translate id="homepage.features.bookmark.description">
        個人用ブックマークアプリの開発体験を通して、実践的なPRレビューを学びます。
      </Translate>
    ),
  },
];

function Feature({title, titleId, badge, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureBadge}>{badge}</div>
        <Heading as="h3">
          <Translate id={titleId}>{title}</Translate>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
