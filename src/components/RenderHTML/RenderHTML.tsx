import { memo } from 'react';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { useTheme } from '@src/styles/hooks/useTheme';
import { styles } from './styles';
import { RenderHTMLProps, RenderHTMLComponentProps } from './types';

const RenderHTMLComponent = memo(
  ({ theme, html, width }: RenderHTMLComponentProps): JSX.Element => {
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
  },
);

const RenderHTML = ({ html }: RenderHTMLProps): JSX.Element => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return <RenderHTMLComponent theme={theme} width={width} html={html} />;
};

export default RenderHTML;
