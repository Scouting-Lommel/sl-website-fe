'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import sanitizeHtml from 'sanitize-html';
import { MarkdownRendererProps } from '../types';

const MarkdownRenderer = ({ data, className }: MarkdownRendererProps): JSX.Element => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={className}
      // @ts-ignore
      rehypePlugins={[rehypeRaw]}
    >
      {sanitizeHtml(data)}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
