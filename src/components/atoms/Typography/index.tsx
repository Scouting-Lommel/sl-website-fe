'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Link from '@/components/atoms/Link';
import { Typography as TypographyProps } from './types';
import MarkdownRenderer from './renderers/MarkdownRenderer';
import StructuredTextRenderer from './renderers/StructuredTextRenderer';
import styles from './Typography.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const hasMoreLines = (element: HTMLElement, maxLines: number) => {
  const getTextNodes = (node: Node): Text[] => {
    const textNodes: Text[] = [];

    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);

    let currentNode = walker.nextNode();
    while (currentNode) {
      textNodes.push(currentNode as Text);
      currentNode = walker.nextNode();
    }

    return textNodes;
  };

  const linePositions = new Set<number>();
  const textNodes = getTextNodes(element);

  textNodes.forEach((textNode) => {
    const range = document.createRange();
    range.selectNodeContents(textNode);
    const rects = range.getClientRects();

    for (let i = 0; i < rects.length; i++) {
      linePositions.add(Math.round(rects[i].top));
    }
  });

  return linePositions.size > maxLines;
};

const Typography = ({
  data,
  modNoStyle,
  modPreWrap,
  variant = 'default',
  tagName = 'div',
  numberOfLines,
  children,
  className,
}: TypographyProps): JSX.Element => {
  const t = useTranslations('common');

  const ref = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState<Boolean>(false);
  const [shouldClamp, setShouldClamp] = useState<Boolean>(false);

  const typographyClasses = cn(
    'typography',
    `typography--${variant}`,
    !modNoStyle && 'typography--styled',
    modPreWrap && 'typography--pre-wrap',
    className,
  );

  const typographyStyles: React.CSSProperties = {
    WebkitLineClamp: !isExpanded ? numberOfLines : undefined,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
  };

  const TagName: any = tagName as keyof JSX.IntrinsicElements;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkOverflow = () => {
      setShouldClamp(hasMoreLines(element, numberOfLines || 2));
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [numberOfLines]);

  if (data && Array.isArray(data) && 'type' in (data[0] || {})) {
    return (
      <>
        <div ref={ref} className={typographyClasses} style={typographyStyles}>
          <StructuredTextRenderer data={data} />
        </div>
        {Boolean(numberOfLines) && shouldClamp && (
          <Link
            variant="link3"
            className="typography__read-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t('readLess') : t('readMore')}
          </Link>
        )}
      </>
    );
  }

  if (data && typeof data === 'string') {
    return (
      <>
        <div ref={ref} style={typographyStyles}>
          <MarkdownRenderer data={data} className={typographyClasses} />
        </div>
        {Boolean(numberOfLines) && shouldClamp && (
          <Link
            variant="link3"
            className="typography__read-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t('readLess') : t('readMore')}
          </Link>
        )}
      </>
    );
  }

  if (children) {
    return (
      <>
        <TagName ref={ref} className={typographyClasses} style={typographyStyles}>
          {children}
        </TagName>
        {Boolean(numberOfLines) && shouldClamp && (
          <Link
            variant="link3"
            className="typography__read-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t('readLess') : t('readMore')}
          </Link>
        )}
      </>
    );
  }

  return <></>;
};

export default Typography;
