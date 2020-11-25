// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    <h1 className={styles['page__title']}>My Notes</h1>
    {edges.map((edge) => (
      <div className={styles['block']} key={edge.node.fields.slug}>
        <div className={styles['block__date']}>
          <i><time className={styles['feed__item-meta-time']} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
          { new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })}
          </time></i>
        </div>
        <div clasName={styles['block__body']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          <br />
          {edge.node.frontmatter.description}
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
