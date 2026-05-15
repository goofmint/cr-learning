import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  titleId: string;
  icons?: {
    src: string;
    alt: string;
  }[];
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CodeRabbit',
    titleId: 'homepage.features.coderabbit.title',
    icons: [{src: '/img/coderabbit.svg', alt: 'CodeRabbit'}],
    description: (
      <Translate id="homepage.features.coderabbit.description">
        CodeRabbitの基本と、PR上でのレビュー支援の受け方を学びます。
      </Translate>
    ),
  },
  {
    title: 'Git管理サービス',
    titleId: 'homepage.features.git.title',
    icons: [
      {src: '/img/github.svg', alt: 'GitHub'},
      {src: '/img/gitlab.svg', alt: 'GitLab'},
      {src: '/img/bitbucket.svg', alt: 'Bitbucket'},
      {src: '/img/azure-devops.svg', alt: 'Azure DevOps'},
    ],
    description: (
      <Translate id="homepage.features.git.description">
        ブランチ、コミット、PRなど、対応プラットフォームで共通するレビューの基本を整理します。
      </Translate>
    ),
  },
  {
    title: 'Bookmark App',
    titleId: 'homepage.features.bookmark.title',
    icons: [{src: '/img/bookmark.svg', alt: 'Bookmark App'}],
    description: (
      <Translate id="homepage.features.bookmark.description">
        個人用ブックマークアプリの開発体験を通して、実践的なPRレビューを学びます。
      </Translate>
    ),
  },
];

function Feature({title, titleId, icons, description}: FeatureItem) {
  const baseUrl = useBaseUrl('/');

  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        {icons && (
          <div className={styles.featureIcons}>
            {icons.map((icon) => (
              <img
                key={icon.alt}
                src={`${baseUrl}${icon.src.replace(/^\//, '')}`}
                alt={icon.alt}
              />
            ))}
          </div>
        )}
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
