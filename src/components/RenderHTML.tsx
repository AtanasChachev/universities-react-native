import React, { useMemo } from 'react';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from '@src/styles/hooks/useTheme';

type RenderHTMLComponentProps = {
  html: string;
};

const RenderHTMLComponent = ({ html }: RenderHTMLComponentProps) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const renderHTML = useMemo(() => {
    const systemFonts = [...defaultSystemFonts];
    return (
      <RenderHtml
        baseStyle={{
          ...styles.htmlStyles,
          backgroundColor: theme.background,
          color: theme.text,
        }}
        contentWidth={width}
        source={{ html: html }}
        enableExperimentalMarginCollapsing={true}
        systemFonts={systemFonts}
      />
    );
  }, [html, theme.background, theme.text, width]);

  return <>{renderHTML}</>;
};

const styles = StyleSheet.create({
  htmlStyles: {
    fontSize: 14,
    lineHeight: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export { RenderHTMLComponent };
