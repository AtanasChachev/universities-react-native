import React, { useMemo } from 'react';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { StyleSheet, useWindowDimensions } from 'react-native';

type RenderHTMLComponentProps = {
  html: string;
};

const RenderHTMLComponent = ({ html }: RenderHTMLComponentProps) => {
  const { width } = useWindowDimensions();

  const renderHTML = useMemo(() => {
    const systemFonts = [...defaultSystemFonts];
    return (
      <RenderHtml
        baseStyle={styles.htmlStyles}
        contentWidth={width}
        source={{ html: html }}
        enableExperimentalMarginCollapsing={true}
        systemFonts={systemFonts}
      />
    );
  }, [html, width]);

  return <>{renderHTML}</>;
};

const styles = StyleSheet.create({
  htmlStyles: {
    fontSize: 14,
    lineHeight: 24,
  },
});

export { RenderHTMLComponent };
